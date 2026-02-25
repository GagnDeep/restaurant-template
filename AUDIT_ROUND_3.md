# Audit & 20 Elite Improvements (Round 3)

This document lists the final round of "Elite" improvements to reach top-tier SaaS quality.

## Visuals & Graphics
1. **Spotlight Card Effect**: Implement a mouse-following radial gradient spotlight on feature cards to add depth and interactivity.
2. **Cinematic Grain Overlay**: Add a subtle, fixed noise texture overlay to the entire site to give it a rich, film-like texture (reduces color banding too).
3. **Animated Gradient Text**: Animate the "Highlighted" text in the Hero (e.g., "Punjab") with a flowing gradient background.
4. **Fluid Typography**: Replace static font sizes with `clamp()` functions to ensure perfect scaling across all device widths.
5. **Glassmorphism Depth**: Enhance cards with double-borders (white + transparent) to simulate physical glass thickness.

## Interaction & UX
6. **Scroll Progress Indicator**: Add a subtle reading progress bar at the very top of the viewport.
7. **Confetti Celebration**: Trigger a confetti explosion when a user successfully subscribes to the newsletter.
8. **Menu Search & Filter**: Add a real-time text search input to the Menu/Feature grid for better usability.
9. **Time-Aware Greetings**: Update the Announcement Bar to say "Good Morning/Afternoon/Evening" based on the user's local time.
10. **Active Link Highlighting**: Visual indication in the Navbar for the currently active section/page.

## Components & Layout
11. **Cookie Consent Banner**: A compliant, config-driven bottom banner for GDPR/Privacy (essential for "production ready").
12. **Parallax Footer Reveal**: Make the footer fixed at the bottom with a lower z-index, so the content scrolls *up* to reveal it.
13. **Skeleton Loading States**: Add a shimmer skeleton for the Hero Graphic to improve perceived load time (LCP).
14. **Global Error Boundary**: Implement a graceful `error.tsx` page to handle crashes without breaking the whole app.
15. **Print Styles**: CSS optimizations for printing the Menu page (hide nav/footer, optimize contrast).

## Accessibility & Reliability
16. **Reduced Motion Support**: Ensure all `framer-motion` animations respect `prefers-reduced-motion: reduce`.
17. **Mobile Menu Focus Trap**: Ensure keyboard focus stays inside the mobile menu when open.
18. **Strict Config Typing**: Define a rigorous TypeScript interface for `SiteConfig` to prevent typos and missing keys.
19. **Interactive 404**: Make the "Empty Plate" graphic interactive (click to "refill") to turn a negative moment into delight.
20. **Self-Correction**: Final sweep to move any remaining hardcoded `aria-labels` or placeholder text to `siteConfig`.
