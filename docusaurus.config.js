// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { themes } = require('prism-react-renderer');
const { version } = require('./package.json');
/* eslint-enable @typescript-eslint/no-var-requires */

// directories
const SOURCE_DIR = path.resolve(__dirname, 'src');
const STATIC_DIR = path.resolve(__dirname, 'static');
const STYLES_DIR = path.resolve(SOURCE_DIR, 'styles');

// links
const GITHUB_LINK = 'https://github.com/kieranroneill';
const HOME_LINK = 'https://kieranoneill.com';
const LINKEDIN_LINK = 'https://www.linkedin.com/in/kieranroneill/';
const X_LINK = 'https://x.com/magnetartare';

// application
const TAGLINE = 'Working towards a Web3 life - currently at Web2.8762356...';
const TITLE = `Kieran O'Neill`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  baseUrl: '/',
  deploymentBranch: 'gh-pages',
  favicon: 'images/favicon.ico',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',
  organizationName: 'kieranroneill',
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: false,
        theme: {
          customCss: [
            require.resolve(path.resolve(STYLES_DIR, 'footer.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'global.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'functions.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'mixins.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'navbar.scss')),
            require.resolve(path.resolve(STYLES_DIR, 'variables.scss')),
          ],
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      }),
    ],
  ],
  projectName: 'kieranoneill.com',
  staticDirectories: [STATIC_DIR],
  tagline: TAGLINE,
  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Orbitron:wght@400;600;700&display=swap',
      },
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      image: 'images/social_card.png',
      metadata: [
        {
          name: 'keywords',
          content:
            'software engineer, programming, blockchain, cryptocurrency, freediving, running',
        },
      ],
      navbar: {
        style: 'dark',
      },
      footer: {
        copyright: `
<div class="footer__copyright-container">
    <p class="footer__text">Developed with ❤️ by Kieran O'Neill.</p>
    <p class="footer__text">v${version}</p>
</div>
        `,
        logo: {
          alt: `Kieran O'Neill's avatar`,
          height: '50px',
          src: '/images/avatar-128x128.png',
        },
        links: [
          {
            title: 'Social',
            items: [
              {
                html: `
<div class="footer__icon-container">
  <a class="footer__icon-link" href="${GITHUB_LINK}" target="_blank">
    <svg
      viewBox="0 0 98 96"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" />
    </svg>
  </a>
  <a class="footer__icon-link" href="${X_LINK}" target="_blank">
    <svg
      viewBox="0 0 1200 1227"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  </a>
  <a class="footer__icon-link" href="${LINKEDIN_LINK}" target="_blank">
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" />
    </svg>
  </a>
</div>
                `,
              },
            ],
          },
        ],
        style: 'dark',
      },
      prism: {
        additionalLanguages: ['bash', 'json'],
        darkTheme: themes.dracula,
        theme: themes.github,
      },
    }),
  title: TITLE,
  trailingSlash: false,
  url: HOME_LINK,
};

module.exports = config;
