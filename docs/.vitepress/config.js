module.exports = {
  base:'/',
  title: 'AILink 中文文档',
  description: 'AILink，与你一同链接未来！',
  lang: 'zh-CN',
  lastUpdated: true,
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'logo.png'}],
    ['meta',{'name':'referrer','content':'no-referrer'}]
  ],
  themeConfig:{
    repoLabel:'测试',
    docsDir: 'docs',
    docsBranch: 'master',
    editLinks: true,
    editLinkText: '欢迎帮助我们改善页面!',
    lastUpdated: '最近更新时间',
    nav: [
      { text: '项目说明', link: '/guide/' },
      { text: '部署教程', link: '/course/' },
      { text: '在线购买', link: 'https://www.kaka.casa/ibh5eF.webp' },
    ],
    sidebar: [
      {
        text: '项目介绍',
        link: '/guide/',
        items: [
          {
            text: '说明',
            link: '/guide/',
          },
          {
            text: '截图',
            link: '/guide/image',
          },
          {
            text: '价格',
            link: '/guide/price',
          },
        ],
      },
      {
        text: '部署教程',
        link: '/course/',
        items: [
          {
            text: '系统基础环境',
            link: '/course/env/base',
          },
          {
            text: '后端部署教程',
            link: '/course/env/backend',
          },
          {
            text: '前端部署教程',
            link: '/course/env/fronted',
          },
          {
            text: '系统更新教程',
            link: '/course/env/update',
          },
          {
            text: '部署常见问题',
            link: '/course/env/question',
          },
          {
            text: '高端操作教程',
            link: '/course/env/high',
          },
          {
            text: '系统更新日志',
            link: '/course/env/log',
          },
        ],
      },
    ],
    },
}