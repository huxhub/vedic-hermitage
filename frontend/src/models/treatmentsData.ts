import imgTx1 from "@/imports/AyurvedaLandingPage/eec12e62778dadd1fb3a6530bdada5cccae38092.png";
import imgTx2 from "@/imports/AyurvedaLandingPage/ed4942762bfea5258f3063eb9cc6384dcb7cd6b1.png";
import imgTx3 from "@/imports/AyurvedaLandingPage/d76a0594717cb4ac1670a8785de616377ca9ba99.png";
import imgTx4 from "@/imports/AyurvedaLandingPage/e5dd23e4661ae55488279208ba92feaca24f3fab.png";
import imgTx5 from "@/imports/AyurvedaLandingPage/91877287006c415a6f60189fcb2e22c87e9a4a33.png";
import imgTx6 from "@/imports/AyurvedaLandingPage/823e3472863bd026aed51cb8e046b8244254dd2c.png";

export const allTreatmentsData = [
  // Treatments
  {
    id: "panchakarma-detox",
    category: "treatments",
    title: "Panchakarma Detox",
    desc: "A comprehensive five-step purification process to remove deep-seated toxins (Ama) from the body. This is the cornerstone of Ayurvedic medicine — a complete bodily cleanse.",
    fullDesc: "Panchakarma is the ultimate mind-body healing experience for detoxifying the body, strengthening the immune system, and restoring balance and well-being. It consists of five primary therapies tailored to your unique constitution (Dosha). This deep cleansing process targets toxins stored in the cells, improving metabolic function and mental clarity. It is highly recommended for chronic illnesses, stress, and overall rejuvenation.",
    duration: "90 min",
    img: imgTx1,
    tag: "Detoxification",
    benefits: [
      "Removes root cause of diseases",
      "Balances the Vata, Pitta, and Kapha doshas",
      "Improves immunity and mental clarity",
      "Enhances cellular rejuvenation"
    ]
  },
  {
    id: "abhyanga-massage",
    category: "treatments",
    title: "Abhyanga Massage",
    desc: "A rhythmic full-body massage using warm medicated oils tailored to your unique Dosha constitution. Deeply nourishing to the nervous system and lymphatic circulation.",
    fullDesc: "Abhyanga is a synchronized, whole-body massage performed by experienced therapists using specific herbal oils chosen according to your Dosha. This treatment enhances blood circulation, reduces stress, and deeply moisturizes the skin. The rhythmic motion helps to mobilize toxins towards the gastrointestinal tract for elimination, making it a profoundly relaxing and detoxifying experience.",
    duration: "60 min",
    img: imgTx2,
    tag: "Massage",
    benefits: [
      "Nourishes the body and extends lifespan",
      "Promotes good sleep and healthy skin",
      "Strengthens immunity and increases energy",
      "Pacifies Vata dosha"
    ]
  },
  {
    id: "shirodhara-oil-therapy",
    category: "treatments",
    title: "Shirodhara Oil Therapy",
    desc: "A continuous, gentle flow of warm herbal oil over the forehead (third eye). Profoundly calming for stress, anxiety, insomnia, and neurological imbalances.",
    fullDesc: "Shirodhara involves pouring a continuous stream of warm, medicated oil over the forehead (the 'third eye' region). This gentle pressure deeply relaxes the central nervous system, helping to release mental tension, alleviate anxiety, and promote profound inner peace. It synchronizes brain waves and is excellent for mental and emotional balance.",
    duration: "45 min",
    img: imgTx3,
    tag: "Nervous System",
    benefits: [
      "Reduces stress, anxiety, and depression",
      "Improves sleep quality and helps cure insomnia",
      "Enhances mental focus and clarity",
      "Soothes the nervous system"
    ]
  },
  {
    id: "pizhichil-oil-bath",
    category: "treatments",
    title: "Pizhichil Oil Bath",
    desc: "A unique combination of rhythmic oil massage and sudation therapy. Warm medicated oil is poured continuously over the body while two therapists perform simultaneous massage.",
    fullDesc: "Pizhichil, also known as an oil bath, is a regal treatment where warm, medicated oil is rhythmically poured over the entire body by two to four therapists. Combined with gentle massage, it induces intense sweating, facilitating the elimination of toxins. It is highly effective for rheumatic diseases, nervous disorders, and severe joint pain.",
    duration: "90 min",
    img: imgTx4,
    tag: "Rejuvenation",
    benefits: [
      "Relieves body pain and muscle spasms",
      "Promotes anti-aging and rejuvenation",
      "Improves blood circulation and vitality",
      "Effective for neurological disorders"
    ]
  },
  {
    id: "nasyam-cleansing",
    category: "treatments",
    title: "Nasyam Cleansing",
    desc: "Therapeutic administration of medicated oils or herbal extracts through the nasal passages. Highly effective for sinus congestion, headaches, and mental clarity.",
    fullDesc: "Nasyam is the nasal administration of therapeutic oils, powders, or plant juices. Since the nose is considered the doorway to the brain in Ayurveda, this treatment clears the sinuses, relieves chronic headaches, and stimulates the centers of the brain governing emotions and intellect. It cleanses toxins from the head and neck region.",
    duration: "30 min",
    img: imgTx5,
    tag: "Cleansing",
    benefits: [
      "Clears nasal and sinus passages",
      "Relieves migraines and chronic headaches",
      "Improves memory and vision",
      "Reduces stiffness in the neck and shoulders"
    ]
  },
  {
    id: "kizhi-pouch-massage",
    category: "treatments",
    title: "Kizhi Pouch Massage",
    desc: "Warm linen pouches filled with medicinal herbs, rice, or sand are applied rhythmically to the body. Excellent for musculoskeletal pain, stiffness, and inflammation.",
    fullDesc: "Kizhi involves massaging the body with warm boluses (pouches) containing specially formulated herbs, medicinal leaves, lemon, or rice. The heat and herbs combined provide a deep tissue treatment. This therapy is highly effective in treating arthritis, muscle stiffness, and sports injuries by reducing inflammation and improving joint mobility.",
    duration: "60 min",
    img: imgTx6,
    tag: "Pain Relief",
    benefits: [
      "Relieves joint pain and stiffness",
      "Reduces inflammation and swelling",
      "Improves muscle tone and strength",
      "Enhances peripheral blood circulation"
    ]
  },

  // Yoga
  {
    id: "hatha-yoga",
    category: "yoga",
    title: "Hatha Yoga",
    desc: "A classical system that encompasses physical postures, breathing exercises, and meditation. Ideal for beginners and those seeking balance and strength.",
    fullDesc: "Hatha Yoga focuses on mastering physical postures (asanas) and breath control (pranayama). It is designed to balance the sun (ha) and moon (tha) energies within the body, providing a solid foundation for physical health and mental focus. The slow-paced nature allows practitioners to hold poses longer and develop deep body awareness.",
    duration: "60 min",
    img: imgTx1, // Using existing imported images
    tag: "Foundation",
    benefits: [
      "Builds foundational strength and flexibility",
      "Improves posture and spinal health",
      "Calms the mind and reduces stress",
      "Balances internal energy channels"
    ]
  },
  {
    id: "ashtanga-yoga",
    category: "yoga",
    title: "Ashtanga Yoga",
    desc: "A dynamic and physically demanding practice synchronizing breath with a progressive series of postures. Excellent for building internal heat and purifying the body.",
    fullDesc: "Ashtanga Yoga is an intense, flowing style that follows a specific, predefined sequence of poses. It generates internal heat, leading to profuse sweating that purifies the muscles and organs. The synchronization of breath with movement (vinyasa) results in improved circulation, a light and strong body, and a calm mind.",
    duration: "90 min",
    img: imgTx2,
    tag: "Dynamic",
    benefits: [
      "Increases cardiovascular endurance",
      "Detoxifies the body through intense sweating",
      "Builds exceptional core strength and stamina",
      "Improves mental discipline"
    ]
  },
  {
    id: "vinyasa-flow",
    category: "yoga",
    title: "Vinyasa Flow",
    desc: "A fluid sequence of poses seamlessly linked together with the breath. Enhances flexibility, cardiovascular health, and mental focus.",
    fullDesc: "Vinyasa Flow is a dynamic practice where movements are synchronized with the breath in a continuous, dance-like flow. It encourages creativity and mindfulness, moving smoothly from one posture to another to build heat and flexibility. Each class offers a unique sequence of poses.",
    duration: "75 min",
    img: imgTx3,
    tag: "Flow",
    benefits: [
      "Enhances cardiovascular health",
      "Improves coordination and balance",
      "Fosters a state of moving meditation",
      "Increases overall flexibility"
    ]
  },
  {
    id: "yin-yoga",
    category: "yoga",
    title: "Yin Yoga",
    desc: "A slow-paced style holding postures for longer periods. Targets deep connective tissues, fascia, and joints, promoting profound relaxation and flexibility.",
    fullDesc: "Yin Yoga targets the deep connective tissues of the body—the ligaments, joints, and fascia. Poses are held passively on the floor for extended periods, typically 3 to 5 minutes. This gentle traction encourages deep relaxation, increased circulation in the joints, and enhanced structural flexibility.",
    duration: "60 min",
    img: imgTx4,
    tag: "Restorative",
    benefits: [
      "Increases mobility and joint health",
      "Releases deep-seated physical and mental tension",
      "Promotes a deep sense of calm and stillness",
      "Balances active (yang) exercise routines"
    ]
  },
  {
    id: "pranayama-meditation",
    category: "yoga",
    title: "Pranayama & Meditation",
    desc: "Guided breathing techniques and mindfulness practices to calm the nervous system, reduce stress, and cultivate mental clarity and inner peace.",
    fullDesc: "This session combines powerful breathing exercises (pranayama) with guided meditation techniques. It is designed to harness the life force energy (prana), clear mental blockages, and guide the practitioner into a state of profound inner peace. Suitable for all levels, it is highly effective for stress management.",
    duration: "45 min",
    img: imgTx5,
    tag: "Mindfulness",
    benefits: [
      "Significantly reduces anxiety and stress",
      "Improves respiratory function and lung capacity",
      "Enhances mental clarity and emotional stability",
      "Lowers blood pressure and heart rate"
    ]
  },
  {
    id: "therapeutic-yoga",
    category: "yoga",
    title: "Therapeutic Yoga",
    desc: "Customized sessions tailored to specific health conditions or injuries. Combines gentle movement, breathwork, and supported postures for healing and recovery.",
    fullDesc: "Therapeutic Yoga provides individualized care utilizing yoga tools—gentle postures, restorative poses with props, breathing techniques, and guided imagery—to address specific physical or mental health needs. It safely supports the body's natural healing processes and is ideal for rehabilitation.",
    duration: "60 min",
    img: imgTx6,
    tag: "Healing",
    benefits: [
      "Aids in recovery from injuries or surgeries",
      "Manages chronic pain and physical imbalances",
      "Provides personalized techniques for long-term health",
      "Accessible for individuals with limited mobility"
    ]
  }
];
