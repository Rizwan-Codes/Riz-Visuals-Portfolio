# Riz Visuals

A personal portfolio website for **Rizwan Ali**, a graphic designer, showcasing work across logo design, branding, posters, thumbnails and social media posts.

Built with React, Vite and Tailwind CSS, with a dark theme, an orange accent and smooth scroll animations.

<!-- TODO: add a live demo link and screenshots once deployed
**Live demo:** https://your-site-url.com
![Home page](./docs/home.png)
-->

---

## Features

- **Home page** with a hero section and a preview of each work category
- **Five dedicated category pages**, each with its own layout:
  - **Logo Design:** colour and black/white versions, side by side in a lightbox
  - **Social Posts:** portrait gallery with full-size viewer
  - **Thumbnails:** 16:9 gallery
  - **Posters:** portrait gallery with centred last row
  - **Branding:** full case study (logo system, colour palette with click-to-copy hex codes, brand mockups)
- **About page** covering story, services, process, tools and background
- **Contact page** with a working form (Formspree, with a `mailto:` fallback), WhatsApp link and social links
- **Image lightbox** with keyboard support (Esc, left/right arrows) and body-scroll lock
- **Active navbar link** highlighted with an animated sliding underline
- **Context-aware footer** that hides its call-to-action on the Contact page
- **Fully responsive** from mobile to desktop
- **Scroll-triggered animations** using Motion

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | [React 19](https://react.dev) |
| Build tool | [Vite](https://vite.dev) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) |
| Routing | [React Router v7](https://reactrouter.com) |
| Animation | [Motion](https://motion.dev) (Framer Motion) |
| Icons | [Remix Icon](https://remixicon.com) (UI), [Devicon](https://devicon.dev) (tool logos) |
| Fonts | Karla, Instrument Serif |
| Linting | [Oxlint](https://oxc.rs) |
| Form handling | [Formspree](https://formspree.io) |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) (a current LTS version)
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/<your-repo>.git
cd riz-visuals

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The site will be available at the URL printed in the terminal (usually `http://localhost:5173`).

### Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimised production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Lint the project with Oxlint |

## Project Structure

```text
riz-visuals/
├── public/
│   └── images/
│       ├── Logos/          # Logo projects (colour + BW versions)
│       ├── Posts/          # Social media posts
│       ├── Thumbnails/     # Video thumbnails
│       ├── Posters/        # Posters
│       ├── Brandings/      # Brand identity case study
│       ├── tools/          # Illustrator, Photoshop and Figma logos (SVG)
│       ├── Dp.png          # Profile photo
│       └── Logo.png        # Riz Visuals logo
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Navbar + page outlet + footer
│   │   ├── header.jsx          # Navbar
│   │   ├── Footer.jsx
│   │   ├── Home.jsx            # Home page
│   │   ├── Hero.jsx
│   │   ├── workseperate.jsx    # Work section wrapper on Home
│   │   ├── LogosSec.jsx        # Home preview sections
│   │   ├── SocialPosts.jsx
│   │   ├── Thumbnails.jsx
│   │   ├── Posters.jsx
│   │   ├── Brandings.jsx
|   |── Pages/
│   │   ├── About.jsx           # About page
│   │   ├── Contact.jsx         # Contact page
│   │   ├── Logos.jsx           # Category pages
│   │   ├── Posts.jsx
│   │   ├── ThumbnailsPage.jsx
│   │   ├── PostersPage.jsx
│   │   └── BrandingPage.jsx
│   ├── App.jsx             # Routes
│   ├── main.jsx
│   └── index.css           # Theme tokens and fonts
├── index.html
└── vite.config.js
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home (Work) |
| `/About` | About |
| `/Contact` | Contact |
| `/Logos` | Logo Design |
| `/Posts` | Social Media Posts |
| `/Thumbnails` | Thumbnails |
| `/Posters` | Posters |
| `/Branding` | Branding |

## Customisation

### Theme

Colours and fonts are defined as theme tokens in `src/index.css`. Change the accent colour (`secondary`) there and the whole site updates.

### Adding work

Each category page keeps its content in a simple array at the top of the file. Adding a piece of work takes one line, and the grid, numbering and lightbox update automatically.

```jsx
// src/components/Posters.jsx → PostersPage.jsx
const posters = [
    "/images/Posters/poster-1.jpeg",
    "/images/Posters/poster-6.png", // new
];
```

Place the image in the matching folder under `public/images/`.

### Contact form

The form is configured at the top of `src/components/Contact.jsx`:

```jsx
const EMAIL = "you@example.com";
const WHATSAPP = "923001234567";   // international format, no "+" or spaces
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxxx";
```

1. Create a free form at [formspree.io](https://formspree.io) and copy its endpoint.
2. Paste it into `FORM_ENDPOINT`.
3. Send a test message and check your inbox.

If `FORM_ENDPOINT` is left empty, the form falls back to opening the visitor's email app.

## Deployment

The project is a static single-page app, so it can be hosted on any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).

```bash
npm run build   # outputs to dist/
```

Because the site uses client-side routing, the host must serve `index.html` for every path. Without this, opening `/About` directly returns a 404.

**Vercel** (`vercel.json`):

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

**Netlify** (`public/_redirects`):

```text
/*  /index.html  200
```

## Roadmap

- [ ] Scroll-to-top on route change
- [ ] Individual project detail pages
- [ ] SEO metadata (title, description, Open Graph image) per page
- [ ] Image optimisation (WebP) for faster loading

## License and Credits

All design work, images and written content in this repository are © Rizwan Ali. All rights reserved. Please do not reuse the designs without permission.

Tool logos for Adobe Illustrator, Adobe Photoshop and Figma are trademarks of their respective owners and are used only to show the software used. They are provided via [Devicon](https://devicon.dev) (MIT).

## Contact

**Rizwan Ali**, graphic designer and frontend developer

- Email: rizsvisuals@gmail.com
- GitHub: [@Rizwan-Codes](https://github.com/Rizwan-Codes)
- Portfolio: https://riz-visuals-portfolio.vercel.app/