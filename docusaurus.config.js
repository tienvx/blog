module.exports = {
  title: "Tien Vo's Blog",
  tagline: 'Symfony 4, Software Development, Software Architect, Software Testing',
  url: 'https://tienvx.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tienvx', // Usually your GitHub org/user name.
  projectName: 'tienvx.github.io', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Tien Vo's Blog",
      logo: {
        alt: 'Blog Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'projects', label: 'Projects', position: 'left'},
        {to: 'cv/redirect', label: 'CV', position: 'left', target: '_blank', rel: 'nofollow'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Tien Vo, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: false,
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
