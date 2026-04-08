export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Aneja",
  description: "Authentic Indian Cuisine in Patiala. Experience the rich flavors of Punjab with our handcrafted dishes.",
  url: "https://aneja-patiala.com",
  ogImage: "https://aneja-patiala.com/og.jpg",
  links: {
    twitter: "https://twitter.com/anejapatiala",
    github: "https://github.com/anejapatiala",
    instagram: "https://instagram.com/anejapatiala",
    facebook: "https://facebook.com/anejapatiala",
  },

  location: {
    lat: 30.3398,
    lng: 76.3869,
    address: "Model Town, Patiala, Punjab",
  },

  openingHours: {
    open: 11, // 11:00 AM
    close: 23, // 11:00 PM
  },

  // Navigation
  nav: [
    { title: "Home", href: "/" },
    { title: "Menu", href: "/features" }, // Features = Menu
    { title: "Our Story", href: "/about" },
    { title: "Prices", href: "/pricing" },
    { title: "Reviews", href: "/testimonials" },
    { title: "Contact", href: "/contact" },
  ],

  // Footer
  footer: {
    logo: "Aneja",
    description: "Serving the heart of Patiala with authentic flavors since 1995.",
    sections: [
      {
        title: "Explore",
        links: [
          { title: "Menu", href: "/features" },
          { title: "Pricing", href: "/pricing" },
          { title: "Our Story", href: "/about" },
          { title: "Testimonials", href: "/testimonials" },
        ],
      },
      {
        title: "Support",
        links: [
          { title: "FAQ", href: "/faq" },
          { title: "Contact", href: "/contact" },
          { title: "Privacy Policy", href: "/privacy" },
          { title: "Terms of Service", href: "/terms" },
        ],
      },
      {
        title: "Contact",
        links: [
          { title: "Model Town, Patiala, Punjab", href: "https://maps.google.com" },
          { title: "+91 98765 43210", href: "tel:+919876543210" },
          { title: "hello@aneja.com", href: "mailto:hello@aneja.com" },
        ],
      },
    ],
    socials: [
      { icon: "Instagram", href: "#" },
      { icon: "Facebook", href: "#" },
      { icon: "Twitter", href: "#" },
    ],
    copyright: "© 2024 Aneja Restaurant. All rights reserved.",
  },

  // Pages
  home: {
    announcement: {
      text: "🎉 New Seasonal Menu is Live! Order now for 20% off.",
      linkText: "View Menu",
      linkHref: "/features",
    },
    hero: {
      badge: "Best in Patiala",
      heading: "Taste the Soul of ",
      headingHighlight: "Punjab",
      description: "Authentic recipes passed down through generations. Experience fine dining with a touch of home in every bite.",
      primaryCta: { text: "Order Online", href: "/features" },
      secondaryCta: { text: "Book a Table", href: "/contact" },
      socialProof: {
        text: "Loved by 10,000+ foodies in Patiala",
        avatars: ["/avatars/1.jpg", "/avatars/2.jpg", "/avatars/3.jpg"],
      },
    },
    trustedBy: {
      title: "Featured In",
      logos: [
        { name: "Times of India", src: "/logos/toi.svg" },
        { name: "Hindustan Times", src: "/logos/ht.svg" },
        { name: "Tribune", src: "/logos/tribune.svg" },
        { name: "Patiala Life", src: "/logos/pl.svg" },
        { name: "Punjab Kesari", src: "/logos/pk.svg" },
      ],
    },
    socialProofSnapshot: {
      heading: "Why people love us",
      stats: [
        { value: "4.9/5", label: "Average Rating" },
        { value: "50k+", label: "Happy Customers" },
        { value: "25+", label: "Years of Service" },
      ],
      highlight: "Voted Best Family Restaurant 2023",
    },
    featuresGrid: {
      heading: "Our Signature ",
      headingHighlight: "Offerings",
      description: "From spicy curries to sweet delights, explore our diverse menu categories.",
      features: [
        { title: "North Indian", description: "Rich, creamy gravies and tandoori breads.", icon: "Utensils", category: "Veg", highlighted: true },
        { title: "Chinese", description: "Indo-Chinese fusion with a spicy kick.", icon: "ChefHat", category: "Veg" },
        { title: "South Indian", description: "Crispy dosas and steaming idlis.", icon: "MapPin", category: "Veg" },
        { title: "Beverages", description: "Refreshing lassi, shakes and mocktails.", icon: "ShoppingBag", category: "Drinks" },
        { title: "Desserts", description: "Traditional sweets to end your meal.", icon: "Star", category: "Dessert", highlighted: true },
        { title: "Snacks", description: "Quick bites and chaat for every mood.", icon: "Clock", category: "Veg" },
      ],
    },
    deepDive: {
      badge: "Chef's Special",
      heading: "The Famous Aneja Thali",
      description: "A complete meal with dal makhani, shahi paneer, mix veg, rice, naan, raita, salad and sweet. A royal feast for one.",
      cta: { text: "View Details", href: "/features" },
      image: "/images/thali.png", // Code generated placeholder
      features: ["Fresh Ingredients", "Authentic Spices", "Made to Order"],
    },
    howItWorks: {
      heading: "How to ",
      headingHighlight: "Order",
      steps: [
        { title: "Browse Menu", description: "Explore our wide range of dishes online.", icon: "Menu" },
        { title: "Place Order", description: "Select your favorites and customize.", icon: "ShoppingBag" },
        { title: "Fast Delivery", description: "Hot and fresh food at your doorstep.", icon: "Clock" },
      ],
    },
    benefits: {
      heading: "Why Choose Aneja?",
      items: [
        { title: "Authentic Taste", description: "Recipes preserved for decades." },
        { title: "Hygiene First", description: "Top-notch cleanliness standards." },
        { title: "Fresh Ingredients", description: "Locally sourced, daily fresh produce." },
      ],
    },
    productPreview: {
      heading: "A Glimpse of Delight",
      description: "Visual feast of our most popular dishes.",
      image: "/images/preview.svg", // Placeholder for graphic
    },
    creatorPreview: {
      heading: "Meet the Chef",
      subheading: "Culinary Mastermind",
      description: "Chef Rahul Aneja brings 20 years of experience from top kitchens to your plate in Patiala.",
      image: "/images/chef.svg",
    },
    testimonials: {
      heading: "What our customers say",
      items: [
        { text: "The best Dal Makhani in town! Absolutely love the vibe.", author: "Amit S.", role: "Food Blogger" },
        { text: "Great place for family dinners. Service is impeccable.", author: "Priya K.", role: "Regular" },
        { text: "Authentic Punjabi taste. Highly recommended!", author: "Rohan M.", role: "Tourist" },
      ],
    },
    useCases: {
      heading: "Perfect for Every Occasion",
      cases: [
        { title: "Family Dinner", description: "Cozy seating for the whole family." },
        { title: "Birthday Parties", description: "Celebrate your special day with us." },
        { title: "Corporate Lunch", description: "Quick and delicious business meals." },
      ],
    },
    comparison: {
      heading: "The Aneja Difference",
      pros: ["Authentic Recipes", "Fresh Ingredients", "Made to Order", "Family Atmosphere"],
      cons: ["Generic Gravies", "Frozen Veggies", "Pre-cooked", "Noisy Environment"], // Competitors
      competitorName: "Others",
      ourName: "Aneja",
    },
    integrations: {
      heading: "Order via your favorite apps",
      partners: ["Zomato", "Swiggy", "MagicPin"],
    },
    pricingPreview: {
      heading: "Pocket Friendly Prices",
      plans: [
        { name: "Mini Meal", price: "₹150", features: ["Dal", "2 Roti", "Salad"] },
        { name: "Executive Thali", price: "₹250", features: ["2 Sabzi", "Dal", "Rice", "Naan", "Sweet"] },
        { name: "Royal Feast", price: "₹450", features: ["Soup", "Starters", "Main Course", "Dessert"] },
      ],
      cta: { text: "See Full Menu", href: "/pricing" },
    },
    faq: {
      heading: "Frequently Asked Questions",
      questions: [
        { question: "Do you offer home delivery?", answer: "Yes, we deliver across Patiala via Zomato and Swiggy." },
        { question: "Is there parking available?", answer: "Yes, we have ample parking space for our guests." },
        { question: "Do you take party orders?", answer: "Absolutely! Contact us for bulk orders and catering." },
      ],
    },
    cta: {
      heading: "Hungry yet?",
      description: "Don't wait. Treat yourself to the best food in Patiala today.",
      primaryCta: { text: "Order Now", href: "/features" },
    },
    newsletter: {
      heading: "Get Exclusive Offers",
      description: "Subscribe to our newsletter for weekly coupons and special menu updates.",
      placeholder: "Enter your email",
      buttonText: "Subscribe",
    },
  },

  // Other Pages content...
  about: {
    heading: "Our Story",
    description: "Founded in 1995, Aneja started as a small sweet shop and has grown into Patiala's favorite family restaurant...",
    timeline: [
      { year: "1995", title: "The Beginning", description: "Opened as a humble sweet shop in Model Town." },
      { year: "2005", title: "Full Dining", description: "Expanded into a full-service family restaurant." },
      { year: "2015", title: "Renovation", description: "Complete interior overhaul and modern menu launch." },
      { year: "2023", title: "Best in Town", description: "Awarded 'Best Family Restaurant' by Patiala Life." },
    ],
  },
  menu: {
    heading: "Our Menu",
    description: "Explore our wide range of delicacies.",
    categories: ["Starters", "Main Course", "Breads", "Rice", "Desserts", "Beverages"],
  },
  pricing: {
    heading: "Menu Prices",
    description: "Transparent pricing for quality food.",
  },
  contact: {
    heading: "Get in Touch",
    description: "We'd love to hear from you.",
    info: {
      address: "Model Town, Patiala, Punjab",
      phone: "+91 98765 43210",
      email: "hello@aneja.com",
    },
  },
  legal: {
    privacy: {
      heading: "Privacy Policy",
      content: "We respect your privacy. This policy outlines how we handle your data...",
      sections: [
        { title: "1. Data Collection", content: "We collect minimal personal data necessary to provide our services, such as your name and email when you contact us." },
        { title: "2. Use of Data", content: "Your data is used solely for communication and service delivery. We do not sell your data to third parties." },
        { title: "3. Cookies", content: "We use cookies to improve your browsing experience and analyze site traffic." },
      ],
    },
    terms: {
      heading: "Terms of Service",
      content: "By using our website, you agree to the following terms...",
      sections: [
        { title: "1. Introduction", content: "Welcome to Aneja. By accessing our website, you agree to these terms." },
        { title: "2. Services", content: "We provide authentic Indian cuisine and catering services. Prices and availability are subject to change." },
        { title: "3. User Conduct", content: "You agree to use our site responsibly and not to disrupt our services." },
      ],
    },
  },
  uiLabels: {
    mobileAction: {
      call: "Call",
      order: "Order",
    },
    comparison: {
      badge: "Best Choice",
    },
    pricing: {
      popular: "Popular",
      orderNow: "Order Now",
      perPerson: "/ person",
    },
    hero: {
      from: "From",
      happyCustomers: "happy customers",
    },
    featureDeepDive: {
      badge: "Authentic Spices",
    },
    announcement: {
      openNow: "Open Now",
      opensAt: "Opens at",
      greetings: {
        morning: "Good Morning!",
        afternoon: "Good Afternoon!",
        evening: "Good Evening!",
      },
    },
    cookie: {
      heading: "We use cookies 🍪",
      description: "We use cookies to improve your experience. By using our site, you agree to our",
      policyLink: "Privacy Policy",
      close: "Close",
      accept: "Accept All",
    },
    error: {
      heading: "Something went wrong!",
      description: "We apologize for the inconvenience. Our chefs are looking into it.",
      retry: "Try again",
    },
    testimonials: {
      readMore: "Read More Stories",
    },
    faq: {
      expand: "Show Answer",
      collapse: "Hide Answer",
    },
    contact: {
      visitUs: "Visit Us",
      callUs: "Call Us",
      emailUs: "Email Us",
      openingHours: "Opening Hours",
      daily: "Daily",
    },
    newsletter: {
      privacy: "We care about your data in our",
      privacyLink: "privacy policy",
      success: "Subscribed successfully!",
      error: "Please enter a valid email address.",
      welcome: "Thanks for subscribing! 🎉",
      checkInbox: "Check your inbox for a welcome gift.",
    },
    socialProof: {
      liveStatus: "Live Kitchen Status: Busy",
    },
    benefits: {
      badge: "Our Promise",
    },
    menu: {
      filterAll: "All",
      filterVeg: "Veg",
      filterNonVeg: "Non-Veg",
      filterDrinks: "Drinks",
      filterDessert: "Dessert",
      chefChoice: "Chef's Choice",
    },
    footer: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      backToTop: "Back to Top",
    },
    aria: {
      scrollToTop: "Scroll to top",
      mainNav: "Main Navigation",
      mobileNav: "Mobile Navigation",
    },
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Aneja",
    image: "https://aneja-patiala.com/og.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Model Town",
      addressLocality: "Patiala",
      addressRegion: "PB",
      postalCode: "147001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 30.3398,
      longitude: 76.3869,
    },
    url: "https://aneja-patiala.com",
    telephone: "+919876543210",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "11:00",
        closes: "23:00",
      },
    ],
    menu: "https://aneja-patiala.com/features",
    servesCuisine: "Indian",
    priceRange: "₹₹",
    hasMenu: {
      "@type": "Menu",
      name: "Main Menu",
      url: "https://aneja-patiala.com/features",
    },
  },
  notFound: {
    heading: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist or has been moved.",
    backButton: "Back to Home",
  },
};
