# Highfield House Website

This is the official website for Highfield House Bed & Breakfast in Sheringham, Norfolk.

## Built With

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

Build the static site:

```bash
npm run build
```

The static files will be generated in the `out/` directory.

## Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions when changes are pushed to the `master` branch.

The workflow:
1. Builds the Next.js site as a static export
2. Adds the `.nojekyll` file for GitHub Pages compatibility
3. Copies the `CNAME` file for custom domain support
4. Deploys to GitHub Pages

## GitHub Pages Setup

To enable GitHub Pages deployment:

1. Go to your repository settings
2. Navigate to Pages section
3. Under "Build and deployment":
   - Source: Select "GitHub Actions"
4. The custom domain (www.highfieldsheringham.com) is configured via the CNAME file

## Project Structure

```
├── src/
│   ├── components/     # React components
│   │   └── Layout.tsx  # Main layout component
│   ├── pages/          # Next.js pages
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx
│   │   ├── breakfast.tsx
│   │   ├── prices.tsx
│   │   ├── how-to-find-us.tsx
│   │   ├── contact-us.tsx
│   │   └── 404.tsx
│   └── styles/
│       └── globals.css # Global styles
├── public/             # Static assets
│   ├── images/         # Images
│   └── CNAME           # Custom domain config
├── .github/
│   └── workflows/
│       └── deploy.yml  # GitHub Actions workflow
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind configuration
└── tsconfig.json       # TypeScript configuration
```

## License

ISC
