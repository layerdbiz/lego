# L.E.G.O - Benjamin Rodriguez Campaign Website

A modern campaign website built with Vite, Tailwind CSS v4, and vanilla JavaScript for Benjamin Rodriguez's Texas Realtors Secretary/Treasurer campaign.

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 20 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd lego
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```
   
   Or with npm:
   ```bash
   npm install
   ```

## 🛠️ Development

### Start Development Server

Run the development server with hot reload:

```bash
pnpm dev
```

Or with npm:
```bash
npm run dev
```

This will:
- Start the Vite development server
- Automatically open your browser to the local development URL
- Enable hot module replacement for instant updates
- Make the server accessible on your local network (--host flag)

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production |
| `pnpm preview` | Preview production build locally |

## 🏗️ Building for Production

Create an optimized production build:

```bash
pnpm build
```

The built files will be generated in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
pnpm preview
```

## 📁 Project Structure

```
├── index.html          # Main HTML file
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── main.js         # Main JavaScript entry point
│   ├── style.css       # Main stylesheet (with Tailwind CSS)
│   └── components/     # JavaScript components
│       ├── form.js     # Contact form functionality
│       ├── nav.js      # Navigation functionality
│       └── year.js     # Year display component
└── static/             # Static assets (images, videos, etc.)
    ├── *.png           # Campaign images and logos
    ├── video.mp4       # Campaign video
    └── favicon.png     # Site favicon
```

## 🎨 Tech Stack

- **⚡ Vite** - Fast build tool and development server
- **🎨 Tailwind CSS v4** - Utility-first CSS framework
- **📱 Vanilla JavaScript** - No framework dependencies
- **🖼️ Static Assets** - Images, videos, and other media

## 🌐 Deployment

This project is configured for easy deployment to platforms like:
- Vercel
- Netlify
- GitHub Pages
- Any static hosting service

Simply run `pnpm build` and deploy the contents of the `dist/` directory.

## 📝 Notes

- The project uses Tailwind CSS v4 with the new Vite plugin
- Static assets are served from the `static/` directory
- The development server automatically opens in your browser
- Hot reload is enabled for a smooth development experience