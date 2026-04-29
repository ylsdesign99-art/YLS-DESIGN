# YLS Design - Floral Shop

A modern, responsive flower shop built with Vite + React and Tailwind CSS.

## Features

✨ **Modern Design** - Beautiful UI with custom floral color palette
🛒 **Shopping Cart** - Add/remove flowers with real-time updates
📱 **Responsive** - Works perfectly on desktop, tablet, and mobile
🌸 **Product Showcase** - Beautiful product cards with images and descriptions
📧 **Contact Form** - Easy way for customers to get in touch
⚡ **Fast Performance** - Built with Vite for lightning-fast builds

## Project Structure

```
ylsdesign-floral/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.jsx
│   │   └── CartContext.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── Cart.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── flowers.js
│   ├── context/
│   │   └── CartContext.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── postcss.config.js
```

## Getting Started

### Installation

```bash
cd ylsdesign-floral
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Dependencies

- **React** - UI library
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Next generation frontend tooling

## Features Included

### Pages
- **Home** - Landing page with hero section and features
- **Shop** - Product listing with all flowers
- **Cart** - Shopping cart with checkout
- **Contact** - Contact form and business information

### Components
- **Navbar** - Navigation with cart counter
- **ProductCard** - Reusable flower product card
- **CartContext** - Global state management for shopping cart

## Customization

### Colors

Edit `tailwind.config.js` to customize the floral color palette:

```javascript
floral: {
  50: '#fdf8f6',
  100: '#fbe8e0',
  // ... more colors
}
```

### Flowers Data

Edit `src/data/flowers.js` to add, remove, or modify flowers:

```javascript
export const flowers = [
  {
    id: 1,
    name: "Sunflowers",
    price: 7.99,
    // ... more properties
  },
  // ...
];
```

## License

MIT License - feel free to use this project for your own purposes!
