# SaltGIS

Advanced GIS Software & Location Intelligence

## Overview

SaltGIS is a modern geospatial software platform that transforms location data into actionable insights. Built with Next.js, TypeScript, and Tailwind CSS, it provides a comprehensive solution for organizations needing powerful GIS capabilities.

## Features

- 🗺️ **Interactive Mapping**: MapLibre-powered maps with real-time updates
- 📱 **Responsive Design**: Mobile-first design that works on all devices
- 🎨 **Modern UI**: Beautiful interface built with Tailwind CSS and shadcn/ui
- 📝 **Content Management**: MDX-based content with Contentlayer
- 🚀 **Performance**: Optimized for speed and SEO
- 🔧 **Developer Friendly**: TypeScript, ESLint, and modern tooling

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Maps**: MapLibre GL
- **Content**: MDX via Contentlayer
- **Deployment**: Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd saltgis
```

2. Install dependencies:
```bash
pnpm install
```

3. Run the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
pnpm build
pnpm start
```

## Project Structure

```
saltgis/
├── app/                    # Next.js App Router
│   ├── (marketing)/       # Marketing pages
│   ├── demo/              # Map demo page
│   ├── blog/              # Blog posts
│   └── api/               # API routes
├── components/             # React components
│   ├── ui/                # shadcn/ui components
│   └── site/              # Site-specific components
├── content/                # MDX content files
├── lib/                    # Utility functions
├── public/                 # Static assets
├── styles/                 # Global styles
└── contentlayer.config.ts  # Contentlayer configuration
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.ts`:

- **Primary**: `#118C4F` (Green)
- **Ink**: `#0A1A2F` (Dark Blue)

### Fonts

- **Body**: Inter
- **Headings**: Plus Jakarta Sans

### Adding Content

1. Create new MDX files in the `content/` directory
2. Use the frontmatter format:
```mdx
---
title: "Your Title"
description: "Your description"
date: "2024-01-01"
published: true
tags: ["tag1", "tag2"]
---
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set the framework to Next.js
4. Deploy

### Environment Variables

No environment variables are required for basic functionality.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

For support, please contact us at [contact@saltgis.eu](mailto:contact@saltgis.eu) or visit our website at [https://saltgis.eu](https://saltgis.eu). 