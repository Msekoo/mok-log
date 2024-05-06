const CONFIG = {
  // profile setting (required)
  profile: {
    name: "mokhubs",
    image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "frontend developer",
    bio: "I develop everything using js.",
    email: "wensszzmmd10844@gmail.com",
    linkedin: "",
    github: "",
    instagram: "",
  },
  projects: [
    {
      name: `mok-log`,
      href: "https://github.com/Msekoo/mok-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "mok-log",
    description: "welcome to mok-log!",
  },

  // CONFIG configration (required)
  link: "https://www.mokhub.com/",
  since: 2024, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-playground.vercel.app", // The link to generate OG image, don't end with a slash
  seo: {
    keywords: ["Blog", "Website", "Notion"],
  },
  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: true,
    config: {
      host: "https://cusdis.com",
      appid: "248474fa-f86f-4c43-8282-1763b8c844c2", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 10, // revalidate time for [slug], index
}

module.exports = { CONFIG }
