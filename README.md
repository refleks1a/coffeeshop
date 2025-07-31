# Schoolhouse Grounds Coffee Shop Website

A beautiful, responsive single-page website for "Schoolhouse Grounds" coffee shop, designed with a warm, earthy aesthetic and full accessibility compliance.

## Features

### Design & Aesthetics

- **Warm, Earthy Color Palette**: Browns, creams, and muted oranges that evoke a cozy café atmosphere
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Typography**: Combination of Playfair Display (serif) and Source Sans Pro (sans-serif) fonts
- **Smooth Animations**: Subtle hover effects and scroll-triggered animations
- **High-Quality Images**: Beautiful coffee shop imagery from Unsplash

### Sections

1. **Hero Section**: Full-screen banner with shop name, tagline, and call-to-action
2. **About/Our Story**: Two-column layout with company story and interior photo
3. **Menu**: Three-category showcase (Coffee, Bakery, Sandwiches) with appetizing images
4. **Newsletter Signup**: Email subscription form with demo functionality
5. **Location & Hours**: Contact information, business hours, and location map
6. **Footer**: Contact details and social media links

### Accessibility Features

- **WCAG 4.5:1 Color Contrast**: High contrast text for readability
- **Keyboard Navigation**: Full keyboard accessibility with focus indicators
- **Screen Reader Support**: Proper ARIA labels and semantic HTML
- **Skip Links**: "Skip to main content" link for keyboard users
- **Focus Management**: Proper focus trapping for mobile menu
- **Reduced Motion Support**: Respects user's motion preferences
- **High Contrast Mode**: Supports system high contrast settings

### Technical Features

- **Mobile-First Design**: Responsive breakpoints for all screen sizes
- **Smooth Scrolling**: JavaScript-powered smooth scrolling between sections
- **Active Link Highlighting**: Navigation links highlight based on current section
- **Mobile Navigation**: Hamburger menu for mobile devices
- **Lazy Loading**: Images load as they come into view
- **Form Validation**: Basic email validation for newsletter signup
- **Performance Optimized**: Efficient CSS and minimal JavaScript

## File Structure

```
coffeeshop/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## Color Palette

- **Primary Brown**: #8B4513 (Saddle Brown)
- **Secondary Brown**: #A0522D (Sienna)
- **Light Brown**: #DEB887 (Burlywood)
- **Cream**: #F5F5DC (Beige)
- **Warm White**: #FAFAF0 (Floral White)
- **Dark Brown**: #654321 (Dark Brown)
- **Accent Orange**: #D2691E (Chocolate)
- **Muted Green**: #6B8E23 (Olive Drab)

## Typography

- **Headings**: Playfair Display (serif) - elegant and sophisticated
- **Body Text**: Source Sans Pro (sans-serif) - clean and readable
- **Font Sizes**: Minimum 16px for body text, larger for headings
- **Line Height**: 1.6 for optimal readability

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Getting Started

1. Clone or download the project files
2. Open `index.html` in a web browser
3. The website is ready to use - no build process required

## Customization

### Adding Your Logo

Replace the text logo in the header with your actual logo image:

```html
<div class="logo">
  <a href="#home">
    <img src="path/to/your/logo.png" alt="Schoolhouse Grounds Logo" />
  </a>
</div>
```

### Updating Content

- Edit the HTML file to update text content, addresses, and contact information
- Replace image URLs with your own photos
- Update business hours and menu items

### Color Customization

Modify the CSS variables in `styles.css` to change the color scheme:

```css
:root {
  --primary-brown: #your-color;
  --accent-orange: #your-accent-color;
  /* ... other colors */
}
```

## Performance Notes

- Images are optimized and lazy-loaded for better performance
- CSS uses efficient selectors and minimal nesting
- JavaScript is lightweight and non-blocking
- Fonts are loaded from Google Fonts CDN for optimal delivery

## Accessibility Compliance

- WCAG 2.1 AA compliant
- Proper heading hierarchy (h1, h2, h3)
- Alt text for all images
- Keyboard navigation support
- Focus indicators on all interactive elements
- Semantic HTML structure

## Future Enhancements

- Add actual logo integration
- Implement real newsletter functionality
- Add Google Maps integration
- Include online ordering system
- Add blog/news section
- Implement analytics tracking

## License

This project is created for demonstration purposes. Feel free to use and modify for your own coffee shop website.
