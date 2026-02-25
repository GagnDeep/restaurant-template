# Audit & 20 High-Impact Improvements

This document lists the second round of deep improvements to reach elite SaaS quality.

## Interactions & Animation
1. **Page Transitions**: Implement a `template.tsx` with Framer Motion to smooth out navigation between pages (fade/slide).
   - *Why*: Adds an app-like feel and reduces the jarring "hard refresh" effect.
2. **Magnetic CTA Buttons**: Wrap primary buttons in a "Magnetic" component that attracts the cursor slightly.
   - *Why*: A signature premium detail found in high-end award-winning sites.
3. **Scroll-Draw Timeline**: Animate the connecting line in the "How It Works" section to draw itself as the user scrolls down.
   - *Why*: Guides the eye and rewards scrolling.
4. **Staggered Mobile Menu**: Animate mobile menu links to slide in one by one.
   - *Why*: Makes the mobile experience feel as polished as desktop.
5. **Newsletter Success Interaction**: Add a "Subscribed!" success state to the newsletter form.
   - *Why*: Provides immediate feedback and delight.

## Visual Polish & Graphics
6. **Custom Scrollbar**: Style the window scrollbar to match the brand (Primary color thumb, thin track).
   - *Why*: Consistent branding even in browser UI elements.
7. **Brand Selection Color**: Change text selection color (`::selection`) to Brand Primary with White text.
   - *Why*: Subtle detail that reinforces brand identity.
8. **Rich Card Patterns**: Add varied SVG background patterns (dots, waves, lines) to Feature/Menu cards based on category.
   - *Why*: Reduces the "wall of text" feel and adds visual variety.
9. **Focus Ring Customization**: Replace default browser focus rings with a custom Brand Primary ring.
   - *Why*: Accessibility meets branding.
10. **"Chef's Choice" Highlight**: Visually emphasize specific menu items (defined in config) with a "Golden Border" or badge.
    - *Why*: guiding user choice increases conversion.

## Architecture & Config
11. **Unified Icon System**: Refactor the manual `switch` statements for icons into a dynamic `Icon` component that maps config strings to Lucide icons.
    - *Why*: Reduces boilerplate and makes adding new icons via config instant.
12. **Strict Config Typing**: Define a TypeScript interface for `SiteConfig` to ensure type safety.
    - *Why*: Prevents runtime crashes if a config key is typo'd.
13. **Config-Driven Breadcrumbs**: Inject BreadcrumbList JSON-LD schema into pages.
    - *Why*: Improves SEO and search result appearance.

## Content & Layout
14. **Prose Styling for Legal**: Use `prose` (typography plugin equivalent styles) for Privacy/Terms pages.
    - *Why*: significantly improves readability of long text blocks.
15. **About Page Timeline**: Replace static text with a visual vertical timeline component.
    - *Why*: Tells the brand story more engagingly.
16. **Skip-to-Content Link**: Add an invisible accessible link to skip navigation.
    - *Why*: Critical accessibility requirement for screen readers/keyboard users.
17. **Footer "Back to Top"**: Add a dedicated "Back to Top" link in the footer (config-driven).
    - *Why*: UX convenience for footer-browsers.

## Performance & SEO
18. **`will-change` Optimization**: Apply `will-change: transform` to the Hero Graphic and Marquee.
    - *Why*: Prevents layout thrashing and ensures 60fps animations.
19. **Dynamic Meta Tags**: Ensure every page (even those sharing layout) has unique titles/descriptions generated from config.
    - *Why*: Critical for avoiding duplicate content penalties.
20. **Self-Correction of Hardcoded Strings**: A final sweep to catch any remaining strings missed in the first pass (e.g. aria-labels).
    - *Why*: 100% compliance.
