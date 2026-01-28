import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({

  title: "WoXituo",
  description: "遇到难找到的东西又不想起我了，那还不收藏分享等什么呢。",


  // 忽略死链检查（可选）：防止删除原项目文件后，残留链接导致打包报错
  ignoreDeadLinks: true, 

  themeConfig: {
    // === 1. 新增：本地搜索配置 (中文适配) ===
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: '搜索文档', buttonAriaLabel: '搜索文档' },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: { selectText: '选择', navigateText: '切换', closeText: '关闭' }
              }
            }
          }
        }
      }
    },

    // === 2. 侧边栏配置 ===
    sidebar: [
      {
        text: '开始使用', 
        // 请确保你的文件路径是 docs/mdddd/开始使用.md
        link: "/mdddd/开始使用",
        collapsed: false,
      },
      {
        text: '教程', // 加个标题文字更好看
        collapsed: false,
        items: [
          { text: '正在整理', link: '/' },   
          { text: '🤖正在努力更新', link: '/' } 
        ]
      },
      {
        text: '百科', // 加个标题文字更好看
        collapsed: false,
        items: [
          { text: '广告拦截/隐私/VPN', link: '/mdddd/ziyuan/privacy' },   
          { text: '🧠人工智能', link: '/mdddd/ziyuan/ai' },
          { text: '🛜VPN/翻墙工具', link: '/mdddd/ziyuan/加速器_VPN' },
          { text: '📺动漫/电影/电视', link: '/mdddd/ziyuan/video' },
          { text: '📻广播/博客/音乐', link: '/mdddd/工具Tools/audio' },
          { text: '🎮游戏/模拟器', link: '/mdddd/ziyuan/gaming' },
          { text: '📕书籍/漫画/漫画', link: '/mdddd/ziyuan/reading' },
          { text: '⬇️下载', link: '/mdddd/ziyuan/downloading' },
          { text: '🪲下载种子', link: '/mdddd/ziyuan/torrenting' },

          { text: 'Linux/MAC', link: '/mdddd/ziyuan/linux-macos' },
          { text: 'Android / iOS', link: '/mdddd/ziyuan/mobile' },
          { text: '教程视频杂项', link: '/mdddd/ziyuan/storage' },
          { text: '🔞非英文资源', link: '/mdddd/ziyuan/non-english' },
          
          { text: '🤖正在努力更新', link: '/' } 
        ]
      },
      {
        text: '工具Tools', // 加个标题文字更好看
        collapsed: false,
        items: [
          { text: '💻系统工具', link: '/mdddd/工具Tools/system-Tools' },   
          { text: '🗃️文件工具', link: '/mdddd/工具Tools/file-tools' },
          { text: '🛜互联网工具', link: '/mdddd/工具Tools/internetTools' },
          { text: '🎦社交媒体工具', link: '/mdddd/工具Tools/internetTools' },
          { text: '📃文本工具', link: '/mdddd/工具Tools/text-tools' },
          { text: '🕹️游戏工具', link: '/mdddd/工具Tools/gaming-tools' },
          { text: '🧩图像工具', link: '/mdddd/工具Tools/image-tools' },
          { text: '📽️视频工具', link: '/mdddd/工具Tools/video-tools' },
          { text: '🎙️音频工具', link: '/mdddd/工具Tools/audio' },
          { text: '🏫教育工具', link: '/mdddd/工具Tools/educational' },
          { text: '🧶开发工具', link: '/mdddd/工具Tools/developer-tools' },
          { text: '🤖正在努力更新', link: '/' } 
        ]
      },

      {
        text: '🍱 其他',
        items: [
          { text: '各类其他资源', link: '/mdddd/ziyuan/misc' },
        ]
      }
    ],

    // === 3. 社交链接 ===
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lwofacai/wofacai' },
      // 注意：Discord 图标重复了 GitHub 链接，记得修改
      { icon: 'discord', link: 'https://discord.gg/w9qgVVSkB' }, 
      {
        // Telegram 自定义图标
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.426 1.056a2.01 2.01 0 0 0-1.926-.03L1.5 9.07a2 2 0 0 0-.11 3.59l4.58 2.3 2.1 6.54c.15.46.54.8 1.01.86a1.96 1.96 0 0 0 1.54-.57l2.84-2.84 4.8 3.54c.48.35 1.08.38 1.59.08.51-.3 1.1-.96 1.01-1.63L22.95 3.03a2 2 0 0 0-1.524-1.974zM10.02 14.97l-.14 4.22c-.01.16-.25.16-.26 0l-1.4-4.38 10.16-7.3c.1-.07.2.1.1.18l-8.46 7.28z" fill="currentColor"/></svg>'
        },
        link: 'https://t.me/woxituoHH'
      }
    ]
  }
})