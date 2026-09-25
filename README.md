# AI Hub

A curated AI tools directory built with Next.js, React, TypeScript, and Tailwind CSS.

## Requirements

- Node.js 18.17 or newer
- npm

## Run locally

Clone the repository and enter the project folder:

```bash
git clone https://github.com/Chunporo/AI_Hub.git
cd AI_Hub
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

On Windows PowerShell, if `npm` is blocked by the execution policy, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Production build

Create an optimized production build:

```bash
npm run build
```

Start the production server:

```bash
npm run start
```

## Project structure

```text
app/
  globals.css       Global styles and Tailwind layers
  layout.tsx        Root layout and metadata
  page.tsx          AI Hub page and interactions
public/              Static assets
tailwind.config.ts   Tailwind configuration
package.json         Scripts and dependencies
```

## Current features

- Responsive AI tool directory
- Search tools by name, description, or tag
- Filter by category
- Sort by featured, rating, or name
- Recommend-a-tool modal with success state
- Keyboard-friendly controls and visible focus states

The current tool list is local sample data in `app/page.tsx`. A database or API can be connected later for persistent tools and recommendations.
