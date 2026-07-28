import nodemailer from 'nodemailer';
import { getDbPool } from '../config/db.js';

export const handleContactEnquiry = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !message) {
    return res.status(400).json({ success: false, message: 'Name and message are required.' });
  }

  try {
    // 1. Save enquiry in MySQL DB
    try {
      const pool = await getDbPool();
      await pool.query(
        'INSERT INTO enquiries (name, email, phone, message) VALUES (?, ?, ?, ?)',
        [name, email || '', phone || '', message]
      );
      console.log(`[MySQL DB] Saved contact enquiry from ${name}`);
    } catch (dbErr) {
      console.warn('[MySQL DB Warning]: Could not save enquiry to DB:', dbErr.message);
    }

    // 2. Send Gmail Email Notification
    const emailUser = process.env.EMAIL_USER;
    const emailPass = process.env.EMAIL_PASS;
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || emailUser;

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user: emailUser, pass: emailPass },
      });

      const hasEmail = email && email.trim() !== '';
      const hasPhone = phone && phone.trim() !== '';
      const senderEmailDisplay = hasEmail ? email : 'Not Provided (Optional)';
      const senderPhoneDisplay = hasPhone ? phone : 'Not Provided';
      const dateStr = new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      });

      const emailHtml = `
        <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #f7faf6; padding: 20px; border-radius: 12px;">
          <div style="background-color: #2c4a2e; border-radius: 10px 10px 0 0; padding: 30px 25px; text-align: center; border-bottom: 4px solid #c4622d;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: 1px; font-family: Georgia, serif;">VEDIC HERMITAGE</h1>
            <p style="color: #d4a843; margin: 6px 0 0 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1.5px;">New Website Contact Message</p>
          </div>
          <div style="background-color: #ffffff; border-radius: 0 0 10px 10px; padding: 30px 25px; border: 1px solid #e2ded8; border-top: none;">
            <h3 style="color: #2c4a2e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 15px; border-bottom: 1px solid #f0eae1; padding-bottom: 8px;">Contact Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 25px; font-size: 14px;">
              <tr>
                <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; width: 130px; border-bottom: 1px solid #f5f0eb;">Full Name</td>
                <td style="padding: 10px 12px; color: #2d241e; font-weight: 600; border-bottom: 1px solid #f5f0eb;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Contact Number</td>
                <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">
                  ${hasPhone ? `<a href="tel:${phone}" style="color: #c4622d; text-decoration: none; font-weight: 600;">${phone}</a>` : `<span style="color: #999;">${senderPhoneDisplay}</span>`}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600; border-bottom: 1px solid #f5f0eb;">Email Address</td>
                <td style="padding: 10px 12px; color: #2d241e; border-bottom: 1px solid #f5f0eb;">
                  ${hasEmail ? `<a href="mailto:${email}" style="color: #c4622d; text-decoration: none; font-weight: 600;">${email}</a>` : `<span style="background-color: #f0ebe5; color: #786c62; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">Not Provided (Optional)</span>`}
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 12px; color: #6b5e54; font-weight: 600;">Submitted At</td>
                <td style="padding: 10px 12px; color: #786c62; font-size: 13px;">${dateStr}</td>
              </tr>
            </table>
            <h3 style="color: #2c4a2e; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; margin-top: 0; margin-bottom: 12px;">Customer Description / Message</h3>
            <div style="background-color: #faf6f0; border: 1px solid #d9d1c7; border-radius: 8px; padding: 20px; color: #2d241e; font-size: 15px; line-height: 1.6; white-space: pre-wrap; word-break: break-word;">${message}</div>
            ${hasEmail || hasPhone ? `
              <div style="margin-top: 30px; text-align: center;">
                ${hasEmail ? `<a href="mailto:${email}" style="background-color: #c4622d; color: #ffffff; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block;">Reply via Email</a>` : ''}
                ${hasPhone ? `<a href="tel:${phone}" style="background-color: #2c4a2e; color: #ffffff; padding: 12px 26px; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 14px; display: inline-block; margin-left: 8px;">Call Sender</a>` : ''}
              </div>
            ` : ''}
          </div>
          <div style="text-align: center; padding-top: 15px; color: #8c7e72; font-size: 12px;">
            Sent via Vedic Hermitage Contact Form
          </div>
        </div>
      `;

      await transporter.sendMail({
        from: `"Vedic Hermitage Website" <${emailUser}>`,
        to: recipientEmail,
        replyTo: hasEmail ? email : undefined,
        subject: `New Contact Message from ${name}`,
        html: emailHtml,
      });
      console.log(`[Nodemailer] Email sent successfully to ${recipientEmail}`);
    }

    return res.status(200).json({ success: true, message: 'Message submitted successfully!' });
  } catch (err) {
    console.error('[Contact Handler Error]:', err);
    return res.status(500).json({ success: false, message: 'Failed to process message.' });
  }
};
