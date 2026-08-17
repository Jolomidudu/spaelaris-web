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

  duration: "10 minutes",

  benefits: [
    "Encourages a refreshed and energized feeling",
    "Supports post-activity recovery",
    "Provides a stimulating wellness experience",
    "Helps promote a sense of alertness",
    "Creates a revitalizing contrast to heat-based treatments",
  ],

  includes: [
    "Pre-treatment guidance",
    "Cold-water immersion experience",
    "Calm spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Cold Plungings is a refreshing wellness experience centered around brief cold-water immersion. Designed for guests seeking an invigorating treatment, it offers a stimulating contrast to traditional warm and heat-based spa experiences.",
},
      {
  name: "Jacuzzi Soak",
  price: 55000,

  description:
    "A therapeutic hydrotherapy experience in warm jacuzzi water infused with bath salts and essential oils.",

  duration: "45 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps ease everyday muscle tension",
    "Provides a soothing hydrotherapy experience",
    "Encourages relaxation and stress relief",
    "Leaves the body feeling refreshed and restored",
  ],

  includes: [
    "Pre-treatment guidance",
    "Warm jacuzzi soak",
    "Bath salts and essential oils",
    "Calm spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Jacuzzi Soak is a relaxing hydrotherapy experience designed to help guests unwind in warm, soothing water. The treatment combines the comfort of a jacuzzi with bath salts and essential oils to create a restorative spa experience.",
},
      {
  name: "Japanese Head Spa",
  price: 45000,

  description:
    "A luxurious scalp and hair wellness ritual combining massage, hair care, facial massage and soothing steam.",

  duration: "60 minutes",

  benefits: [
    "Relieves scalp and head tension",
    "Promotes deep relaxation",
    "Helps refresh the scalp and hair",
    "Encourages a calming wellness experience",
    "Leaves you feeling refreshed and restored",
  ],

  includes: [
    "Scalp cleansing and care",
    "Japanese-inspired head massage",
    "Facial massage",
    "Soothing steam experience",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Japanese Head Spa is a luxurious scalp and hair wellness ritual designed to create a deeply relaxing experience. The treatment combines attentive scalp care, massage, facial techniques and soothing steam in a calm spa environment.",
},
      {
  name: "Mud Bath Therapy",
  price: 65000,

  description:
    "A restorative body treatment using warm mineral-rich mud.",

  duration: "60 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps soothe tired muscles",
    "Gently exfoliates and refreshes the skin",
    "Provides a calming body-care experience",
    "Leaves the skin feeling refreshed and renewed",
  ],

  includes: [
    "Pre-treatment guidance",
    "Warm mineral-rich mud application",
    "Relaxation period",
    "Body cleansing",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Mud Bath Therapy is a restorative body treatment that combines warm mineral-rich mud with a relaxing spa experience. The treatment is designed to refresh the skin, soothe the body and provide a calming sense of renewal.",
},
      {
  name: "Cupping Therapy",
  price: 48000,

  description:
    "A traditional wellness treatment using specialized cups to create gentle suction.",

  duration: "45 minutes",

  benefits: [
    "Promotes relaxation",
    "Helps ease areas of muscle tension",
    "Supports a soothing body-care experience",
    "Encourages a feeling of physical relaxation",
    "Provides a traditional therapeutic wellness experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Cupping therapy session",
    "Specialized therapeutic cups",
    "Calm spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Cupping Therapy is a traditional wellness experience using specialized cups to create gentle suction on selected areas of the body. The treatment is designed to provide a relaxing and restorative experience within the calm environment of Spa Elaris.",
},
      {
  name: "Dry Brushing Therapy",
  price: 40000,

  description:
    "Natural-bristle brushing designed to gently exfoliate dry skin.",

  duration: "30 minutes",

  benefits: [
    "Gently exfoliates the skin",
    "Helps remove surface dead skin cells",
    "Leaves the skin feeling smoother and refreshed",
    "Provides a stimulating body-care experience",
    "Prepares the skin for nourishing body treatments",
  ],

  includes: [
    "Pre-treatment guidance",
    "Full-body dry brushing",
    "Gentle exfoliation",
    "Calm spa environment",
    "Post-treatment skincare",
  ],

  details:
    "Elaris Dry Brushing Therapy is a gentle body-care treatment using natural-bristle brushing techniques to exfoliate the skin and create a refreshed, smooth feeling. It can also be incorporated into a broader body-care or wellness experience.",
},
      {
  name: "Shirodhara",
  price: 70000,

  description:
    "An Ayurvedic wellness ritual involving a continuous stream of warm herbal oil across the forehead.",

  duration: "60 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Encourages a calm and peaceful state",
    "Helps ease everyday mental tension",
    "Provides a soothing sensory experience",
    "Supports an overall sense of wellness and relaxation",
  ],

  includes: [
    "Pre-treatment consultation",
    "Warm herbal oil preparation",
    "Shirodhara treatment",
    "Calm and restorative spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Shirodhara is an Ayurvedic-inspired wellness ritual featuring a continuous flow of warm herbal oil across the forehead. The treatment is designed as a deeply calming experience, allowing guests to slow down, relax and enjoy a peaceful moment of restoration.",
},
     {
  name: "Meditation Sessions",
  price: 80000,

  description:
    "One-on-one meditation sessions with professional instructors.",

  duration: "60 minutes",

  benefits: [
    "Promotes relaxation and mental calm",
    "Provides a quiet space for reflection",
    "Helps reduce everyday mental tension",
    "Encourages mindful breathing and presence",
    "Supports an overall sense of wellbeing",
  ],

  includes: [
    "One-on-one session",
    "Guidance from a professional instructor",
    "Personalized meditation techniques",
    "Calm and private environment",
    "Post-session relaxation",
  ],

  details:
    "Elaris Meditation Sessions provide a private and calming environment where guests can slow down, reconnect with themselves and explore guided meditation techniques. Each session is conducted one-on-one and can be adapted to the guest's wellness needs and level of experience.",
},
      {
  name: "Insomnia ASMR",
  price: 50000,

  description:
    "A gentle relaxation session using soothing sounds, gentle touch and soft whispers.",

  duration: "45 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Creates a calming sensory experience",
    "Helps ease everyday stress and tension",
    "Encourages a peaceful state of mind",
    "Provides a quiet environment for relaxation",
  ],

  includes: [
    "Pre-treatment consultation",
    "Personalized ASMR relaxation session",
    "Soothing sounds and gentle touch",
    "Calm and private environment",
    "Post-session relaxation",
  ],

  details:
    "Elaris Insomnia ASMR is a calming sensory relaxation experience designed around soothing sounds, gentle touch and soft whispers. The session takes place in a peaceful environment and is intended to help guests slow down, disconnect from everyday distractions and enjoy a deeply relaxing experience.",
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
    "A traditional Moroccan-inspired cleansing ritual combining steam, exfoliation and nourishing body treatments to deeply purify, soften and refresh the skin.",

  duration: "75 minutes",

  benefits: [
    "Deeply cleanses and exfoliates the skin",
    "Helps remove dead skin cells and impurities",
    "Leaves the skin feeling softer and smoother",
    "Supports a refreshed and revitalized appearance",
    "Promotes deep relaxation",
    "Creates a luxurious full-body wellness experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Steam preparation",
    "Full-body exfoliation",
    "Traditional Moroccan-inspired cleansing ritual",
    "Nourishing body treatment",
    "Calm and private spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Moroccan Hammam is a luxurious body ritual inspired by traditional Moroccan bathing practices. The experience combines warmth, steam, exfoliation and nourishing body care to cleanse and refresh the skin while creating a deeply relaxing wellness experience. Guests leave feeling renewed, smooth and refreshed.",
},
      {
  name: "Elaris Cleopatra",
  price: 75000,

  description:
    "A luxurious milk and botanical body ritual inspired by ancient beauty traditions to nourish, soften and illuminate the skin.",

  duration: "75 minutes",

  benefits: [
    "Deeply nourishes and hydrates the skin",
    "Helps leave the skin feeling soft and smooth",
    "Enhances the skin's natural radiance",
    "Creates a luxurious and relaxing body experience",
    "Helps promote a sense of calm and wellbeing",
    "Leaves the body feeling refreshed and renewed",
  ],

  includes: [
    "Pre-treatment consultation",
    "Milk-based body treatment",
    "Botanical body care",
    "Relaxing spa environment",
    "Nourishing finishing treatment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Cleopatra is an indulgent body ritual inspired by ancient beauty traditions. The experience combines luxurious milk-based care with botanical treatments to nourish and soften the skin while creating a deeply relaxing and restorative spa experience.",
},
      {
  name: "Mud Detox Therapy",
  price: 55000,

  description:
    "A mineral-rich mud treatment designed to deeply cleanse, refresh and rejuvenate the body while leaving the skin feeling renewed.",

  duration: "60 minutes",

  benefits: [
    "Helps cleanse and refresh the skin",
    "Helps remove surface impurities",
    "Leaves the skin feeling smoother and revitalized",
    "Provides a deeply relaxing body experience",
    "Helps promote a refreshed feeling throughout the body",
    "Supports a renewed and nourished skin appearance",
  ],

  includes: [
    "Pre-treatment consultation",
    "Mineral-rich mud application",
    "Full-body mud treatment",
    "Relaxation period",
    "Nourishing finishing care",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Mud Detox Therapy is a restorative body ritual using mineral-rich mud as the centre of the experience. The treatment is designed to cleanse and refresh the skin while providing a peaceful and indulgent spa experience that leaves the body feeling renewed.",
},
      {
  name: "Velvet Skin Experience",
  price: 100000,

  description:
    "An indulgent full-body ritual combining exfoliation and hydration for exceptionally soft, smooth and radiant-looking skin.",

  duration: "90 minutes",

  benefits: [
    "Deeply exfoliates the skin",
    "Helps improve the feel and texture of the skin",
    "Provides intensive hydration",
    "Leaves the skin feeling exceptionally soft and smooth",
    "Enhances the appearance of natural radiance",
    "Creates a deeply relaxing full-body experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Full-body exfoliation",
    "Hydrating body treatment",
    "Nourishing finishing care",
    "Relaxing spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "The Elaris Velvet Skin Experience is an indulgent full-body ritual created for guests seeking exceptionally soft, smooth and hydrated skin. The treatment combines thorough exfoliation with nourishing hydration to create a luxurious experience that leaves the body feeling refreshed, silky and renewed.",
},
     {
  name: "The Goddess Ritual",
  price: 100000,

  description:
    "A signature head-to-toe wellness experience designed to restore balance, encourage deep relaxation and leave you feeling completely renewed.",

  duration: "90 minutes",

  benefits: [
    "Provides a complete head-to-toe wellness experience",
    "Promotes deep relaxation",
    "Helps release everyday body tension",
    "Leaves the body feeling refreshed and renewed",
    "Encourages a sense of balance and wellbeing",
    "Creates a luxurious and restorative spa experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Head-to-toe body treatment",
    "Relaxation-focused wellness techniques",
    "Nourishing body care",
    "Calm and private spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "The Elaris Goddess Ritual is a signature head-to-toe experience created to provide complete relaxation and restoration. The treatment brings together thoughtful wellness techniques and nourishing body care in a luxurious ritual designed to leave you feeling balanced, refreshed and renewed.",
},
      {
  name: "Golden Glow Ritual",
  price: 85000,

  description:
    "A brightening body ritual that exfoliates, nourishes and enhances the skin's natural radiance.",

  duration: "75 minutes",

  benefits: [
    "Gently exfoliates the skin",
    "Helps improve the appearance of dull-looking skin",
    "Nourishes and softens the skin",
    "Enhances the appearance of natural radiance",
    "Leaves the body feeling refreshed and renewed",
    "Provides a relaxing full-body wellness experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Full-body exfoliation",
    "Nourishing body treatment",
    "Brightening care",
    "Relaxing spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "The Elaris Golden Glow Ritual is a luxurious brightening body experience designed to refresh and nourish the skin. The ritual combines exfoliation and nourishing care to help reveal a smoother, softer and more radiant-looking complexion while providing a peaceful and restorative spa experience.",
},
      {
  name: "Exfoliation Therapy",
  price: 50000,

  description:
    "A full-body exfoliation treatment designed to smooth the skin's texture and prepare the body for deep hydration.",

  duration: "60 minutes",

  benefits: [
    "Removes dead surface skin cells",
    "Helps smooth the feel of the skin",
    "Improves the appearance of uneven skin texture",
    "Prepares the skin for better hydration",
    "Leaves the skin feeling refreshed and renewed",
    "Provides a relaxing full-body experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Full-body exfoliation",
    "Skin-smoothing treatment",
    "Hydrating finishing care",
    "Relaxing spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Exfoliation Therapy is a focused full-body treatment designed to refresh and smooth the skin. Through thorough exfoliation and nourishing finishing care, the treatment helps prepare the skin for hydration while creating a relaxing and restorative spa experience.",
},
     {
  name: "Zen Body Ritual",
  price: 75000,

  description:
    "A calming body treatment combining relaxation techniques designed to ease tension and restore a sense of balance.",

  duration: "75 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps ease everyday body tension",
    "Encourages a sense of calm and wellbeing",
    "Leaves the body feeling refreshed and restored",
    "Creates a peaceful full-body wellness experience",
    "Helps reduce feelings of physical and mental fatigue",
  ],

  includes: [
    "Pre-treatment consultation",
    "Relaxation-focused body treatment",
    "Calming body care",
    "Peaceful spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "The Elaris Zen Body Ritual is a calming wellness experience created for guests seeking relaxation and restoration. The treatment combines soothing body techniques in a peaceful environment to help ease tension and leave the body and mind feeling refreshed.",
},
      {
  name: "Arabic Scrub",
  price: 45000,

  description:
    "A traditional exfoliating body treatment designed to deeply cleanse, smooth and refresh the skin.",

  duration: "60 minutes",

  benefits: [
    "Helps remove dead skin cells",
    "Deeply cleanses the skin",
    "Helps smooth the feel of the skin",
    "Refreshes and revitalizes the body",
    "Leaves the skin feeling softer and smoother",
    "Provides a relaxing body-care experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Full-body Arabic-inspired scrub",
    "Exfoliation treatment",
    "Nourishing finishing care",
    "Relaxing spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Arabic Scrub is a traditional-inspired exfoliating treatment designed to cleanse and smooth the body. The ritual focuses on thorough exfoliation and refreshing body care, leaving the skin feeling soft, renewed and revitalized.",
},
      {
  name: "Milk Soak",
  price: 155000,

  description:
    "A luxurious milk bath designed to deeply hydrate, soften and nourish the skin while creating a deeply relaxing body experience.",

  duration: "60 minutes",

  benefits: [
    "Deeply hydrates the skin",
    "Helps soften and smooth the skin",
    "Provides nourishing body care",
    "Leaves the skin feeling refreshed and renewed",
    "Promotes deep relaxation",
    "Creates a luxurious and indulgent spa experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Luxury milk soak",
    "Relaxation period",
    "Nourishing body care",
    "Calm and private spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Milk Soak is a luxurious bathing experience designed to deeply nourish and hydrate the skin. The treatment combines a soothing milk bath with relaxing body care to create an indulgent ritual that leaves the skin feeling soft, smooth and refreshed.",
},
      {
  name: "Elaris Herbal Soak",
  price: 70000,

  description:
    "A soothing botanical soak designed to relax the body, refresh the senses and create a deeply calming wellness experience.",

  duration: "60 minutes",

  benefits: [
    "Promotes deep relaxation",
    "Helps ease everyday body tension",
    "Refreshes the senses",
    "Provides soothing botanical body care",
    "Leaves the body feeling refreshed and renewed",
    "Creates a peaceful and calming spa experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Botanical herbal soak",
    "Relaxation period",
    "Soothing body care",
    "Calm and private spa environment",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Herbal Soak is a soothing botanical wellness ritual designed to help the body relax while refreshing the senses. The experience combines a calming herbal soak with a peaceful spa environment to create a restorative treatment that leaves you feeling refreshed and renewed.",
},
      {
  name: "Elaris Renewal Ritual",
  price: 150000,

  description:
    "A complete signature ritual combining multiple therapies for a deeply restorative and luxurious spa experience.",

  duration: "120 minutes",

  benefits: [
    "Provides a complete restorative wellness experience",
    "Promotes deep relaxation",
    "Helps ease everyday body tension",
    "Combines multiple body-care therapies",
    "Leaves the body feeling refreshed and renewed",
    "Creates a luxurious signature Elaris experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Combination of selected body therapies",
    "Full-body restorative treatment",
    "Nourishing body care",
    "Relaxation period",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Renewal Ritual is a signature full-body wellness experience combining multiple therapies into one luxurious treatment. Designed for guests seeking complete relaxation and restoration, the ritual creates a peaceful journey from preparation through treatment and post-treatment relaxation.",
},
      {
  name: "Sauna",
  price: 25000,

  description:
    "A 20-minute dry heat therapy experience designed to promote relaxation and leave the body feeling refreshed.",

  duration: "20 minutes",

  benefits: [
    "Promotes relaxation",
    "Provides a soothing dry heat experience",
    "Helps the body unwind",
    "Leaves you feeling refreshed",
    "Creates a calming wellness experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "20-minute sauna session",
    "Private sauna experience",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Sauna is a focused 20-minute dry heat therapy experience designed for guests seeking relaxation and a calming wellness session. The warm environment provides a peaceful opportunity to unwind before continuing with the rest of your day.",
},
     {
  name: "Steam",
  price: 20000,

  description:
    "An 18-minute moist heat therapy experience designed to promote relaxation and create a soothing wellness experience.",

  duration: "18 minutes",

  benefits: [
    "Promotes relaxation",
    "Provides a soothing moist heat experience",
    "Helps the body unwind",
    "Leaves you feeling refreshed",
    "Creates a calming spa experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "18-minute steam session",
    "Private steam experience",
    "Post-treatment relaxation",
  ],

  details:
    "Elaris Steam is a focused 18-minute moist heat therapy experience designed to help guests relax and unwind. The warm, humid environment creates a soothing wellness experience and provides a peaceful addition to your Elaris body-care journey.",
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
      {
  name: "Underarm Wax",
  price: 25000,

  description:
    "A professional underarm waxing treatment designed to remove unwanted hair and leave the skin feeling smooth and clean.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted underarm hair",
    "Leaves the skin feeling smooth",
    "Provides longer-lasting results than shaving",
    "Creates a clean and well-groomed appearance",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional underarm waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Underarm Wax is a professional hair-removal treatment performed with care in a comfortable and hygienic environment. The treatment removes unwanted hair while providing soothing post-wax care for a smooth, clean finish.",
},
      {
  name: "Half Arms Wax",
  price: 25000,

  description:
    "A professional half-arm waxing treatment designed to remove unwanted hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "25 minutes",

  benefits: [
    "Removes unwanted hair from the selected half of the arms",
    "Leaves the skin feeling smooth and soft",
    "Provides longer-lasting results than shaving",
    "Creates a clean and well-groomed appearance",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional half-arm waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Half Arms Wax is a professional hair-removal treatment focused on either the upper or lower arms. The treatment is performed in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth finish.",
}, 
     {
  name: "Full Arms Wax",
  price: 30000,

  description:
    "A professional full-arm waxing treatment designed to remove unwanted hair and leave the arms feeling smooth, clean and refreshed.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted hair from the full arms",
    "Leaves the skin feeling smooth and soft",
    "Provides longer-lasting results than shaving",
    "Creates a clean and well-groomed appearance",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional full-arm waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Full Arms Wax is a professional hair-removal treatment covering the entire arms. The treatment is performed in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth and refreshed finish.",
},
      {
  name: "Half Legs Wax",
  price: 25000,

  description:
    "A professional half-leg waxing treatment designed to remove unwanted hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted hair from the lower or upper legs",
    "Leaves the skin feeling smooth and soft",
    "Provides longer-lasting results than shaving",
    "Creates a clean and well-groomed appearance",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional half-leg waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Half Legs Wax is a professional hair-removal treatment focused on either the upper or lower legs. The treatment is performed in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth finish.",
},
      {
  name: "Full Legs Wax",
  price: 35000,

  description:
    "A professional full-leg waxing treatment designed to remove unwanted hair and leave the legs feeling smooth, clean and refreshed.",

  duration: "45 minutes",

  benefits: [
    "Removes unwanted hair from the full legs",
    "Leaves the skin feeling smooth and soft",
    "Provides longer-lasting results than shaving",
    "Creates a clean and well-groomed appearance",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional full-leg waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Full Legs Wax is a professional full-leg hair-removal treatment performed in a comfortable and hygienic environment. The treatment focuses on effective hair removal while providing soothing post-wax care for a smooth and refreshed finish.",
},
      {
  name: "Under Chin Wax",
  price: 10000,

  description:
    "A professional under-chin waxing treatment designed to remove unwanted hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "15 minutes",

  benefits: [
    "Removes unwanted hair beneath the chin",
    "Leaves the skin feeling smooth and soft",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional under-chin waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Under Chin Wax is a focused facial waxing treatment designed to remove unwanted hair beneath the chin. The treatment is performed with care in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth finish.",
},
      {
  name: "Full Face Wax",
  price: 30000,

  description:
    "A professional full-face waxing treatment designed to remove unwanted facial hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted facial hair",
    "Leaves the skin feeling smooth and soft",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional full-face waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Full Face Wax is a professional facial hair-removal treatment performed with care in a comfortable and hygienic environment. The treatment focuses on effective hair removal while providing soothing post-wax care for a smooth and refreshed finish.",
},
      {
  name: "Brazilian Wax",
  price: 45000,

  description:
    "A professional waxing treatment designed to provide smooth, clean and well-groomed skin in the intimate area.",

  duration: "45 minutes",

  benefits: [
    "Provides smooth-looking skin",
    "Removes unwanted hair from the intimate area",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional Brazilian waxing",
    "Post-wax soothing care",
    "Private treatment environment",
    "Aftercare guidance",
  ],

  details:
    "Elaris Brazilian Wax is a professional intimate waxing experience performed in a private and comfortable environment. The treatment focuses on effective hair removal while maintaining a careful and professional approach throughout the experience.",
},
      {
  name: "Manxillian Wax",
  price: 58000,

  description:
    "A professional intimate waxing treatment designed for effective hair removal with a smooth, clean and well-groomed finish.",

  duration: "45 minutes",

  benefits: [
    "Removes unwanted hair from the intimate area",
    "Leaves the skin feeling smooth and clean",
    "Creates a well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional Manxillian waxing",
    "Post-wax soothing care",
    "Private treatment environment",
    "Aftercare guidance",
  ],

  details:
    "Elaris Manxillian Wax is a professional intimate waxing experience performed in a private and comfortable environment. The treatment focuses on effective hair removal while maintaining a careful and professional approach throughout the experience.",
},
      {
  name: "Stomach Wax",
  price: 30000,

  description:
    "A professional stomach waxing treatment designed to remove unwanted hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted hair from the stomach area",
    "Leaves the skin feeling smooth and soft",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional stomach waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Stomach Wax is a professional body waxing treatment focused on effective hair removal from the stomach area. The treatment is performed in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth finish.",
},
      {
  name: "Chest Wax",
  price: 35000,

  description:
    "A professional chest waxing treatment designed to remove unwanted hair and leave the skin feeling smooth, clean and refreshed.",

  duration: "30 minutes",

  benefits: [
    "Removes unwanted chest hair",
    "Leaves the skin feeling smooth and soft",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional chest waxing",
    "Post-wax soothing care",
    "Aftercare guidance",
  ],

  details:
    "Elaris Chest Wax is a professional body waxing treatment designed to effectively remove unwanted hair from the chest area. The treatment is performed in a comfortable and hygienic environment, followed by soothing post-wax care for a smooth and refreshed finish.",
},
      {
  name: "Full Body Wax",
  price: 70000,

  description:
    "A comprehensive professional waxing treatment designed to remove unwanted hair across the body while leaving the skin feeling smooth, clean and refreshed.",

  duration: "120 minutes",

  benefits: [
    "Provides comprehensive full-body hair removal",
    "Leaves the skin feeling smooth and soft",
    "Creates a clean and well-groomed appearance",
    "Provides longer-lasting results than shaving",
    "Professional and hygienic treatment experience",
  ],

  includes: [
    "Pre-treatment consultation",
    "Professional full-body waxing",
    "Post-wax soothing care",
    "Private treatment environment",
    "Aftercare guidance",
  ],

  details:
    "Elaris Full Body Wax is a comprehensive hair-removal experience covering the body areas included in the treatment. The service is performed professionally in a comfortable and hygienic environment, followed by soothing post-wax care to leave the skin feeling smooth and refreshed.",
}, 
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