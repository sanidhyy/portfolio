<a name="readme-top"></a>

# A Modern UI/UX Portfolio using Next.JS

![A Modern UI/UX Portfolio using Next.JS](/.github/images/img_main.png "A Modern UI/UX Portfolio using Next.JS")

[![Ask Me Anything!](https://flat.badgen.net/static/Ask%20me/anything?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy "Ask Me Anything!")
[![GitHub license](https://flat.badgen.net/github/license/sanidhyy/portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/blob/main/LICENSE "GitHub license")
[![Maintenance](https://flat.badgen.net/static/Maintained/yes?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/commits/main "Maintenance")
[![GitHub branches](https://flat.badgen.net/github/branches/sanidhyy/portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/branches "GitHub branches")
[![Github commits](https://flat.badgen.net/github/commits/sanidhyy/portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/commits "Github commits")
[![GitHub issues](https://flat.badgen.net/github/issues/sanidhyy/portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/issues "GitHub issues")
[![GitHub pull requests](https://flat.badgen.net/github/prs/sanidhyy/portfolio?icon=github&color=black&scale=1.01)](https://github.com/sanidhyy/portfolio/pulls "GitHub pull requests")
[![Vercel status](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://www.sanidhy.me/ "Vercel status")

<!-- Table of Contents -->
<details>

<summary>

# :notebook_with_decorative_cover: Table of Contents

</summary>

- [Folder Structure](#bangbang-folder-structure)
- [Getting Started](#toolbox-getting-started)
- [Screenshots](#camera-screenshots)
- [Tech Stack](#gear-tech-stack)
- [Stats](#wrench-stats)
- [Contribute](#raised_hands-contribute)
- [Acknowledgements](#gem-acknowledgements)
- [Buy Me a Coffee](#coffee-buy-me-a-coffee)
- [Follow Me](#rocket-follow-me)
- [Learn More](#books-learn-more)
- [Deploy on Vercel](#page_with_curl-deploy-on-vercel)
- [Give A Star](#star-give-a-star)
- [Star History](#star2-star-history)
- [Give A Star](#star-give-a-star)

</details>

## :bangbang: Folder Structure

Here is the folder structure of My Portfolio.

<!--- FOLDER_STRUCTURE_START --->
```bash
portfolio/
  |- app/
    |-- apple-icon.png
    |-- favicon.ico
    |-- globals.css
    |-- layout.tsx
    |-- manifest.json
    |-- page.tsx
  |- cache/
    |-- config.json
  |- components/
    |-- about.tsx
    |-- contact.tsx
    |-- experience.tsx
    |-- footer.tsx
    |-- header.tsx
    |-- index.ts
    |-- intro.tsx
    |-- projects.tsx
    |-- section-divider.tsx
    |-- section-heading.tsx
    |-- skills.tsx
    |-- theme-switch.tsx
  |- constants/
    |-- index.ts
  |- context/
    |-- active-section-context.tsx
    |-- theme-context.tsx
  |- lib/
    |-- hooks.ts
    |-- types.ts
  |- public/
  |- .env.example
  |- .env/.env.local
  |- .eslintrc.json
  |- .gitignore
  |- bun.lock
  |- environment.d.ts
  |- eslint.config.mjs
  |- next.config.ts
  |- package.json
  |- postcss.config.js
  |- tailwind.config.js
  |- tsconfig.json
  |- vercel.ts
```
<!--- FOLDER_STRUCTURE_END --->

<br />

## :toolbox: Getting Started

1. Make sure **Git** and **NodeJS** is installed.
2. Clone this repository to your local computer.
3. Create `.env.local` file in root folder.
4. Contents of `.env.local`:

```env
# .env.local

# disabled next.js telemetry
NEXT_TELEMETRY_DISABLED=1

# email.js id and key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=XXXXXXXXXXXXXXX

# google verification key (optional) - used for domain verification on https://search.google.com/search-console
NEXT_PUBLIC_GOOGLE_VERIFICATION_KEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

```

5. Create new account in [EmailJS](https://www.emailjs.com/ "EmailJS").

6. From dashboard, choose Email Services > Add New Service and connect your mail to emailjs.

7. Once new service is configured, copy your **Service ID** to `NEXT_PUBLIC_EMAILJS_SERVICE_ID`.

8. Now, go to Email Templates > Create New Template to create your mail template. Once it is done, you can copy **Template ID** to `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`.

9. To get your **Public Key**, click on your username on navbar and go to account settings > Copy Public Key to `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`.

10. Open terminal in root directory. Run `npm install --legacy-peer-deps` or `yarn install --legacy-peer-deps`.

![Copy Public Key](/.github/images/step_emailjs.png "Copy Public Key")

11. Now app is fully configured :+1: and you can start using this app using `npm run dev` or `yarn dev`.

**NOTE:** Ensure you don't share these keys publicly.

## :camera: Screenshots:

![Modern UI/UX using Tailwind CSS](/.github/images/img1.png "Modern UI/UX using Tailwind CSS")

![Showcase Projects](/.github/images/img2.png "Showcase Projects")

![Tell about your Experiences](/.github/images/img3.png "Tell about your Experiences")

![Working Contact Form](/.github/images/img4.png "Working Contact Form")

## :gear: Tech Stack

[![React JS](https://skillicons.dev/icons?i=react "React JS")](https://react.dev/ "React JS") [![Next JS](https://skillicons.dev/icons?i=next "Next JS")](https://nextjs.org/ "Next JS") [![Typescript](https://skillicons.dev/icons?i=ts "Typescript")](https://www.typescriptlang.org/ "Typescript") [![Tailwind CSS](https://skillicons.dev/icons?i=tailwind "Tailwind CSS")](https://tailwindcss.com/ "Tailwind CSS") [![Vercel](https://skillicons.dev/icons?i=vercel "Vercel")](https://vercel.app/ "Vercel")

## :wrench: Stats

[![Stats for My portfolio](/.github/images/stats.svg "Stats for My portfolio")](https://pagespeed.web.dev/analysis?url=https://www.sanidhy.me/ "Stats for My portfolio")

## :raised_hands: Contribute

You might encounter some bugs while using this app. You are more than welcome to contribute. Just submit changes via pull request and I will review them before merging. Make sure you follow community guidelines.

## :gem: Acknowledgements

Useful resources and libraries that are used in My Portfolio

<!--- DEPENDENCIES_START --->
- [@emailjs/browser](https://www.npmjs.com/package/@emailjs/browser): ^4.4.1
- [@eslint/eslintrc](https://www.npmjs.com/package/@eslint/eslintrc): ^3.3.4
- [@eslint/js](https://www.npmjs.com/package/@eslint/js): ^10.0.1
- [@types/node](https://www.npmjs.com/package/@types/node): 25.3.0
- [@types/react](https://www.npmjs.com/package/@types/react): 19.2.14
- [@types/react-dom](https://www.npmjs.com/package/@types/react-dom): 19.2.3
- [@types/react-google-recaptcha](https://www.npmjs.com/package/@types/react-google-recaptcha): ^2.1.9
- [@types/react-vertical-timeline-component](https://www.npmjs.com/package/@types/react-vertical-timeline-component): ^3.3.6
- [@vercel/analytics](https://www.npmjs.com/package/@vercel/analytics): ^1.6.1
- [@vercel/config](https://www.npmjs.com/package/@vercel/config): ^0.0.33
- [@vercel/speed-insights](https://www.npmjs.com/package/@vercel/speed-insights): ^1.3.1
- [autoprefixer](https://www.npmjs.com/package/autoprefixer): 10.4.24
- [baseline-browser-mapping](https://www.npmjs.com/package/baseline-browser-mapping): ^2.10.0
- [clsx](https://www.npmjs.com/package/clsx): ^2.1.1
- [eslint](https://www.npmjs.com/package/eslint): 10.0.1
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next): 16.1.6
- [framer-motion](https://www.npmjs.com/package/framer-motion): ^12.34.0
- [next](https://www.npmjs.com/package/next): 16.1.6
- [postcss](https://www.npmjs.com/package/postcss): 8.5.6
- [react](https://www.npmjs.com/package/react): 19.2.4
- [react-dom](https://www.npmjs.com/package/react-dom): 19.2.4
- [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha): ^3.1.0
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast): ^2.6.0
- [react-icons](https://www.npmjs.com/package/react-icons): ^5.5.0
- [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer): ^10.0.3
- [react-vertical-timeline-component](https://www.npmjs.com/package/react-vertical-timeline-component): ^4.0.0
- [tailwindcss](https://www.npmjs.com/package/tailwindcss): 3.3.3
- [typescript](https://www.npmjs.com/package/typescript): 5.9.3

<!--- DEPENDENCIES_END --->

## :coffee: Buy Me a Coffee

[<img src="https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" width="200" />](https://www.buymeacoffee.com/sanidhy "Buy me a Coffee")

## :rocket: Follow Me

[![Follow Me](https://img.shields.io/github/followers/sanidhyy?style=social&label=Follow&maxAge=2592000)](https://github.com/sanidhyy "Follow Me")
[![Tweet about this project](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Fx.com%2F_sanidhyy)](https://x.com/intent/tweet?text=Check+out+this+amazing+app:&url=https%3A%2F%2Fgithub.com%2Fsanidhyy%portfolio "Tweet about this project")

## :books: Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## :page_with_curl: Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## :star: Give A Star

You can also give this repository a star to show more people and they can use this repository.

## :star2: Star History

<a href="https://star-history.com/#sanidhyy/portfolio&Timeline">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=sanidhyy/portfolio&type=Timeline&theme=dark" />
    <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=sanidhyy/portfolio&type=Timeline" />
    <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=sanidhyy/portfolio&type=Timeline" />
  </picture>
</a>

<br />
<p align="right">(<a href="#readme-top">back to top</a>)</p>
