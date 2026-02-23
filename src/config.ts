export const SITE = {
  website: "https://blog.peng.loc.cc", // replace this with your deployed domain
  author: "Sunshine",
  profile: "https://blog.peng.loc.cc",
  desc: "人生旅途随笔",
  title: "极简博客✍️",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  showArchives: true,
  showBackButton: true, // show back button in post detail
  editPost: {
    enabled: true,
    text: "Edit page",
    url: "https://github.com/t0saki/AstroPages-Bilingual/edit/main/",
  },
  dynamicOgImage: true,
  dir: "ltr", // "rtl" | "auto"
  lang: "en", // html lang code. Set this empty and default will be "en"
  timezone: "Asia/Shanghai", // Default global timezone (IANA format) https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
} as const;

export const BLOG_PATH = "src/data/blog";
