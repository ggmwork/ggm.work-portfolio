// src/content/site.ts
export type SiteNavItem = { 
    label: string;
    href: string 
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;            
  locale: string;
  author: {
    name: string;
    email?: string;
    url?: string;
    socials?: {
      x?: string;
      github?: string;
      linkedin?: string;
    };
  };
  nav: SiteNavItem[];
  // Footer content (optional): array of columns with a title and text
  footer?: {
    columns: { title: string; text: string }[];
  };
  // Optional feature blocks for the homepage
  features?: { title: string; text: string; image: string; imageAlt?: string; reverse?: boolean }[];
  seo: {
    ogImage?: string;
    robots: string;
    themeColor: string;
  };
};

export const site: SiteConfig = {
  name: "Gonçalo Mendonça",
  tagline: "Web & Digital Designer | UX/UI | E-commerce | Multimedia",
  description:
    "I am passionate about design and its role across products and business contexts. I approach each project by blending creative thinking with problem-solving mindset, keeping context, constraints, and objectives at the forefront.",
  url: import.meta.env.SITE_URL ?? "https://example.com",
  locale: "en",
  author: {
    name: "Gonçalo Mendonça",
    email: "ggm.work22@gmail.com",
    url: "https://example.com",
    socials: {
      github: "https://github.com/yourhandle",
      linkedin: "https://www.linkedin.com/in/yourhandle"
    }
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "About", href: "/#about" },
    { label: "Contact", href: "/#contact" },
    { label: "Legal", href: "/#legal" }
  ],

  // Footer columns: content-first, editable via `src/content/site.ts`.
  footer: {
    columns: [
      { title: "Contact", text: "Phone: 91528545" },
      { title: "Email", text: "ggm.work22@gmail.com" },
      { title: "LinkedIn", text: "https://www.linkedin.com/in/yourhandle" }
    ]
  },

  // Feature blocks used under the project grid on the homepage. Content first.
  features: [],

  seo: {
    ogImage: "/images/og/og-portfolio.jpg",
    robots: "index,follow",
    themeColor: "#fbfbf9"
  }
};
