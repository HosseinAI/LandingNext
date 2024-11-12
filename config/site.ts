export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Kite: Smart Apply Solution",
  description:
    "ApplyKite helps you find academic positions and connect with top supervisors, simplifying your path to a Master's or PhD.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Positions",
      href: "/positions",
    },
    {
      label: "Supervisors",
      href: "/supervisors",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about-us",
    },
    {
      label: "Contact",
      href: "/contact",
    },
    {
      label: "T&Cs",
      href: "/terms-and-conditions",
    },
    {
      label: "PrivacyPolicy",
      href: "/privacy-policy",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],

  links: {
    webapp: "https://dashboard.applykite.com",
    telegram: "https://t.me/ApplyKiteBot",
    twitter: "https://x.com/ApplyKite",
    instagram: "https://www.instagram.com/applykite/",
    linkedin: "https://www.linkedin.com/company/applykite",
    email: "support@applykite.com",
    telegramAdmin: "https://t.me/ApplyKite",
  },
};

export const endpoints = {
  admin: {
    blog: {
      getAll: "/api/posts", //
      getDetail: "/api/posts", //
      addComment: "/api/posts/posts", // /{post_id}/comment Method: POST //! NO TOKEN
      likeComment: "/api/posts/posts", // /{post_id}/like Method: POST //! NO TOKEN
    },
  },
};
