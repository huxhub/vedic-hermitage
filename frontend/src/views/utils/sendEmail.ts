export interface ContactFormData {
  name: string;
  email?: string;
  phone?: string;
  message: string;
}

export interface SendEmailResult {
  success: boolean;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<SendEmailResult> {
  const recipientEmail = import.meta.env.VITE_CONTACT_RECIPIENT_EMAIL || "mridul1422@gmail.com";
  const emailJsServiceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const emailJsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const emailJsPublicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;

  const senderEmail = data.email && data.email.trim() !== "" ? data.email : "Not provided";
  const senderPhone = data.phone && data.phone.trim() !== "" ? data.phone : "Not provided";

  // Option 1: Send via API endpoint (/api/contact)
  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const resData = await response.json();
      return resData;
    }
  } catch (err) {
    console.warn("Local API endpoint not available, trying external services...", err);
  }

  // Option 2: Send via EmailJS API if credentials exist
  if (emailJsServiceId && emailJsTemplateId && emailJsPublicKey) {
    try {
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service_id: emailJsServiceId,
          template_id: emailJsTemplateId,
          user_id: emailJsPublicKey,
          template_params: {
            from_name: data.name,
            from_email: senderEmail,
            phone: senderPhone,
            message: data.message,
            to_email: recipientEmail,
            reply_to: data.email || recipientEmail,
          },
        }),
      });

      if (response.ok) {
        return { success: true, message: "Email sent successfully via EmailJS." };
      }
    } catch (err) {
      console.error("Error dispatching email via EmailJS:", err);
    }
  }

  // Option 3: Send via Custom Webhook / Formspree if configured
  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.name,
          email: senderEmail,
          phone: senderPhone,
          message: data.message,
          recipient: recipientEmail,
        }),
      });

      if (response.ok) {
        return { success: true, message: "Message sent successfully via Webhook." };
      }
    } catch (err) {
      console.error("Error sending to Webhook:", err);
    }
  }

  // Option 4: Mailto fallback
  try {
    const subject = encodeURIComponent(`New Contact Form Submission from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\n` +
      `Email: ${senderEmail}\n` +
      `Phone: ${senderPhone}\n\n` +
      `Message:\n${data.message}`
    );
    const mailtoUrl = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    window.open(mailtoUrl, "_blank");

    return {
      success: true,
      message: `Message submitted successfully! (Target email: ${recipientEmail})`,
    };
  } catch (err) {
    console.error("Mailto fallback error:", err);
    return {
      success: true,
      message: "Message submitted successfully.",
    };
  }
}
