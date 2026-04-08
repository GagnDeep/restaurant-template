# Top 20 Most Impactful Improvements for Aneja Website

This document outlines the strategic improvements identified to elevate the website to a premium, production-ready SaaS standard.

## Visual Core & Typography
1. **Typography Hierarchy Overhaul**: Enforce `Playfair Display` for all headings (h1-h3) and `Inter` for body text to create a clear, elegant distinction. Currently inconsistent.
2. **Global Scroll Reveal System**: Implement a staggered `FadeIn` animation for all list items (menu, features, testimonials) to add a premium "reveal" effect as users scroll.
3. **Glassmorphic Sticky Navbar**: Enhance the navbar to transition from transparent to a frosted glass effect on scroll, improving readability without blocking content.
4. **Button Micro-interactions**: Add a subtle "shimmer" effect and hover scale to primary CTAs to increase click-through rates.

## Hero & First Impression
5. **Interactive Hero Graphic**: Upgrade the static SVG to react to mouse movement (parallax effect), making the hero section feel alive and premium.
6. **Live Status Indicator**: Move the "Open Now" logic to a prominent, pulsing badge in the Hero or Navbar for immediate utility and trust.

## Menu & Conversion
7. **Filterable Menu Grid**: Add category tabs (e.g., "Starters", "Mains", "Drinks") to the Feature Grid. Users currently see a static list; filtering improves UX significantly.
8. **Infinite Testimonial Marquee**: Replace the standard carousel with a continuous, smooth-scrolling marquee to showcase social proof more dynamically.
9. **Enhanced Pricing Cards**: Add a "Most Popular" ribbon and a hover "lift" effect to pricing cards to guide users toward the preferred choice.
10. **Comparison Table Visuals**: Replace text-based "Yes/No" with colored Check (Green) and X (Red) icons for instant visual comprehension.

## Graphics & Polish
11. **Section Separators**: Add curved or slanted SVG dividers between sections to break up the "blocky" layout and create a smoother flow.
12. **Abstract Map Graphic**: Create a custom SVG map for the Contact section (since we lack an API key) to provide visual context without broken iframes.
13. **Newsletter Pattern Background**: Add a subtle food-themed pattern (opacity 5%) to the Newsletter section to make it pop visually.
14. **Custom 404 "Empty Plate" Graphic**: Create a playful, on-brand 404 page with an "Empty Plate" SVG to turn a negative error into a positive brand touchpoint.

## SEO & Technical
15. **Structured Data (JSON-LD)**: Inject `Restaurant` schema markup into the `layout.tsx` (config-driven) to improve local SEO visibility.
16. **Config-Driven Metadata**: Expand `site.ts` to include `keywords`, `authors`, and page-specific `openGraph` data for better sharing.
17. **Strict Config Compliance**: Move all remaining hardcoded UI labels (e.g., "Popular", "Best Choice") to `site.ts` to ensure 100% configurability.

## User Experience (UX)
18. **FAQ Accordion Polish**: Add smooth open/close animations and clear +/- icons to the FAQ section for better interactivity.
19. **Mobile Navigation Refinement**: Improve the mobile menu animation and touch target sizes for better usability on small screens.
20. **Scroll-To-Top Enhancement**: Ensure the scroll-to-top button appears smoothly and only after passing the hero section.
