module.exports = {
  title: "KNOCKKK 的笔记",
  description: "彭宇（knockkk）的学习笔记",
  base: "/note/",
  head: [
    ["link", { rel: "icon", href: "/tongren.jpeg" }], //浏览器的标签栏的网页图标
  ],
  markdown: {
    lineNumbers: true,
  },
  themeConfig: {
    lastUpdated: "lastUpdate",
    nav: [
      { text: "笔记", link: "/" },
      { text: "我的博客", link: "https://knockkk.github.io" },
      { text: "Github", link: "https://github.com/knockkk" },
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: "HMTL",
        children: [
          ["/pages/html/canvas", "Canvas基础使用"],
          ["/pages/html/form", "HTML表单基础"],
        ],
      },
      {
        title: "CSS",
        children: [["/pages/css/note", "CSS基础"]],
      },
    ],
    nextLinks: true,
    prevLinks: true,
  },
};
