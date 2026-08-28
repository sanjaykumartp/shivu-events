export const WHATSAPP_NUMBER = "918217328664"; // TODO: update if number changes
export const PHONE_DISPLAY = "+91 82173 28664";

// Daily opening hours used by the live Open/Closed status indicator.
export const BUSINESS_HOURS = { openHour: 8, closeHour: 21 }; // 8 AM - 9 PM, every day

// TODO: once the Google Business Profile / Maps listing exists, set this to
// its share link (e.g. "https://maps.app.goo.gl/xxxxx") to show a "See all
// reviews on Google" link on the Reviews page, and to later pull real
// reviews in via the Google Places API.
export const GOOGLE_MAPS_URL = "";

// TODO: set to the real Google rating (e.g. 4.8) once the listing exists —
// left null so we never show a fabricated number on the live site.
export const GOOGLE_RATING = null;

// TODO: set to the real Instagram profile URL once the business account exists.
export const INSTAGRAM_URL = "#";
export const INSTAGRAM_HANDLE = "@shivueventsmadhugiri";

// Placeholder stock clip (free, Pexels license) — swap for real footage
// of your own decoration/event work when available.
export const HERO_VIDEO = "https://videos.pexels.com/video-files/35222226/14921689_1920_1080_50fps.mp4";

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1587271636175-90d58cdad458?auto=format&fit=crop&w=1600&q=70",
  flowers: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=60",
  photography: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=900&q=60",
  sound: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=900&q=60",
  utensils: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=60",
  // Placeholder team portraits — swap for real staff photos when available.
  teamOwner: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=70",
  teamW1: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=70",
  teamW2: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=70",
  teamW3: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=70",
  teamW4: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=70",
};

export const dict = {
  en: {
    nav: ["Home", "Services", "About Us", "Contact", "Reviews"],
    heroTitle: "Every celebration,",
    heroTitle2: "beautifully arranged.",
    heroSub: "Flower Decoration · Photography · Sound Systems · Event Utensils — everything your function needs, from one trusted team in Madhugiri.",
    cta: "Enquire on WhatsApp",
    waMessage: "Hi, I saw your website. I want to know more.",
    openNow: "Open Now",
    closedNow: "Closed",
    hoursDisplay: "8 AM – 9 PM",
    whyChooseUs: "Why Choose Us",
    highlights: [
      { title: "On-Time Delivery", desc: "Set up well before your event starts." },
      { title: "Budget-Friendly Packages", desc: "Decoration options to suit every budget." },
      { title: "All Functions Covered", desc: "Weddings, engagements, house-warmings & more." },
      { title: "Trusted in Madhugiri", desc: "A local team your neighbours already know." },
    ],
    servicesEyebrow: "What we do",
    servicesTitle: "Our Services",
    viewGallery: "View Gallery",
    backToServices: "Back to Services",
    services: [
      {
        slug: "decoration",
        name: "Flower Decoration",
        desc: "Stage, mandap, entrance and hall decoration for weddings, engagements, house-warmings and all functions.",
        img: IMAGES.flowers,
        gallery: [
          { id: "SFD-N230", name: "Wedding Entrance Gate", price: "₹12,000 onwards", img: IMAGES.flowers },
          { id: "SFD-S207", name: "Heart Theme Stage Backdrop", price: "₹18,000 onwards", img: IMAGES.flowers },
          { id: "SFD-D239", name: "Traditional Mandap Decoration", price: "₹25,000 onwards", img: IMAGES.flowers },
          { id: "SFD-E221", name: "Reception Entrance Arch", price: "₹15,000 onwards", img: IMAGES.flowers },
        ],
      },
      {
        slug: "photography",
        name: "Photography",
        desc: "Candid and traditional photography & videography to capture every moment of your event.",
        img: IMAGES.photography,
        gallery: [
          { id: "SFD-P101", name: "Candid Photography Package", price: "₹15,000 onwards", img: IMAGES.photography },
          { id: "SFD-P102", name: "Traditional Videography", price: "₹12,000 onwards", img: IMAGES.photography },
          { id: "SFD-P103", name: "Pre-Wedding Shoot", price: "₹20,000 onwards", img: IMAGES.photography },
        ],
      },
      {
        slug: "sound",
        name: "Sound Systems",
        desc: "Professional sound systems and DJ setup for weddings, receptions and celebrations of any size.",
        img: IMAGES.sound,
        gallery: [
          { id: "SFD-A101", name: "Basic DJ & Sound Setup", price: "₹8,000 onwards", img: IMAGES.sound },
          { id: "SFD-A102", name: "Premium Sound & Lighting", price: "₹18,000 onwards", img: IMAGES.sound },
          { id: "SFD-A103", name: "Live Orchestra Setup", price: "₹25,000 onwards", img: IMAGES.sound },
        ],
      },
      {
        slug: "utensils",
        name: "Event Utensils Rental",
        desc: "Plates, glasses, vessels and catering essentials on rent for your function, delivered on time.",
        img: IMAGES.utensils,
        gallery: [
          { id: "SFD-U101", name: "Basic Steel Utensils Set", price: "₹3,000 onwards", img: IMAGES.utensils },
          { id: "SFD-U102", name: "Premium Buffet Service Set", price: "₹6,000 onwards", img: IMAGES.utensils },
          { id: "SFD-U103", name: "Full Catering Utensils Package", price: "₹10,000 onwards", img: IMAGES.utensils },
        ],
      },
    ],
    testimonialsEyebrow: "Testimonials",
    testimonialsTitle: "What Our Clients Say",
    testimonials: [
      { name: "Ramesh & Latha", role: "Wedding, Madhugiri", text: "Shivu Events made our wedding stage look like a dream. Every flower was perfect and exactly what we imagined!" },
      { name: "Manjunath", role: "Reception, Madhugiri", text: "Sound and lighting was excellent — our guests are still talking about how grand the reception felt." },
      { name: "Sunitha", role: "House-warming", text: "On-time delivery, polite staff, and beautiful decoration for our house-warming function. Highly recommend them." },
    ],
    aboutEyebrow: "About Us",
    aboutTitle: "A trusted name for events in Madhugiri",
    aboutBody: "Shivu Events Madhugiri has been arranging weddings and functions with care and attention to detail. From the first flower on the stage to the last plate served, we handle every part of your event so you can enjoy the celebration with your family.",
    ownerLabel: "Owner",
    teamEyebrow: "Meet the Team",
    teamTitle: "The People Behind Every Event",
    teamHint: "Scroll or tap a photo to meet each member",
    callOwner: "Call Owner",
    team: [
      { id: "owner", name: "Shivu", role: "Owner & Founder", isOwner: true, img: IMAGES.teamOwner },
      { id: "w1", name: "Ravi Kumar", role: "Decoration Lead", img: IMAGES.teamW1 },
      { id: "w2", name: "Suresh", role: "Sound Engineer", img: IMAGES.teamW2 },
      { id: "w3", name: "Manjunath", role: "Photographer", img: IMAGES.teamW3 },
      { id: "w4", name: "Lakshmi", role: "Catering Staff", img: IMAGES.teamW4 },
    ],
    contactEyebrow: "Get in touch",
    contactTitle: "Planning an event? Let's talk.",
    contactSub: "Tell us your date and what you need — we'll take it from there.",
    contactBtn: "Message on WhatsApp",
    callBtn: "Call Now",
    location: "Madhugiri, Karnataka",
    footer: "Shivu Events Madhugiri",
    rightsReserved: "All rights reserved.",
    langNames: { en: "English", kn: "ಕನ್ನಡ" },
    reviewsPageSub: "Real feedback from our clients across Madhugiri.",
    reviewsGoogleLink: "See all reviews on Google",
    googleEyebrow: "Google Reviews",
    googleTitleRated: "Rated {rating} by our families",
    googleTitleNoRating: "Loved by our families",
    googleSub: "Real feedback from real weddings and functions we've been part of in Madhugiri.",
    googleReadBtn: "Read Reviews on Google",
    googleWriteBtn: "Write a Review",
    outOfFive: "out of 5",
    enquire: "Enquire",
    footerTagline: "Weddings & Celebrations",
    footerDesc: "Flower decoration, photography, sound systems and event utensils — everything your celebration needs, from one trusted team in Madhugiri.",
    footerQuickLinks: "Quick Links",
    footerContact: "Contact",
    instagramEyebrow: "Follow Us",
    instagramTitle: "Behind the Scenes on Instagram",
    instagramSub: "A peek at our recent setups and celebrations.",
    instagramFollowBtn: "Follow on Instagram",
  },
  kn: {
    nav: ["ಮುಖಪುಟ", "ಸೇವೆಗಳು", "ನಮ್ಮ ಬಗ್ಗೆ", "ಸಂಪರ್ಕ", "ವಿಮರ್ಶೆಗಳು"],
    heroTitle: "ಪ್ರತಿ ಸಂಭ್ರಮವನ್ನೂ,",
    heroTitle2: "ಸುಂದರವಾಗಿ ಅಲಂಕರಿಸುತ್ತೇವೆ.",
    heroSub: "ಹೂ ಅಲಂಕಾರ · ಫೋಟೋಗ್ರಫಿ · ಸೌಂಡ್ ಸಿಸ್ಟಂ · ಈವೆಂಟ್ ಪಾತ್ರೆ ಸಾಮಾನು — ನಿಮ್ಮ ಫಂಕ್ಷನ್‌ಗೆ ಬೇಕಾದ ಎಲ್ಲಾ, ಮಧುಗಿರಿಯ ಒಂದೇ ವಿಶ್ವಾಸಾರ್ಹ ತಂಡದಿಂದ.",
    cta: "WhatsApp‌ನಲ್ಲಿ ವಿಚಾರಿಸಿ",
    waMessage: "ನಮಸ್ಕಾರ, ನಿಮ್ಮ ವೆಬ್‌ಸೈಟ್ ನೋಡಿದೆ. ಇನ್ನಷ್ಟು ತಿಳಿದುಕೊಳ್ಳಬೇಕಿತ್ತು.",
    openNow: "ಈಗ ತೆರೆದಿದೆ",
    closedNow: "ಈಗ ಮುಚ್ಚಿದೆ",
    hoursDisplay: "ಬೆಳಿಗ್ಗೆ 8 – ರಾತ್ರಿ 9",
    whyChooseUs: "ನಮ್ಮ ವಿಶೇಷತೆಗಳು",
    highlights: [
      { title: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ", desc: "ನಿಮ್ಮ ಈವೆಂಟ್ ಶುರುವಾಗುವ ಮೊದಲೇ ಸೆಟಪ್ ಮುಗಿಸ್ತೀವಿ." },
      { title: "ಎಲ್ಲಾ ಬಜೆಟ್‌ಗೂ ಪ್ಯಾಕೇಜ್", desc: "ನಿಮ್ಮ ಬಜೆಟ್‌ಗೆ ಸರಿಹೊಂದೋ ಅಲಂಕಾರ ಆಯ್ಕೆಗಳು." },
      { title: "ಎಲ್ಲಾ ಫಂಕ್ಷನ್‌ಗಳಿಗೂ", desc: "ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಇನ್ನಷ್ಟು." },
      { title: "ಮಧುಗಿರಿಯಲ್ಲಿ ವಿಶ್ವಾಸಾರ್ಹರು", desc: "ನಿಮ್ಮ ನೆರೆಹೊರೆಯವರಿಗೂ ಗೊತ್ತಿರೋ ಸ್ಥಳೀಯ ತಂಡ." },
    ],
    servicesEyebrow: "ನಾವು ಏನು ಮಾಡ್ತೇವೆ",
    servicesTitle: "ನಮ್ಮ ಸೇವೆಗಳು",
    viewGallery: "ಗ್ಯಾಲರಿ ನೋಡಿ",
    backToServices: "ಸೇವೆಗಳಿಗೆ ಹಿಂತಿರುಗಿ",
    services: [
      {
        slug: "decoration",
        name: "ಹೂ ಅಲಂಕಾರ",
        desc: "ಮದುವೆ, ನಿಶ್ಚಿತಾರ್ಥ, ಗೃಹಪ್ರವೇಶ ಮತ್ತು ಎಲ್ಲಾ ಫಂಕ್ಷನ್‌ಗೆ ಸ್ಟೇಜ್, ಮಂಟಪ, ಪ್ರವೇಶದ್ವಾರ ಮತ್ತು ಹಾಲ್ ಅಲಂಕಾರ.",
        img: IMAGES.flowers,
        gallery: [
          { id: "SFD-N230", name: "ಮದುವೆ ಪ್ರವೇಶ ದ್ವಾರ", price: "₹12,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.flowers },
          { id: "SFD-S207", name: "ಹಾರ್ಟ್ ಥೀಮ್ ಸ್ಟೇಜ್ ಹಿನ್ನೆಲೆ", price: "₹18,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.flowers },
          { id: "SFD-D239", name: "ಸಾಂಪ್ರದಾಯಿಕ ಮಂಟಪ ಅಲಂಕಾರ", price: "₹25,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.flowers },
          { id: "SFD-E221", name: "ರಿಸೆಪ್ಷನ್ ಪ್ರವೇಶ ಕಮಾನು", price: "₹15,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.flowers },
        ],
      },
      {
        slug: "photography",
        name: "ಫೋಟೋಗ್ರಫಿ",
        desc: "ನಿಮ್ಮ ಈವೆಂಟ್‌ನ ಪ್ರತಿ ಕ್ಷಣ ಸೆರೆಹಿಡಿಯೋಕೆ ಕ್ಯಾಂಡಿಡ್ ಮತ್ತು ಸಾಂಪ್ರದಾಯಿಕ ಫೋಟೋಗ್ರಫಿ & ವಿಡಿಯೋಗ್ರಫಿ.",
        img: IMAGES.photography,
        gallery: [
          { id: "SFD-P101", name: "ಕ್ಯಾಂಡಿಡ್ ಫೋಟೋಗ್ರಫಿ ಪ್ಯಾಕೇಜ್", price: "₹15,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.photography },
          { id: "SFD-P102", name: "ಸಾಂಪ್ರದಾಯಿಕ ವಿಡಿಯೋಗ್ರಫಿ", price: "₹12,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.photography },
          { id: "SFD-P103", name: "ಪ್ರೀ-ವೆಡ್ಡಿಂಗ್ ಶೂಟ್", price: "₹20,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.photography },
        ],
      },
      {
        slug: "sound",
        name: "ಸೌಂಡ್ ಸಿಸ್ಟಂ",
        desc: "ಎಲ್ಲಾ ಗಾತ್ರದ ಮದುವೆ, ರಿಸೆಪ್ಷನ್ ಮತ್ತು ಸಂಭ್ರಮಗಳಿಗೆ ಪ್ರೊಫೆಷನಲ್ ಸೌಂಡ್ ಸಿಸ್ಟಂ ಮತ್ತು DJ ಸೆಟಪ್.",
        img: IMAGES.sound,
        gallery: [
          { id: "SFD-A101", name: "ಬೇಸಿಕ್ DJ ಮತ್ತು ಸೌಂಡ್ ಸೆಟಪ್", price: "₹8,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.sound },
          { id: "SFD-A102", name: "ಪ್ರೀಮಿಯಂ ಸೌಂಡ್ ಮತ್ತು ಲೈಟಿಂಗ್", price: "₹18,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.sound },
          { id: "SFD-A103", name: "ಲೈವ್ ಆರ್ಕೆಸ್ಟ್ರಾ ಸೆಟಪ್", price: "₹25,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.sound },
        ],
      },
      {
        slug: "utensils",
        name: "ಈವೆಂಟ್ ಪಾತ್ರೆ ಸಾಮಾನು ಬಾಡಿಗೆ",
        desc: "ತಟ್ಟೆ, ಲೋಟ, ಪಾತ್ರೆ ಮತ್ತು ಕ್ಯಾಟರಿಂಗ್ ಸಾಮಾನು ಬಾಡಿಗೆಗೆ, ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ.",
        img: IMAGES.utensils,
        gallery: [
          { id: "SFD-U101", name: "ಬೇಸಿಕ್ ಸ್ಟೀಲ್ ಪಾತ್ರೆ ಸೆಟ್", price: "₹3,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.utensils },
          { id: "SFD-U102", name: "ಪ್ರೀಮಿಯಂ ಬಫೆ ಸರ್ವೀಸ್ ಸೆಟ್", price: "₹6,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.utensils },
          { id: "SFD-U103", name: "ಪೂರ್ಣ ಕ್ಯಾಟರಿಂಗ್ ಪಾತ್ರೆ ಪ್ಯಾಕೇಜ್", price: "₹10,000 ಇಂದ ಪ್ರಾರಂಭ", img: IMAGES.utensils },
        ],
      },
    ],
    testimonialsEyebrow: "ಗ್ರಾಹಕರ ಅಭಿಪ್ರಾಯ",
    testimonialsTitle: "ಗ್ರಾಹಕರು ಏನಂತಾರೆ",
    testimonials: [
      { name: "ರಮೇಶ್ & ಲತಾ", role: "ಮದುವೆ, ಮಧುಗಿರಿ", text: "ಶಿವು ಈವೆಂಟ್ಸ್ ನಮ್ಮ ಮದುವೆ ಸ್ಟೇಜ್ ಅನ್ನು ಕನಸಿನಂತೆ ಅಲಂಕರಿಸಿದ್ರು. ಪ್ರತಿ ಹೂವು ನಾವು ಅಂದುಕೊಂಡ ಹಾಗೇ ಪರ್ಫೆಕ್ಟ್ ಆಗಿತ್ತು!" },
      { name: "ಮಂಜುನಾಥ್", role: "ರಿಸೆಪ್ಷನ್, ಮಧುಗಿರಿ", text: "ಸೌಂಡ್ ಮತ್ತು ಲೈಟಿಂಗ್ ತುಂಬಾ ಚೆನ್ನಾಗಿತ್ತು — ನಮ್ಮ ಅತಿಥಿಗಳು ಇನ್ನೂ ಆ ರಿಸೆಪ್ಷನ್ ಬಗ್ಗೆ ಮಾತಾಡ್ತಾ ಇದ್ದಾರೆ." },
      { name: "ಸುನಿತಾ", role: "ಗೃಹಪ್ರವೇಶ", text: "ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಡೆಲಿವರಿ, ಸಿಬ್ಬಂದಿ ತುಂಬಾ ವಿನಯದಿಂದ ಇದ್ದರು, ಗೃಹಪ್ರವೇಶಕ್ಕೆ ಅಲಂಕಾರ ಸುಂದರವಾಗಿತ್ತು. ಖಂಡಿತ ಶಿಫಾರಸು ಮಾಡ್ತೀನಿ." },
    ],
    aboutEyebrow: "ನಮ್ಮ ಬಗ್ಗೆ",
    aboutTitle: "ಮಧುಗಿರಿಯ ವಿಶ್ವಾಸಾರ್ಹ ಈವೆಂಟ್ ಹೆಸರು",
    aboutBody: "ಶಿವು ಈವೆಂಟ್ಸ್ ಮಧುಗಿರಿ ಕಾಳಜಿ ಮತ್ತು ಸೂಕ್ಷ್ಮ ಗಮನದಿಂದ ಮದುವೆ ಮತ್ತು ಫಂಕ್ಷನ್‌ಗಳನ್ನ ಅಲಂಕರಿಸ್ತಾ ಬಂದಿದೆ. ಸ್ಟೇಜ್‌ನ ಮೊದಲ ಹೂವಿಂದ ಕೊನೆಯ ತಟ್ಟೆವರೆಗೆ, ನಿಮ್ಮ ಈವೆಂಟ್‌ನ ಪ್ರತಿ ಭಾಗವನ್ನೂ ನಾವು ನೋಡಿಕೊಳ್ತೀವಿ — ನೀವು ಕುಟುಂಬದ ಜೊತೆ ಸಂಭ್ರಮ ಆನಂದಿಸಬಹುದು.",
    ownerLabel: "ಓನರ್",
    teamEyebrow: "ನಮ್ಮ ತಂಡವನ್ನು ಭೇಟಿಯಾಗಿ",
    teamTitle: "ಪ್ರತಿ ಈವೆಂಟ್ ಹಿಂದಿನ ಜನರು",
    teamHint: "ಪ್ರತಿಯೊಬ್ಬರನ್ನೂ ಭೇಟಿಯಾಗಲು ಸ್ಕ್ರಾಲ್ ಮಾಡಿ ಅಥವಾ ಫೋಟೋ ಟ್ಯಾಪ್ ಮಾಡಿ",
    callOwner: "ಓನರ್‌ಗೆ ಕರೆ ಮಾಡಿ",
    team: [
      { id: "owner", name: "ಶಿವು", role: "ಓನರ್ ಮತ್ತು ಫೌಂಡರ್", isOwner: true, img: IMAGES.teamOwner },
      { id: "w1", name: "ರವಿ ಕುಮಾರ್", role: "ಡೆಕೊರೇಷನ್ ಲೀಡ್", img: IMAGES.teamW1 },
      { id: "w2", name: "ಸುರೇಶ್", role: "ಸೌಂಡ್ ಇಂಜಿನಿಯರ್", img: IMAGES.teamW2 },
      { id: "w3", name: "ಮಂಜುನಾಥ್", role: "ಫೋಟೋಗ್ರಾಫರ್", img: IMAGES.teamW3 },
      { id: "w4", name: "ಲಕ್ಷ್ಮಿ", role: "ಕ್ಯಾಟರಿಂಗ್ ಸಿಬ್ಬಂದಿ", img: IMAGES.teamW4 },
    ],
    contactEyebrow: "ಸಂಪರ್ಕಿಸಿ",
    contactTitle: "ಈವೆಂಟ್ ಪ್ಲಾನ್ ಮಾಡ್ತಾ ಇದ್ದೀರಾ? ಮಾತಾಡೋಣ.",
    contactSub: "ನಿಮ್ಮ ದಿನಾಂಕ ಮತ್ತು ಏನು ಬೇಕು ಅಂತ ಹೇಳಿ — ಮುಂದಿನದೆಲ್ಲ ನಾವು ನೋಡಿಕೊಳ್ತೀವಿ.",
    contactBtn: "WhatsApp‌ನಲ್ಲಿ ಮೆಸೇಜ್ ಮಾಡಿ",
    callBtn: "ಈಗಲೇ ಕರೆ ಮಾಡಿ",
    location: "ಮಧುಗಿರಿ, ಕರ್ನಾಟಕ",
    footer: "ಶಿವು ಈವೆಂಟ್ಸ್ ಮಧುಗಿರಿ",
    rightsReserved: "ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ.",
    langNames: { en: "English", kn: "ಕನ್ನಡ" },
    reviewsPageSub: "ಮಧುಗಿರಿಯ ಎಲ್ಲೆಡೆಯಿಂದ ನಮ್ಮ ಗ್ರಾಹಕರ ನಿಜವಾದ ಅಭಿಪ್ರಾಯಗಳು.",
    reviewsGoogleLink: "Google‌ನಲ್ಲಿ ಎಲ್ಲಾ ವಿಮರ್ಶೆಗಳನ್ನು ನೋಡಿ",
    googleEyebrow: "Google ವಿಮರ್ಶೆಗಳು",
    googleTitleRated: "{rating} ರೇಟಿಂಗ್ ನಮ್ಮ ಕುಟುಂಬಗಳಿಂದ",
    googleTitleNoRating: "ನಮ್ಮ ಕುಟುಂಬಗಳ ಪ್ರೀತಿ ನಮಗಿದೆ",
    googleSub: "ಮಧುಗಿರಿಯಲ್ಲಿ ನಾವು ಭಾಗಿಯಾದ ನಿಜವಾದ ಮದುವೆ ಮತ್ತು ಫಂಕ್ಷನ್‌ಗಳ ನಿಜವಾದ ಅಭಿಪ್ರಾಯಗಳು.",
    googleReadBtn: "Google‌ನಲ್ಲಿ ವಿಮರ್ಶೆಗಳನ್ನು ನೋಡಿ",
    googleWriteBtn: "ವಿಮರ್ಶೆ ಬರೆಯಿರಿ",
    outOfFive: "5 ರಲ್ಲಿ",
    enquire: "ವಿಚಾರಿಸಿ",
    footerTagline: "ಮದುವೆ ಮತ್ತು ಸಂಭ್ರಮಗಳು",
    footerDesc: "ಹೂ ಅಲಂಕಾರ, ಫೋಟೋಗ್ರಫಿ, ಸೌಂಡ್ ಸಿಸ್ಟಂ ಮತ್ತು ಈವೆಂಟ್ ಪಾತ್ರೆ ಸಾಮಾನು — ನಿಮ್ಮ ಸಂಭ್ರಮಕ್ಕೆ ಬೇಕಾದ ಎಲ್ಲಾ, ಮಧುಗಿರಿಯ ಒಂದೇ ವಿಶ್ವಾಸಾರ್ಹ ತಂಡದಿಂದ.",
    footerQuickLinks: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
    footerContact: "ಸಂಪರ್ಕ",
    instagramEyebrow: "ನಮ್ಮನ್ನು ಫಾಲೋ ಮಾಡಿ",
    instagramTitle: "Instagram‌ನಲ್ಲಿ ನಮ್ಮ ಕೆಲಸ",
    instagramSub: "ನಮ್ಮ ಇತ್ತೀಚಿನ ಸೆಟಪ್ ಮತ್ತು ಸಂಭ್ರಮಗಳ ಒಂದು ನೋಟ.",
    instagramFollowBtn: "Instagram‌ನಲ್ಲಿ ಫಾಲೋ ಮಾಡಿ",
  },
};
