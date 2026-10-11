# NovaTech — Software Development Company Website

A responsive multi-page website built with semantic HTML5, custom CSS, JavaScript and Bootstrap 5.3.

## Pages and features
- `index.html` — home page, hero, services preview, selected projects, CTA, current date/time.
- `services.html` — service listing cards.
- `service-detail.html?id=web|mobile|cloud` — service detail page with full description, features, process and related services.
- `projects.html` — portfolio with left-side category filters, project cards, sorting and pagination.
- `project-detail.html?id=coursehub|flowpay|shopwise|carepoint|insightiq|freshbites` — project gallery, click-to-zoom image modal, project metadata and related projects.
- `about.html` — mission, vision, values, team cards, social links and careers/apply links.
- `contact.html` — validated contact form, confirmation modal, direct contact details and Google Maps embed.

## Run locally
1. Extract the ZIP.
2. Open the folder in VS Code.
3. Recommended: run with the **Live Server** extension, or use Laragon and place the folder inside `www`.
4. Open `index.html` in a browser.

Bootstrap, Bootstrap Icons and Google Fonts are loaded from CDNs, so an internet connection is required for those assets.

## Before production
- Replace the sample company details, team names, portfolio content, contact details and map location with real information.
- Connect the contact form to a backend/API and email service. It currently validates the form and shows a confirmation modal; it does not transmit messages.
- Replace placeholder social links with actual profile URLs.
- Use real, licensed project photos/screenshots if required.
