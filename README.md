# Global India Tours & Travels – React App

A modern, SEO-friendly, and animated travel website built with React, Tailwind CSS, Framer Motion, and Web3Forms for contact.

## Features

- **Responsive Design:** Fully mobile-friendly and adapts to all screen sizes.
- **Animated UI:** Advanced CSS and Framer Motion animations for smooth user experience.
- **SEO Optimized:** Semantic HTML, schema.org microdata, meta tags, and React Helmet for better search engine ranking.
- **Accessible:** Proper labels, ARIA attributes, descriptive link text, and keyboard navigation.
- **Contact Form:** Integrated with [Web3Forms](https://web3forms.com/) for secure, serverless form submissions.
- **React Toast Notifications:** User feedback for form submission status.
- **Fixed Navbar:** With automatic content offset to prevent overlap.
- **Car Collection Page:** Animated, accessible, and SEO-friendly car showcase.
- **Testimonials:** Video and text testimonials with accessible iframes and headings.
- **Footer:** SEO-friendly with structured data, descriptive links, and contact info.
- **Lighthouse Optimized:** Passes accessibility, contrast, and heading order checks.

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn

### Installation

```bash
git clone https://github.com/arvindrao120/GlobalTour.git
cd GlobalTour
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev

npm start
# or
yarn start
```

The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
  ├── assets/                # Images, videos, and static assets
  ├── Components/            # Reusable components (Navbar, Footer, SocialMedia, etc.)
  ├── pages/                 # Main pages (Home, ShowCar, Testimonials, FooterPages, etc.)
  ├── App.jsx
  └── main.jsx
public/
  ├── robots.txt             # SEO robots file
  └── index.html             # Main HTML file with meta tags
```

## Customization

- **Web3Forms Access Key:**  
  Replace the `access_key` in `ContactForm.jsx` with your own from [Web3Forms Dashboard](https://web3forms.com/).

- **Car Data:**  
  Update the car data array in `ShowCar.jsx` with your actual car details and images.

- **Branding:**  
  Replace logo and images in the `assets/` folder.

- **Meta Tags & SEO:**  
  Update meta tags and canonical URLs in each page (using React Helmet) for your domain.

## SEO & Accessibility Tips

- Use descriptive link text or `aria-label` for all navigation and action links.
- Use semantic headings in sequential order (no skipping levels).
- Use `alt` text for all images and `title` for iframes.
- Ensure sufficient color contrast for all text and backgrounds.
- Use `<img>` for above-the-fold hero images for better LCP.
- Use `loading="lazy"` only for below-the-fold images.

## Animations

- **Framer Motion** is used for page and element transitions.
- **Custom CSS keyframes** for advanced form and input animations.
- **React Toastify** for user notifications.

## License

MIT

## 👥 Contributors
- Arvind