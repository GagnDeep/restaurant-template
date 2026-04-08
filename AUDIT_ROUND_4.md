# Audit & 20 Production Hardening Improvements (Round 4)

This document lists the final "Production Hardening" improvements to ensure the site is elite, installable, and robust.

## SEO & Discoverability
1. **Dynamic Sitemap**: Auto-generate `sitemap.xml` for all routes to ensure Google indexes everything.
2. **Robots.txt Control**: Explicitly define `robots.txt` to guide crawlers and point to the sitemap.
3. **PWA Manifest**: enable "Add to Home Screen" with a valid `manifest.json`.
4. **Dynamic Open Graph Images**: Generate OG images on the fly using `ImageResponse` for perfect social sharing cards.
5. **Detailed Schema.org**: Add `Menu` and detailed `OpeningHoursSpecification` schema for local SEO dominance.

## Interactions & UX
6. **Toast Notification System**: Replace generic alerts with `sonner` for beautiful, stackable toasts (Copy success, Form success).
7. **"Click-to-Copy" Contact Info**: Make phone numbers and addresses copyable with a single tap, providing immediate feedback.
8. **Keyboard Shortcuts (Cmd+K)**: Power-user shortcut to instantly focus the Menu Search bar.
9. **ScrollSpy Navigation**: Highlight the active section in the Navbar as the user scrolls down the landing page.
10. **Circular Scroll Progress**: Upgrade the "Back to Top" button to include a circular progress indicator.

## Forms & Reliability
11. **Zod Validation**: Robust client-side validation for emails and messages to prevent bad data.
12. **Honeypot Spam Protection**: Invisible form fields to trap bots without annoying captchas.
13. **Phone Input Masking**: Auto-format phone numbers as users type for better data quality.
14. **Form Success States**: dedicated visual states (checkmarks, confetti) replacing the form upon success.

## Visual Polish
15. **Animated Theme Toggle**: Smooth morphing/rotating animation when switching between Light and Dark modes.
16. **Magnetic Navigation Links**: Apply the magnetic cursor effect to main navigation items for a premium feel.
17. **Print-Ready Menu**: CSS `@media print` styles specifically for the Menu section to allow customers to print a clean physical menu.
18. **Staggered List Animations**: Ensure all lists (Benefits, Features) cascade in smoothly.
19. **Address Map Linking**: Ensure the visual map or address text opens the native maps app on mobile.
20. **Self-Correction**: Final consolidation of types and removal of any remaining lint warnings.
