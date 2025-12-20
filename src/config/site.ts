// Site-wide configuration
export const siteConfig = {
  // Site metadata
  name: "Foret Blog",
  title: "Foret Blog",
  description: "A modern blog built with Astro",
  
  // Navigation
  navigation: {
    home: "Home",
    posts: "Posts",
    contact: "Contact",
    comments: "Comments",
  },
  
  // Hero Section
  hero: {
    prefix: "I am",
    name: "FORET",
    intro: "Foret's Blog",
    avatar: "/image/pettydust.jpg",
    buttons: {
      viewPosts: "View Posts",
      contactMe: "Contact Me",
    },
    socialLinks: [
      { name: "Twitter", icon: "/svg/twitter.svg", url: "https://github.com/FORET02" },
      { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://github.com/FORET02" },
      { name: "Facebook", icon: "/svg/facebook.svg", url: "https://github.com/FORET02" },
      { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/FORET02" },
    ],
  },
  
  // About Section
  about: {
    title: "About Me",
    text: "취업 준비하면서, 블로그에 기록하고 있어요.",
  },
  
  // Contact Page
  contact: {
    title: "Get In Touch",
    subtitle: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.",
    info: {
      email: {
        label: "Email",
        value: "doeun1101@gmail.com",
        link: "doeun1101@gmail.com",
      },
      location: {
        label: "Location",
        value: "Seoul, South Korea",
      },
    },
    followMe: {
      title: "Follow Me",
      links: [
        { name: "Twitter", icon: "/svg/twitter.svg", url: "https://github.com/FORET02" },
        { name: "LinkedIn", icon: "/svg/linkedin.svg", url: "https://github.com/FORET02" },
        { name: "Facebook", icon: "/svg/facebook.svg", url: "https://github.com/FORET02" },
        { name: "GitHub", icon: "/svg/github.svg", url: "https://github.com/FORET02" },
      ],
    },
    footerText: [
      "I typically respond to messages within 24 hours during business days.",
      "Looking forward to hearing from you! 🚀",
    ],
    messageButton: "💬 Leave a Message",
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Someone. All rights reserved.",
    links: [
      { text: "Privacy Policy", url: "#" },
      { text: "Terms of Service", url: "#" },
      { text: "Sitemap", url: "#" },
    ],
    github: {
      text: "Star this project on Github",
      url: "https://github.com/tomcomtang/astro-cartoon-portfolio",
    },
  },
  
  // Posts Page
  posts: {
    title: "Blog Posts",
    subtitle: "키워드를 검색하면, 내용을 볼 수 있어요",
    searchPlaceholder: "Search posts...",
  },
  
  // Comments Page
  comments: {
    title: "Comments & Discussion",
    subtitle: "Share your thoughts, questions, or suggestions here. Let's connect and discuss!",
    guidelines: {
      title: "Community Guidelines",
      items: [
        "Be respectful and constructive in your comments",
        "No spam, self-promotion, or advertising allowed",
        "No personal attacks, hate speech, or harassment",
        "Stay on topic and keep discussions relevant",
        "No inappropriate, offensive, or illegal content",
        "Use clear, friendly, and inclusive language",
      ],
    },
  },
};

