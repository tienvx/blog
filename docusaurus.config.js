/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: "Tien Vo's Blog",
  tagline: 'Symfony 4, Software Development, Software Architect, Software Testing',
  url: 'https://tienvx.github.io',
  baseUrl: '/',
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
      links: [
        {to: 'projects', label: 'Projects', position: 'left'},
        {to: 'cv/redirect', label: 'CV', position: 'left', target: '_blank'},
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
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        blog: {
          path: './blog',
          routeBasePath: '/',
        },
      },
    ],
  ],
};
