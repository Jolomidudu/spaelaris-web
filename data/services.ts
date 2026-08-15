export type Service = {
  name: string;
  price: number;
  description: string;
  duration?: string;
  benefits?: string[];
  includes?: string[];
  details?: string;
};

export type ServiceCategory = {
  id: string;
  number: string;
  name: string;
  shortName: string;
  description: string;
  image: string;
  services: Service[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "med-facials",
    number: "01",
    name: "Elaris Med Facials",
    shortName: "Med Facials",
    description:
      "Advanced facial treatments designed to restore, refine and reveal healthier-looking skin.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Skin Analysis & Consultation",
        price: 25000,
        description:
          "A personalized consultation designed to understand your skin and guide your treatment.",
      },
      {
        name: "Elaris Classic Facials",
        price: 35000,
        description:
          "Personalized essential facials designed to refresh, hydrate and restore your skin.",
      },
      {
        name: "Hydra Facials",
        price: 65000,
        description:
          "Deep cleansing, exfoliation, extraction and hydration using vortex technology.",
      },
      {
        name: "Derma Planning Facials",
        price: 60000,
        description:
          "Advanced exfoliation designed to improve skin texture and help skincare products penetrate more effectively.",
      },
      {
        name: "Elaris Anti Aging Facials",
        price: 50000,
        description:
          "A collagen-supporting treatment targeting fine lines, firmness and dullness.",
      },
      {
        name: "Acne Treatment Facials",
        price: 70000,
        description:
          "Customized treatment using medical-grade acne-fighting ingredients.",
      },
      {
        name: "Advanced Glow Facials",
        price: 40000,
        description:
          "A revitalizing treatment designed to brighten dull and uneven-looking skin.",
      },
      {
        name: "Oxygen Infusion Facials",
        price: 65000,
        description:
          "Oxygen infused with hydrating serums, vitamins and antioxidants for tired-looking skin.",
      },
      {
        name: "Micro-needling",
        price: 110000,
        description:
          "Controlled micro-channels stimulate collagen and elastin for smoother, firmer-looking skin.",
      },
      {
        name: "Deep Cleansing Facials",
        price: 40000,
        description:
          "A purifying facial designed to remove impurities, excess oil and congestion.",
      },
      {
        name: "Hydro Dermabrasion",
        price: 55000,
        description:
          "Gentle water-based exfoliation with vacuum technology and antioxidant-rich serum infusion.",
      },
      {
        name: "Vampire Facials (PRP)",
        price: 65000,
        description:
          "A platelet-rich plasma facial designed to support collagen production and natural skin renewal.",
      },
      {
        name: "Luminous Lift Facials",
        price: 35000,
        description:
          "A firming facial designed to restore radiance and improve the appearance of elasticity.",
      },
      {
        name: "Pores Refining Facials",
        price: 30000,
        description:
          "Deep cleansing and refining treatment for the appearance of enlarged pores.",
      },
      {
        name: "Brightening Facials",
        price: 30000,
        description:
          "Designed to reduce dullness and uneven-looking skin tone.",
      },
      {
        name: "Chemical Peel",
        price: 30000,
        description:
          "Medical-grade exfoliation designed to improve skin texture, tone and clarity.",
      },
      {
        name: "Butt Facials",
        price: 55000,
        description:
          "Deep cleansing and exfoliating treatment focused on texture and discoloration.",
      },
      {
        name: "Back Facials",
        price: 50000,
        description:
          "A purifying treatment that deeply cleanses, exfoliates and hydrates the back.",
      },
      {
        name: "Vjaycials",
        price: 65000,
        description:
          "An intimate skincare treatment designed to soothe, brighten and improve the appearance of the bikini area.",
      },
    ],
  },

  {
    id: "foot-hand-care",
    number: "02",
    name: "Elaris Foot & Hand Care",
    shortName: "Foot & Hand Care",
    description:
      "Refined manicure, pedicure and foot wellness rituals designed for beautifully cared-for hands and feet.",
    image:
      "https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Elaris Essential Pedicure",
        price: 15000,
        description:
          "Deep cleanse, scrub, cutting and filling for regular foot maintenance.",
      },
      {
        name: "Elaris Mud Soak",
        price: 25000,
        description:
          "Mineral-rich mud soak with foot mask, cutting and filling.",
      },
      {
        name: "Russian Manicure and Pedicure",
        price: 40000,
        description:
          "A meticulous dry treatment focused on refined cuticle care and a clean finish.",
      },
      {
        name: "Elaris Ritual",
        price: 55000,
        description:
          "Botanical soak infused with mineral salt and calming essential oils.",
      },
      {
        name: "Jelly Pedicure",
        price: 25000,
        description:
          "A warm jelly soak that softens, hydrates and relaxes tired feet.",
      },
      {
        name: "Herbal Foot Soak",
        price: 28000,
        description:
          "A soothing herbal treatment designed to refresh tired feet and ease tension.",
      },
      {
        name: "Foot Detox",
        price: 20000,
        description:
          "A cleansing treatment designed to refresh tired feet and promote relaxation.",
      },
      {
        name: "Classic Manicure",
        price: 10000,
        description:
          "Nail shaping, cuticle care, gentle buffing and polish application.",
      },
      {
        name: "Paraffin Wax",
        price: 30000,
        description:
          "Warm wax therapy designed to deeply moisturize and soften hands or feet.",
      },
    ],
  },

  {
    id: "service-menu",
    number: "03",
    name: "Elaris Service Menu",
    shortName: "Massage & Wellness",
    description:
      "Restorative massage experiences ranging from gentle relaxation to deep therapeutic bodywork.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1400&q=85",
    services: [
      // {
      //   name: "Elaris Swedish",
      //   price: 38000,
      //   description:
      //     "Long flowing strokes designed to calm the nervous system and release everyday tension.",
      // },


      {
  name: "Elaris Swedish",
  price: 38000,

  description:
    "A calming full-body massage using long, flowing strokes and gentle-to-moderate pressure to release everyday tension and encourage deep relaxation.",

  duration: "60 minutes",

  benefits: [
    "Relieves everyday muscle tension",
    "Promotes deep relaxation",
    "Encourages healthy circulation",
    "Helps reduce stress and mental fatigue",
    "Leaves the body feeling refreshed and restored",
  ],

  includes: [
    "Consultation before treatment",
    "Full-body Swedish massage",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Swedish is designed as a restorative massage experience for guests seeking relaxation and gentle bodywork. The treatment uses flowing massage techniques to ease tension while creating a calm and peaceful experience."
},

      // {
      //   name: "Elaris Deep Tissue",
      //   price: 50000,
      //   description:
      //     "Designed to release chronic muscle tension, ease stiffness and improve circulation.",
      // },
      {
  name: "Elaris Deep Tissue",
  price: 50000,

  description:
    "A targeted full-body massage using firm, controlled pressure to release deeper muscle tension, ease stiffness and promote physical recovery.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve deep muscle tension",
    "Eases stiffness and areas of muscular tightness",
    "Supports healthy circulation",
    "Promotes physical relaxation and recovery",
    "Leaves the body feeling looser and refreshed",
  ],

  includes: [
    "Consultation before treatment",
    "Full-body deep tissue massage",
    "Focused attention on areas of tension",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Deep Tissue is designed for guests who prefer a firmer, more focused massage experience. Controlled pressure and targeted techniques are used to work through areas of muscular tension while maintaining a calm and restorative spa environment.",
},
      // {
      //   name: "Elaris Aromatherapy",
      //   price: 55000,
      //   description:
      //     "A personalized blend of aromatic essential oils and soothing massage techniques.",
      // },
      {
  name: "Elaris Aromatherapy",
  price: 55000,

  description:
    "A soothing full-body massage combining flowing massage techniques with carefully selected aromatic oils to encourage relaxation and restore the senses.",

  duration: "60 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps relieve everyday muscle tension",
    "Supports a calm and peaceful state of mind",
    "Encourages healthy circulation",
    "Leaves the body feeling refreshed and renewed",
  ],

  includes: [
    "Consultation before treatment",
    "Personalized aromatherapy oil selection",
    "Full-body aromatherapy massage",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Aromatherapy combines the therapeutic feel of massage with the sensory experience of aromatic oils. The treatment is designed for guests seeking a peaceful escape from everyday stress while enjoying a gentle and restorative full-body massage.",
},
      // {
      //   name: "Elaris Aqua-Therapy",
      //   price: 75000,
      //   description:
      //     "Your massage of choice in a beautifully decorated jacuzzi setting.",
      // },

      {
  name: "Elaris Aqua-Therapy",
  price: 75000,

  description:
    "A relaxing massage experience performed in a beautifully decorated jacuzzi setting, combining soothing bodywork with the restorative warmth of hydrotherapy.",

  duration: "60 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps ease everyday muscle tension",
    "Combines massage with a soothing hydrotherapy setting",
    "Encourages a sense of calm and wellbeing",
    "Creates a luxurious and immersive spa experience",
  ],

  includes: [
    "Consultation before treatment",
    "Massage of your choice",
    "Private jacuzzi setting",
    "Warm hydrotherapy experience",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Aqua-Therapy brings together the comfort of a warm jacuzzi and the restorative experience of massage. Guests can enjoy their preferred massage in an intimate, beautifully decorated setting designed for relaxation and escape.",
},
      // {
      //   name: "Elaris Hot Stone",
      //   price: 55000,
      //   description:
      //     "Heated basalt stones combined with flowing massage techniques.",
      // },

      {
  name: "Elaris Hot Stone",
  price: 55000,

  description:
    "A deeply soothing massage combining flowing massage techniques with heated basalt stones to ease muscle tension and create a profound sense of relaxation.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve muscle tension and stiffness",
    "Promotes deep relaxation",
    "Encourages healthy circulation",
    "Helps the body release everyday stress",
    "Leaves you feeling warm, relaxed and restored",
  ],

  includes: [
    "Consultation before treatment",
    "Heated basalt stone treatment",
    "Full-body massage",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Hot Stone combines the warmth of heated basalt stones with flowing massage techniques. The gentle heat helps create a deeply relaxing experience while the massage works through areas of everyday tension and stiffness.",
},
      // {
      //   name: "Elaris Soul",
      //   price: 70000,
      //   description:
      //     "A combination of deep tissue and sensual massage techniques.",
      // },

      {
  name: "Elaris Soul",
  price: 70000,

  description:
    "A deeply relaxing full-body experience combining deep tissue techniques with soothing, sensual massage movements to release tension and encourage complete relaxation.",

  duration: "60 minutes",

  benefits: [
    "Helps release deep muscle tension",
    "Promotes physical and mental relaxation",
    "Encourages healthy circulation",
    "Helps ease everyday stress and fatigue",
    "Creates a deeply calming wellness experience",
  ],

  includes: [
    "Consultation before treatment",
    "Deep tissue massage techniques",
    "Relaxing massage techniques",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Soul is designed as an immersive relaxation experience, combining deeper therapeutic massage techniques with soothing movements. The treatment is intended to help guests disconnect from everyday stress while experiencing a calm and restorative spa environment.",
},
      // {
      //   name: "Elaris Couple",
      //   price: 80000,
      //   description:
      //     "A massage experience for couples that can be customized to their needs.",
      // },


      {
  name: "Elaris Couple",
  price: 80000,

  description:
    "A shared massage experience designed for couples, with each treatment personalized to create a relaxing and memorable wellness experience together.",

  duration: "60 minutes",

  benefits: [
    "Provides a relaxing experience for couples",
    "Helps relieve everyday muscle tension",
    "Promotes relaxation and stress relief",
    "Allows treatments to be customized to individual needs",
    "Creates a memorable shared spa experience",
  ],

  includes: [
    "Consultation before treatment",
    "Couples massage experience",
    "Massage customized to each guest",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Couple is designed for two guests to enjoy a relaxing wellness experience together. Each massage can be customized according to individual preferences and needs, creating a comfortable and restorative experience for both guests.",
},
      {
  name: "Elaris Kings",
  price: 70000,

  description:
    "A premium two-therapist massage experience combining deep tissue or Swedish techniques to provide a synchronized and deeply restorative treatment.",

  duration: "60 minutes",

  benefits: [
    "Helps release muscle tension throughout the body",
    "Promotes deep relaxation",
    "Encourages healthy circulation",
    "Provides a synchronized two-therapist experience",
    "Helps reduce physical stress and fatigue",
  ],

  includes: [
    "Consultation before treatment",
    "Two-therapist massage",
    "Choice of Swedish or deep tissue techniques",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Kings offers a unique two-therapist massage experience designed for guests seeking a more immersive treatment. Choose between Swedish or deep tissue techniques while two therapists work in coordination to create a balanced and restorative experience.",
},
      {
  name: "Elaris Reflexology",
  price: 38000,

  description:
    "A restorative foot-focused therapy using targeted pressure techniques to ease tension, reduce fatigue and create a deeply relaxing experience.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve foot and lower-leg tension",
    "Promotes relaxation",
    "Helps ease feelings of tiredness and fatigue",
    "Encourages healthy circulation",
    "Provides a calming and restorative experience",
  ],

  includes: [
    "Consultation before treatment",
    "Foot-focused reflexology treatment",
    "Targeted pressure techniques",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Reflexology focuses on the feet using targeted pressure and massage techniques. It is designed for guests who want to relax, unwind and give tired feet a restorative wellness experience.",
},
      {
  name: "Elaris Acupuncture",
  price: 88000,

  description:
    "A traditional Chinese medicine treatment using fine sterile needles at carefully selected points of the body to support relaxation, balance and overall wellbeing.",

  duration: "60 minutes",

  benefits: [
    "Promotes relaxation and calm",
    "May help ease muscle tension",
    "Supports a sense of overall wellbeing",
    "Encourages mindful body awareness",
    "Provides a traditional therapeutic wellness experience",
  ],

  includes: [
    "Initial consultation",
    "Personalized acupuncture treatment",
    "Use of fine sterile needles",
    "Calming treatment environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Acupuncture is a traditional wellness treatment performed using fine sterile needles placed at selected points of the body. The experience is personalized according to the guest's needs and is designed to encourage relaxation and a sense of balance.",
},
     {
  name: "Elaris Shaitsu",
  price: 48000,

  description:
    "A Japanese-inspired massage experience using focused finger pressure, gentle stretching and rhythmic techniques to release tension and promote relaxation.",

  duration: "60 minutes",

  benefits: [
    "Helps release everyday muscle tension",
    "Promotes relaxation and calm",
    "Encourages flexibility through gentle stretching",
    "Helps reduce physical stress and fatigue",
    "Creates a restorative full-body experience",
  ],

  includes: [
    "Consultation before treatment",
    "Japanese-inspired massage techniques",
    "Focused finger-pressure therapy",
    "Gentle stretching",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Shaitsu is a Japanese-inspired wellness treatment combining focused finger pressure with gentle stretching and rhythmic massage techniques. The experience is designed to release tension while leaving the body feeling relaxed and restored.",
},
      {
  name: "Elaris Thai",
  price: 65000,

  description:
    "A traditional Thai-inspired massage combining assisted stretching, rhythmic pressure and gentle joint mobilization to release tension and encourage flexibility.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve muscle tension and stiffness",
    "Encourages flexibility and mobility",
    "Promotes relaxation",
    "Helps ease everyday physical fatigue",
    "Creates a restorative full-body experience",
  ],

  includes: [
    "Consultation before treatment",
    "Traditional Thai massage techniques",
    "Assisted stretching",
    "Rhythmic pressure techniques",
    "Gentle joint mobilization",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Thai is inspired by traditional Thai massage techniques. The treatment combines rhythmic pressure, assisted stretching and gentle joint movements to create an invigorating yet relaxing experience for the whole body.",
},
     {
  name: "Elaris Herbal Therapy",
  price: 68000,

  description:
    "A restorative herbal wellness treatment combining therapeutic massage techniques with the soothing benefits of herbal compress therapy.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve everyday muscle tension",
    "Promotes deep relaxation",
    "Provides a soothing herbal wellness experience",
    "Helps ease physical stress and fatigue",
    "Leaves the body feeling refreshed and restored",
  ],

  includes: [
    "Consultation before treatment",
    "Herbal compress therapy",
    "Therapeutic massage techniques",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Herbal Therapy combines therapeutic massage with herbal compress techniques to create a calming and restorative experience. Warm herbal compresses are incorporated into the treatment to complement the massage and encourage relaxation.",
},
      {
  name: "Elaris Lymphatic Drainage",
  price: 50000,

  description:
    "A gentle, rhythmic massage experience designed to encourage natural lymphatic flow while promoting relaxation and a feeling of lightness.",

  duration: "60 minutes",

  benefits: [
    "Promotes relaxation",
    "Uses gentle rhythmic massage techniques",
    "Supports natural lymphatic circulation",
    "Helps ease feelings of heaviness and tension",
    "Leaves the body feeling refreshed and relaxed",
  ],

  includes: [
    "Consultation before treatment",
    "Gentle lymphatic massage",
    "Rhythmic massage techniques",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Lymphatic Drainage is a gentle wellness massage using slow, rhythmic movements designed to support the body's natural lymphatic flow. The treatment provides a calming experience and is particularly suited to guests looking for gentle, restorative bodywork.",
},
      {
  name: "Elaris Sport Massage",
  price: 30000,

  description:
    "A focused massage experience designed for active bodies, helping ease muscle tension and support recovery after physical activity.",

  duration: "60 minutes",

  benefits: [
    "Helps relieve muscle tension",
    "Supports post-activity recovery",
    "Helps ease stiffness and physical fatigue",
    "Promotes relaxation",
    "Provides targeted bodywork for active lifestyles",
  ],

  includes: [
    "Consultation before treatment",
    "Sports-focused massage techniques",
    "Targeted muscle treatment",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Sport Massage is designed for guests with active lifestyles or those experiencing muscle tension after physical activity. The treatment focuses on areas of tension using targeted massage techniques to promote relaxation and recovery.",
},
      {
  name: "Elaris VIP",
  price: 150000,

  description:
    "A premium 90-minute wellness experience combining your choice of massage with a private jacuzzi soak, refreshments and a beautifully decorated treatment room.",

  duration: "90 minutes",

  benefits: [
    "Provides an extended relaxation experience",
    "Helps relieve everyday muscle tension",
    "Combines massage with a private jacuzzi soak",
    "Creates a luxurious and intimate spa experience",
    "Allows guests to enjoy their preferred massage",
  ],

  includes: [
    "Consultation before treatment",
    "90-minute massage",
    "Massage of your choice",
    "Jacuzzi soak",
    "Refreshments",
    "Decorated treatment room",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris VIP is one of our premium wellness experiences, created for guests who want more than a traditional massage. The 90-minute experience includes a massage of your choice, a jacuzzi soak, refreshments and a beautifully decorated treatment room for a private and indulgent spa experience.",
},
      {
  name: "Elaris Prenatal Massage",
  price: 75000,

  description:
    "A gentle prenatal massage experience designed to provide comfort and relaxation while addressing common areas of tension and discomfort during pregnancy.",

  duration: "60 minutes",

  benefits: [
    "Helps ease back and body tension",
    "Provides a relaxing experience during pregnancy",
    "Helps relieve feelings of physical fatigue",
    "Provides gentle attention to areas of discomfort",
    "Promotes relaxation and overall wellbeing",
  ],

  includes: [
    "Consultation before treatment",
    "Pregnancy-appropriate massage techniques",
    "Gentle full-body massage",
    "Calming spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Prenatal Massage is designed specifically as a gentle wellness experience for expectant mothers. The treatment focuses on comfort and relaxation, with attention given to common areas of tension such as the back and feet.",
},
      {
  name: "Postrate Massage",
  price: 25000,

  description:
    "A specialized wellness massage focused on the lower abdominal, pelvic and inner-thigh areas, provided in a private and professional spa environment.",

  duration: "30 minutes",

  benefits: [
    "Promotes relaxation",
    "Helps ease tension in the lower body",
    "Provides focused attention to the pelvic and inner-thigh areas",
    "Creates a private and restorative wellness experience",
    "Encourages overall physical relaxation",
  ],

  includes: [
    "Consultation before treatment",
    "Specialized massage techniques",
    "Focused lower-body treatment",
    "Private treatment environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Postrate Massage is a specialized wellness experience focusing on the lower abdominal, pelvic and inner-thigh areas. The treatment is provided in a private and professional environment and is designed around comfort, relaxation and individual needs.",
},
     {
  name: "Elaris Kobido Massage",
  price: 48000,

  description:
    "A Japanese-inspired facial massage combining gentle lymphatic drainage, acupressure and rhythmic massage techniques to relax the face and refresh the senses.",

  duration: "60 minutes",

  benefits: [
    "Promotes facial relaxation",
    "Helps release facial and jaw tension",
    "Supports gentle lymphatic movement",
    "Encourages a refreshed and relaxed appearance",
    "Provides a calming facial wellness experience",
  ],

  includes: [
    "Consultation before treatment",
    "Facial massage",
    "Lymphatic drainage techniques",
    "Acupressure techniques",
    "Rhythmic massage movements",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Kobido Massage is inspired by traditional Japanese facial massage techniques. The treatment combines rhythmic movements, gentle lymphatic drainage and acupressure to create a relaxing facial wellness experience while helping release accumulated tension.",
},
    ],
  },

  {
    id: "special-treatment",
    number: "04",
    name: "Elaris Special Treatment",
    shortName: "Special Treatments",
    description:
      "Distinctive wellness experiences created for deeper relaxation, restoration and renewal.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Cold Plungings",
        price: 40000,
        description:
          "A short cold-water immersion experience designed around circulation, alertness and recovery.",
      },
      {
        name: "Jacuzzi Soak",
        price: 55000,
        description:
          "A therapeutic hydrotherapy experience in warm jacuzzi water infused with bath salts and essential oils.",
      },
      {
        name: "Japanese Head Spa",
        price: 45000,
        description:
          "A luxurious scalp and hair wellness ritual combining massage, hair care, facial massage and soothing steam.",
      },
      {
        name: "Mud Bath Therapy",
        price: 65000,
        description:
          "A restorative body treatment using warm mineral-rich mud.",
      },
      {
        name: "Cupping Therapy",
        price: 48000,
        description:
          "A traditional wellness treatment using specialized cups to create gentle suction.",
      },
      {
        name: "Dry Brushing Therapy",
        price: 40000,
        description:
          "Natural-bristle brushing designed to gently exfoliate dry skin.",
      },
      {
        name: "Shirodhara",
        price: 70000,
        description:
          "An Ayurvedic wellness ritual involving a continuous stream of warm herbal oil across the forehead.",
      },
      {
        name: "Meditation Sessions",
        price: 80000,
        description:
          "One-on-one meditation sessions with professional instructors.",
      },
      {
        name: "Insomnia ASMR",
        price: 50000,
        description:
          "A gentle relaxation session using soothing sounds, gentle touch and soft whispers.",
      },
    ],
  },

  {
    id: "body-ritual",
    number: "05",
    name: "Elaris Body Ritual",
    shortName: "Body Rituals",
    description:
      "Immersive body experiences combining exfoliation, hydration, warmth and botanical care.",
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Moroccan Hammam",
        price: 60000,
        description:
          "Traditional cleansing ritual using steam, exfoliation and nourishing treatments.",
      },
      {
        name: "Elaris Cleopatra",
        price: 75000,
        description:
          "A luxurious milk and botanical body ritual inspired by ancient beauty traditions.",
      },
      {
        name: "Mud Detox Therapy",
        price: 55000,
        description:
          "Mineral-rich mud treatment designed to draw out impurities and refresh the body.",
      },
      {
        name: "Velvet Skin Experience",
        price: 100000,
        description:
          "An indulgent full-body ritual combining exfoliation and hydration.",
      },
      {
        name: "The Goddess Ritual",
        price: 100000,
        description:
          "A signature head-to-toe wellness experience designed to restore balance and relaxation.",
      },
      {
        name: "Golden Glow Ritual",
        price: 85000,
        description:
          "A brightening body ritual that exfoliates, nourishes and enhances natural radiance.",
      },
      {
        name: "Exfoliation Therapy",
        price: 50000,
        description:
          "Full-body exfoliation designed to smooth texture and prepare the skin for hydration.",
      },
      {
        name: "Zen Body Ritual",
        price: 75000,
        description:
          "A calming body treatment combining relaxation techniques to ease tension.",
      },
      {
        name: "Arabic Scrub",
        price: 45000,
        description:
          "Traditional exfoliating scrub designed to deeply cleanse and smooth the skin.",
      },
      {
        name: "Milk Soak",
        price: 155000,
        description:
          "A luxurious milk bath designed to deeply hydrate, soften and nourish the skin.",
      },
      {
        name: "Elaris Herbal Soak",
        price: 70000,
        description:
          "A soothing botanical soak designed to relax the body and refresh the senses.",
      },
      {
        name: "Elaris Renewal Ritual",
        price: 150000,
        description:
          "A complete signature ritual combining multiple therapies for a restorative spa experience.",
      },
      {
        name: "Sauna",
        price: 25000,
        description: "20-minute dry heat therapy.",
      },
      {
        name: "Steam",
        price: 20000,
        description: "18-minute moist heat therapy.",
      },
    ],
  },

  {
    id: "wax",
    number: "06",
    name: "Elaris Wax",
    shortName: "Wax",
    description:
      "Professional waxing treatments with options ranging from targeted areas to full-body care.",
    image:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=85",
    services: [
      { name: "Under Arm Wax", price: 15000, description: "Underarm waxing treatment." },
      { name: "Half Arm Wax", price: 18000, description: "Half-arm waxing treatment." },
      { name: "Full Arm Wax", price: 28000, description: "Full-arm waxing treatment." },
      { name: "Half Leg Wax", price: 20000, description: "Half-leg waxing treatment." },
      { name: "Full Leg Wax", price: 38000, description: "Full-leg waxing treatment." },
      { name: "Under Chin Wax", price: 10000, description: "Under-chin waxing treatment." },
      { name: "Full Face Wax", price: 15000, description: "Full-face waxing treatment." },
      { name: "Brazilian Wax", price: 45000, description: "Brazilian waxing treatment." },
      { name: "Manxillian Wax", price: 58000, description: "Manxillian waxing treatment." },
      { name: "Stomach Wax", price: 30000, description: "Stomach waxing treatment." },
      { name: "Chest Wax", price: 35000, description: "Chest waxing treatment." },
      { name: "Full Body Wax", price: 70000, description: "Full-body waxing treatment." },
    ],
  },

  {
    id: "lazer",
    number: "07",
    name: "Elaris Lazer",
    shortName: "Laser Hair Removal",
    description:
      "Precision laser hair removal treatments for selected areas of the face and body.",
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1400&q=85",
    services: [
      { name: "Chick and Chin", price: 45000, description: "Laser treatment for cheek and chin." },
      { name: "Full Face", price: 55000, description: "Full-face laser treatment." },
      { name: "Chest Area", price: 75000, description: "Laser treatment for the chest area." },
      { name: "Half Arm", price: 60000, description: "Half-arm laser treatment." },
      { name: "Full Arm", price: 68000, description: "Full-arm laser treatment." },
      { name: "Half Leg", price: 45000, description: "Half-leg laser treatment." },
      { name: "Full Leg", price: 75000, description: "Full-leg laser treatment." },
      { name: "Upper Lip", price: 20000, description: "Upper-lip laser treatment." },
      { name: "Bikini Line", price: 40000, description: "Bikini-line laser treatment." },
      { name: "Brazilian", price: 85000, description: "Brazilian laser treatment." },
      { name: "Maxillian", price: 90000, description: "Maxillian laser treatment." },
    ],
  },

  {
    id: "couple-packages",
    number: "08",
    name: "Elaris Couple Packages",
    shortName: "Couple Experiences",
    description:
      "Curated private wellness experiences designed to be shared.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
    services: [
      {
        name: "Mi Amor",
        price: 150000,
        description:
          "Swedish massage (60 mins), classic pedicure & manicure, full body steam and Elaris classic facials.",
      },
      {
        name: "Mi Vida Deluxe",
        price: 250000,
        description:
          "Couples aromatherapy, traditional Moroccan Hammam, deep cleansing facials, jacuzzi soak and refreshments.",
      },
      {
        name: "LA ROSA",
        price: 300000,
        description:
          "Jelly pedicure & manicure, advanced glow facials, infrared sauna, full body scrub and herbal healing massage.",
      },
      {
        name: "LA LILIA",
        price: 360000,
        description:
          "Jacuzzi soak, Elaris signature pedicure, Elaris hot stone massage, teeth whitening, Zen body scrub, decorated room and refreshments.",
      },
    ],
  },
];

export const formatPrice = (price: number) =>
  `₦${price.toLocaleString("en-NG")}`;

export const serviceSlug = (name: string) =>
  name
    .toLowerCase()
    .trim()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");