export type Lang = "ar" | "en";

export const LANGS: Lang[] = ["ar", "en"];

export type ServiceId =
  | "botox"
  | "filler"
  | "mesotherapy"
  | "skincare"
  | "peeling"
  | "acne";

export interface ServiceContent {
  id: ServiceId;
  /** lucide-react icon name */
  icon: string;
  title: string;
  short: string;
  description: string;
  benefits: string[];
}

export interface FaqItem {
  q: string;
  a: string;
}

interface Dictionary {
  dir: "rtl" | "ltr";
  langLabel: string;
  switchTo: string;

  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    book: string;
  };

  common: {
    whatsapp: string;
    call: string;
    email: string;
    instagram: string;
    learnMore: string;
    details: string;
    inquire: string;
    bookNow: string;
    location: string;
    hours: string;
  };

  home: {
    heroTitle: string;
    heroSubtitle: string;
    ctaBook: string;
    ctaServices: string;
    trust: { icon: string; label: string }[];
    servicesHeading: string;
    servicesSub: string;
    whyHeading: string;
    why: { icon: string; title: string; body: string }[];
    stats: { value: number; suffix: string; label: string }[];
    marquee: string[];
    finalCtaTitle: string;
    finalCtaBody: string;
  };

  services: {
    title: string;
    intro: string;
    benefitsLabel: string;
    faqHeading: string;
  };

  about: {
    title: string;
    storyHeading: string;
    story: string[];
    teamHeading: string;
    team: { name: string; role: string; experience: string }[];
    valuesHeading: string;
    values: { icon: string; title: string; body: string }[];
    galleryHeading: string;
  };

  contact: {
    title: string;
    intro: string;
    hoursHeading: string;
    hoursRows: { day: string; time: string }[];
    formHeading: string;
    formName: string;
    formPhone: string;
    formMessage: string;
    formSubmit: string;
    mapTitle: string;
  };

  footer: {
    tagline: string;
    quickLinks: string;
    contactHeading: string;
    rights: string;
  };

  serviceList: ServiceContent[];
  faq: FaqItem[];

  whatsappDefault: string;
  whatsappService: (service: string) => string;
}

const ar: Dictionary = {
  dir: "rtl",
  langLabel: "العربية",
  switchTo: "EN",

  nav: {
    home: "الرئيسية",
    services: "الخدمات",
    about: "من نحن",
    contact: "تواصل",
    book: "احجزي عبر واتساب",
  },

  common: {
    whatsapp: "واتساب",
    call: "اتصال",
    email: "البريد الإلكتروني",
    instagram: "إنستغرام",
    learnMore: "اعرفي المزيد",
    details: "التفاصيل",
    inquire: "استفسري عن هذه الخدمة",
    bookNow: "احجزي موعدك",
    location: "الموقع",
    hours: "ساعات العمل",
  },

  home: {
    heroTitle: "جمالكِ يبدأ من بشرتكِ",
    heroSubtitle:
      "عناية متخصصة بالبشرة وتجميل غير جراحي على يد الدكتورة زهراء محمد في كركوك، العراق.",
    ctaBook: "احجزي موعدك",
    ctaServices: "تعرّفي على خدماتنا",
    trust: [
      { icon: "BadgeCheck", label: "أطباء معتمدون" },
      { icon: "Sparkles", label: "تقنيات حديثة" },
      { icon: "ShieldCheck", label: "خصوصية تامة" },
      { icon: "Heart", label: "نتائج طبيعية" },
    ],
    servicesHeading: "خدماتنا",
    servicesSub:
      "باقة متكاملة من العلاجات التجميلية والعناية بالبشرة، مصمّمة لتبرز جمالكِ الطبيعي.",
    whyHeading: "لماذا Selina Derma؟",
    why: [
      {
        icon: "Award",
        title: "خبرة موثوقة",
        body: "فريق طبي بخبرة سنوات في التجميل غير الجراحي والعناية بالبشرة.",
      },
      {
        icon: "Microscope",
        title: "تقنيات حديثة",
        body: "أحدث الأجهزة والمستحضرات المعتمدة لنتائج آمنة وفعّالة.",
      },
      {
        icon: "HandHeart",
        title: "تجربة مريحة",
        body: "استشارة شخصية وخطة علاج مخصّصة في أجواء هادئة وراقية.",
      },
    ],
    stats: [
      { value: 12, suffix: "+", label: "سنوات خبرة" },
      { value: 5000, suffix: "+", label: "عميلة سعيدة" },
      { value: 6, suffix: "", label: "خدمات متخصصة" },
      { value: 100, suffix: "%", label: "خصوصية وأمان" },
    ],
    marquee: [
      "بوتكس",
      "فيلر",
      "ميزوثيرابي",
      "عناية بالبشرة",
      "تقشير",
      "علاج حب الشباب",
      "نضارة",
      "جمال طبيعي",
    ],
    finalCtaTitle: "جاهزة لتبدئي رحلة العناية ببشرتكِ؟",
    finalCtaBody:
      "تواصلي معنا اليوم لحجز استشارتكِ المجانية، وسنساعدكِ على اختيار العلاج الأنسب لكِ.",
  },

  services: {
    title: "خدماتنا",
    intro:
      "نقدّم مجموعة شاملة من العلاجات التجميلية والعناية بالبشرة، كل واحدة منها تُنفّذ على يد مختصين بأعلى معايير الأمان.",
    benefitsLabel: "أبرز الفوائد",
    faqHeading: "أسئلة شائعة",
  },

  about: {
    title: "من نحن",
    storyHeading: "قصتنا",
    story: [
      "وُلدت Selina Derma من إيمان بسيط: أن العناية بالبشرة فنّ وعلم في آنٍ واحد. أسّستها الدكتورة زهراء محمد في كركوك لتقدّم تجربة تجميلية تجمع بين الاحتراف الطبي والذوق الراقي.",
      "نؤمن بالنتائج الطبيعية التي تعزّز ملامحكِ دون أن تغيّرها، ونضع راحتكِ وثقتكِ في مقدمة أولوياتنا في كل زيارة.",
    ],
    teamHeading: "الطبيبة المؤسِّسة",
    team: [
      {
        name: "الدكتورة زهراء محمد",
        role: "اختصاص الأمراض الجلدية والتجميل والليزر",
        experience: "عضو الجمعية العراقية لأطباء الجلدية",
      },
    ],
    valuesHeading: "قيمنا",
    values: [
      {
        icon: "ShieldCheck",
        title: "السلامة أولاً",
        body: "بروتوكولات تعقيم صارمة ومنتجات معتمدة في كل إجراء.",
      },
      {
        icon: "Leaf",
        title: "نتائج طبيعية",
        body: "نُبرز جمالكِ الطبيعي بلمسات دقيقة ومدروسة.",
      },
      {
        icon: "Lock",
        title: "خصوصية تامة",
        body: "نحترم خصوصيتكِ ونتعامل مع بياناتكِ بسرّية كاملة.",
      },
    ],
    galleryHeading: "من داخل العيادة",
  },

  contact: {
    title: "تواصلي معنا",
    intro:
      "نسعد بالإجابة على استفساراتكِ ومساعدتكِ في حجز موعدكِ. تواصلي معنا عبر واتساب أو الاتصال المباشر.",
    hoursHeading: "ساعات العمل",
    hoursRows: [
      { day: "السبت – الأربعاء", time: "10:00 ص – 8:00 م" },
      { day: "الخميس", time: "10:00 ص – 6:00 م" },
      { day: "الجمعة", time: "مغلق" },
    ],
    formHeading: "أرسلي لنا رسالة",
    formName: "الاسم",
    formPhone: "رقم الهاتف",
    formMessage: "رسالتك",
    formSubmit: "إرسال عبر واتساب",
    mapTitle: "موقع عيادة Selina Derma في كركوك",
  },

  footer: {
    tagline: "عناية راقية ببشرتكِ في كركوك، العراق.",
    quickLinks: "روابط سريعة",
    contactHeading: "تواصلي معنا",
    rights: "جميع الحقوق محفوظة.",
  },

  serviceList: [
    {
      id: "botox",
      icon: "Syringe",
      title: "البوتكس",
      short: "تنعيم التجاعيد وخطوط التعبير لإطلالة منتعشة وطبيعية.",
      description:
        "حقن البوتكس علاج سريع وفعّال لتنعيم خطوط الجبهة وحول العينين، يمنحكِ مظهراً أكثر شباباً ونضارة دون أي تدخل جراحي. يُجرى على يد طبيب مختص بجرعات مدروسة تحافظ على تعابير وجهكِ الطبيعية.",
      benefits: [
        "نتائج تظهر خلال أيام",
        "إجراء سريع دون فترة نقاهة",
        "مظهر طبيعي ومنتعش",
      ],
    },
    {
      id: "filler",
      icon: "Droplet",
      title: "الفيلر",
      short: "إعادة الحجم والامتلاء لملامح متناسقة ونضرة.",
      description:
        "حقن الفيلر بحمض الهيالورونيك تعيد الحجم المفقود وتنحت الملامح، سواء للشفاه أو الخدود أو تحديد الفك. نصمّم لكِ خطة مخصّصة لنتائج متناسقة تبرز جمالكِ الطبيعي.",
      benefits: [
        "تحديد ونحت الملامح",
        "ترطيب وامتلاء فوري",
        "نتائج تدوم لأشهر",
      ],
    },
    {
      id: "mesotherapy",
      icon: "Sparkles",
      title: "الميزوثيرابي",
      short: "تغذية البشرة بالفيتامينات لنضارة وإشراق من الداخل.",
      description:
        "الميزوثيرابي تقنية تُغذّي البشرة بمزيج من الفيتامينات والمعادن وحمض الهيالورونيك عبر حقن سطحية دقيقة، لتحفيز النضارة ومحاربة علامات التعب والجفاف وتحسين ملمس البشرة.",
      benefits: [
        "ترطيب عميق ونضارة",
        "تحسين ملمس ولون البشرة",
        "تحفيز الكولاجين الطبيعي",
      ],
    },
    {
      id: "skincare",
      icon: "Flower2",
      title: "تنظيف وعناية بالبشرة",
      short: "جلسات تنظيف عميق وعناية مخصّصة لكل نوع بشرة.",
      description:
        "جلسات عناية متكاملة تشمل التنظيف العميق وإزالة الشوائب وترطيب البشرة، مصمّمة خصيصاً حسب نوع بشرتكِ واحتياجاتها لتمنحكِ نضارة فورية وملمساً ناعماً.",
      benefits: [
        "تنظيف عميق للمسام",
        "ترطيب وتغذية",
        "نضارة فورية",
      ],
    },
    {
      id: "peeling",
      icon: "Layers",
      title: "التقشير الكيميائي",
      short: "تجديد خلايا البشرة لتوحيد اللون وإشراقة متجددة.",
      description:
        "التقشير الكيميائي يزيل الطبقة السطحية من خلايا الجلد الميتة لتحفيز تجدّد البشرة، ما يساعد على توحيد لون البشرة وتقليل التصبغات والخطوط الدقيقة ومنحكِ إشراقة صحية.",
      benefits: [
        "توحيد لون البشرة",
        "تقليل التصبغات والبقع",
        "إشراقة متجددة",
      ],
    },
    {
      id: "acne",
      icon: "ShieldCheck",
      title: "علاج حب الشباب",
      short: "خطط علاجية مدروسة للسيطرة على حب الشباب وآثاره.",
      description:
        "نقدّم خططاً علاجية متكاملة للسيطرة على حب الشباب النشط والتقليل من آثاره وندباته، تجمع بين العلاجات الموضعية والجلسات المتخصصة بإشراف طبي دقيق.",
      benefits: [
        "السيطرة على حب الشباب النشط",
        "تقليل الآثار والندبات",
        "خطة مخصّصة لبشرتكِ",
      ],
    },
  ],

  faq: [
    {
      q: "هل جلسات البوتكس والفيلر مؤلمة؟",
      a: "الإحساس بسيط جداً، ونستخدم كريماً مخدّراً موضعياً عند الحاجة لضمان أكبر قدر من الراحة أثناء الجلسة.",
    },
    {
      q: "كم تدوم نتائج العلاجات؟",
      a: "يختلف ذلك حسب نوع العلاج؛ البوتكس يدوم عادة من 3 إلى 6 أشهر، والفيلر من 6 إلى 12 شهراً. سنوضّح لكِ التفاصيل في الاستشارة.",
    },
    {
      q: "هل أحتاج إلى فترة نقاهة بعد الجلسة؟",
      a: "معظم إجراءاتنا لا تتطلب فترة نقاهة، ويمكنكِ العودة لنشاطكِ اليومي مباشرة مع اتباع بعض التعليمات البسيطة.",
    },
    {
      q: "كيف أحجز موعداً؟",
      a: "ببساطة اضغطي على زر واتساب وراسلينا، وسيقوم فريقنا بترتيب الموعد المناسب لكِ.",
    },
  ],

  whatsappDefault: "مرحباً، أريد الاستفسار عن خدماتكم في عيادة Selina Derma",
  whatsappService: (service) =>
    `مرحباً، أريد الاستفسار عن خدمة "${service}" في عيادة Selina Derma`,
};

const en: Dictionary = {
  dir: "ltr",
  langLabel: "English",
  switchTo: "ع",

  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    book: "Book on WhatsApp",
  },

  common: {
    whatsapp: "WhatsApp",
    call: "Call",
    email: "Email",
    instagram: "Instagram",
    learnMore: "Learn more",
    details: "Details",
    inquire: "Ask about this service",
    bookNow: "Book your appointment",
    location: "Location",
    hours: "Working hours",
  },

  home: {
    heroTitle: "Your Skin, Your Confidence",
    heroSubtitle:
      "Specialized skincare and non-surgical aesthetics by Dr. Zahra Mohammed in Kirkuk, Iraq.",
    ctaBook: "Book your appointment",
    ctaServices: "Explore our services",
    trust: [
      { icon: "BadgeCheck", label: "Certified doctors" },
      { icon: "Sparkles", label: "Modern technology" },
      { icon: "ShieldCheck", label: "Complete privacy" },
      { icon: "Heart", label: "Natural results" },
    ],
    servicesHeading: "Our Services",
    servicesSub:
      "A complete suite of aesthetic and skincare treatments, designed to reveal your natural beauty.",
    whyHeading: "Why Selina Derma?",
    why: [
      {
        icon: "Award",
        title: "Trusted expertise",
        body: "A medical team with years of experience in non-surgical aesthetics and skincare.",
      },
      {
        icon: "Microscope",
        title: "Modern technology",
        body: "The latest approved devices and products for safe, effective results.",
      },
      {
        icon: "HandHeart",
        title: "A comfortable experience",
        body: "Personal consultation and a tailored treatment plan in a calm, refined setting.",
      },
    ],
    stats: [
      { value: 12, suffix: "+", label: "Years of experience" },
      { value: 5000, suffix: "+", label: "Happy clients" },
      { value: 6, suffix: "", label: "Specialized services" },
      { value: 100, suffix: "%", label: "Privacy & safety" },
    ],
    marquee: [
      "Botox",
      "Fillers",
      "Mesotherapy",
      "Skincare",
      "Peels",
      "Acne Care",
      "Radiance",
      "Natural Beauty",
    ],
    finalCtaTitle: "Ready to begin your skincare journey?",
    finalCtaBody:
      "Get in touch today to book your free consultation, and we'll help you choose the treatment that's right for you.",
  },

  services: {
    title: "Our Services",
    intro:
      "We offer a comprehensive range of aesthetic and skincare treatments, each performed by specialists to the highest standards of safety.",
    benefitsLabel: "Key benefits",
    faqHeading: "Frequently asked questions",
  },

  about: {
    title: "About Us",
    storyHeading: "Our Story",
    story: [
      "Selina Derma was born from a simple belief: that skincare is both an art and a science. Dr. Zahra Mohammed founded the clinic in Kirkuk to offer an aesthetic experience that blends medical professionalism with refined taste.",
      "We believe in natural results that enhance your features without changing them, and we put your comfort and confidence first at every visit.",
    ],
    teamHeading: "Founding Physician",
    team: [
      {
        name: "Dr. Zahra Mohammed",
        role: "Dermatology, Aesthetics & Laser Specialist",
        experience: "Member, Iraqi Society of Dermatologists",
      },
    ],
    valuesHeading: "Our Values",
    values: [
      {
        icon: "ShieldCheck",
        title: "Safety first",
        body: "Strict sterilization protocols and approved products in every procedure.",
      },
      {
        icon: "Leaf",
        title: "Natural results",
        body: "We enhance your natural beauty with precise, considered touches.",
      },
      {
        icon: "Lock",
        title: "Complete privacy",
        body: "We respect your privacy and handle your data with full confidentiality.",
      },
    ],
    galleryHeading: "Inside the clinic",
  },

  contact: {
    title: "Get in Touch",
    intro:
      "We're happy to answer your questions and help you book your appointment. Reach us on WhatsApp or by phone.",
    hoursHeading: "Working hours",
    hoursRows: [
      { day: "Sat – Wed", time: "10:00 AM – 8:00 PM" },
      { day: "Thursday", time: "10:00 AM – 6:00 PM" },
      { day: "Friday", time: "Closed" },
    ],
    formHeading: "Send us a message",
    formName: "Name",
    formPhone: "Phone number",
    formMessage: "Your message",
    formSubmit: "Send via WhatsApp",
    mapTitle: "Selina Derma clinic location in Kirkuk",
  },

  footer: {
    tagline: "Refined skincare in Kirkuk, Iraq.",
    quickLinks: "Quick links",
    contactHeading: "Get in touch",
    rights: "All rights reserved.",
  },

  serviceList: [
    {
      id: "botox",
      icon: "Syringe",
      title: "Botox",
      short: "Smooth wrinkles and expression lines for a fresh, natural look.",
      description:
        "Botox is a quick, effective treatment that softens forehead lines and crow's feet, giving you a more youthful, refreshed appearance with no surgery. It's performed by a specialist using measured doses that preserve your natural expressions.",
      benefits: [
        "Results within days",
        "Quick, no downtime",
        "Natural, refreshed look",
      ],
    },
    {
      id: "filler",
      icon: "Droplet",
      title: "Dermal Fillers",
      short: "Restore volume and definition for balanced, refreshed features.",
      description:
        "Hyaluronic-acid fillers restore lost volume and sculpt your features — whether lips, cheeks, or jawline definition. We design a tailored plan for harmonious results that enhance your natural beauty.",
      benefits: [
        "Define and sculpt features",
        "Instant hydration and volume",
        "Results that last for months",
      ],
    },
    {
      id: "mesotherapy",
      icon: "Sparkles",
      title: "Mesotherapy",
      short: "Nourish the skin with vitamins for radiance from within.",
      description:
        "Mesotherapy delivers a blend of vitamins, minerals, and hyaluronic acid through fine micro-injections to boost radiance, fight signs of fatigue and dryness, and improve skin texture.",
      benefits: [
        "Deep hydration and glow",
        "Improved texture and tone",
        "Stimulates natural collagen",
      ],
    },
    {
      id: "skincare",
      icon: "Flower2",
      title: "Facials & Skincare",
      short: "Deep-cleansing sessions tailored to every skin type.",
      description:
        "Comprehensive care sessions including deep cleansing, impurity removal, and hydration — designed specifically for your skin type and needs to deliver instant radiance and a soft, smooth feel.",
      benefits: [
        "Deep pore cleansing",
        "Hydration and nourishment",
        "Instant radiance",
      ],
    },
    {
      id: "peeling",
      icon: "Layers",
      title: "Chemical Peels",
      short: "Renew skin cells for even tone and renewed glow.",
      description:
        "A chemical peel removes the surface layer of dead skin cells to stimulate renewal, helping even out skin tone, reduce pigmentation and fine lines, and give you a healthy glow.",
      benefits: [
        "Even skin tone",
        "Reduce pigmentation and spots",
        "Renewed radiance",
      ],
    },
    {
      id: "acne",
      icon: "ShieldCheck",
      title: "Acne Treatment",
      short: "Considered treatment plans to control acne and its marks.",
      description:
        "We offer complete treatment plans to control active acne and reduce its marks and scarring, combining topical treatments and specialized sessions under careful medical supervision.",
      benefits: [
        "Control active acne",
        "Reduce marks and scarring",
        "A plan tailored to your skin",
      ],
    },
  ],

  faq: [
    {
      q: "Are Botox and filler sessions painful?",
      a: "Discomfort is minimal, and we use a topical numbing cream when needed to keep you as comfortable as possible during the session.",
    },
    {
      q: "How long do results last?",
      a: "It depends on the treatment; Botox typically lasts 3–6 months and fillers 6–12 months. We'll go over the details in your consultation.",
    },
    {
      q: "Do I need downtime after a session?",
      a: "Most of our procedures require no downtime — you can return to your daily routine right away by following a few simple aftercare tips.",
    },
    {
      q: "How do I book an appointment?",
      a: "Simply tap the WhatsApp button and message us, and our team will arrange a time that suits you.",
    },
  ],

  whatsappDefault:
    "Hello, I'd like to ask about your services at Selina Derma clinic",
  whatsappService: (service) =>
    `Hello, I'd like to ask about the "${service}" service at Selina Derma clinic`,
};

export const translations: Record<Lang, Dictionary> = { ar, en };

export function getDict(lang: Lang): Dictionary {
  return translations[lang];
}
