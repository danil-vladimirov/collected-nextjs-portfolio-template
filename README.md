<p align="center">
<img src="sanity/plugins/collected-logo-black.svg" align="center" height="70" />
</p>
<p align="center">
  <strong>Portfolio template website built on <a href="https://nextjs.org">Next.js</a></strong><br />
  <strong>Headless CMS powered by <a href="https://sanity.io">Sanity.io</a></strong><br />
</p>

<p align="center">
  <a href="https://collected-nextjs-portfolio-template.vercel.app/">
    <img src="https://img.shields.io/static/v1?label=&message=View%20Demo&style=for-the-badge&color=black" />
  </a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#overview">Overview</a> •
  <a href="#-automatic-set-up">Set Up</a> •
  <a href="#local-configuration">Local configuration</a>
</p>
<br />

<br />

Clean and easy to use portfolio website helping visual creators showcase their work. Built with customisation in mind: set `custom colors` for your website, upload `custom logo`, create projects with modular `content builder`, select and order projects that is being displayed at Home page. This template is a statically generated portfolio website that uses [Next.js][nextjs] for the frontend and [Sanity][sanity-homepage] to handle its content.

Deploy this template with [Vercel](https://vercel.com) and start filling your portfolio website right away:

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

# Features

- A performant, static portfolio website with editable `Home page`, `Projects` and optional `About page`
- Clean and frendly content managment environment by [Sanity][sanity-homepage], accessible on `yourwebsite.com/studio`
- Webhook-triggered Incremental Static Revalidation; no need to wait for a rebuild to publish new content
- Side-by-side instant content preview that works across your whole site
- CSS powered by [Tailwind CSS](https://tailwindcss.com)
- Animation powered by [Framer Motion](https://www.framer.com/motion/)
- Built-in customisation features:
  - Set your background and text colors for the whole website
  - Upload your favicon, OG-image
  - Select and order projects that is displayed at Home page
  - Modular page content builder for Project page
  - Dynamic external links display at `Navbar`
  - Upload custom logo to replace wibsite Title at `Navbar`
    <br />

# Overview

| [Portfolio Website](https://template-nextjs-personal-website.sanity.build/) | [Sanity Studio](https://template-nextjs-personal-website.sanity.build/studio) |
| --------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| ![Portfolio Website](https://github.com/user-attachments/assets/39f4c4eb-6836-4977-8c52-480ba1d5029f)
)                                                      | ![Sanity Studio](https://github.com/user-attachments/assets/8db58b28-9044-4f7f-bfc2-aac1bea694f9)
)                                                            |

<br />

# ⚡ Automatic Set Up

Quickly deploy as a Sanity Starter on [Vercel](https://vercel.com) a clean version of a portfolio wesite! All you have to do is start filling it with your content

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

**5-Minute Setup Walkthrough - `Coming Soon`** <br />
From deploy to launch, watch me building up a fresh portfolio website in under 5 minutes!

<br />

# Local configuration

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)][vercel-deploy]

### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your portfolio website should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```

<br />

### Important files and folders

| File(s)                                                    | Description                                             |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| `sanity.config.ts`                                         | Config file for Sanity Studio                           |
| `sanity.cli.ts`                                            | Config file for Sanity CLI                              |
| `/app/studio/[[...tool]]/Studio.tsx`                       | Where Sanity Studio is mounted                          |
| `/app/api/revalidate/route.ts`                             |  Serverless route for triggering ISR                    |
| `/app/api/draft/route.ts`                                  | Serverless route for triggering Draft mode              |
| `/sanity/schemas`                                          | Where Sanity Studio gets its content types from         |
| `/sanity/plugins`                                          | Where the advanced Sanity Studio customization is setup |
| `/sanity/loader/loadQuery.ts`,`/sanity/loader/useQuery.ts` | Configuration for the Sanity Content Lake client        |

<br />

# Shoutouts

Base structure and Sanity fetching logic is based on [template-nextjs-personal-website](https://github.com/sanity-io/template-nextjs-personal-website). This is a great starter template by Sanity which is highly influenced this template.

### Designed and developed

- [@danil-vladimirov](https://github.com/danil-vladimirov)

<br />

# License

### [MIT](LICENSE)

> [danilvladimirov.co.uk](https://danilvladimirov.co.uk) &nbsp;&middot;&nbsp;
> Github [@danil-vladimirov](https://github.com/danil-vladimirov) &nbsp;&middot;&nbsp;
> Instagram [@danilvladimirov](https://instagram.com/danilvladimirov)

[vercel-deploy]: https://vercel.com/
[integration]: https://www.sanity.io/docs/vercel-integration
[nextjs]: https://github.com/vercel/next.js
[sanity-homepage]: https://www.sanity.io
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
