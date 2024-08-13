import { defineConfig } from 'vitepress';

// refer https://vitepress.dev/reference/site-config for details
export default defineConfig({
  lang: 'en-US',
  title: 'Carbase 24',
  description: 'SaaS para gerir stands viaturas de A Z.',

  themeConfig: {
    nav: [
      { text: 'Documentação', link: '/intro' },
      { text: 'Ambiente Staging', link: 'https://carbase.ovh/' },
      { text: 'Ambiente Produção', link: 'https://carbase.pt/' },

      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     { text: 'Item A', link: '/item-1' },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' },
      //   ],
      // },

      // ...
    ],

    sidebar: [
      {
        // text: 'Guide',
        items: [
          { text: 'Introdução', link: '/intro' },
          {
            text: 'Integrações',
            items: [
                { text: 'Bitrix', link: '/bitrix' },
            ],
           },
          // ...
        ],
      },
    ],

    socialLinks: [
        { icon: "github", target: "_blank", link: "https://github.com/thechaincademy/VehicleHub-Connect" },
    ]
  },
});
