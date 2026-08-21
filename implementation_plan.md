# Redesign Menu Dashboard

This plan outlines the redesign of the menu page to match the dark-themed premium dashboard mockup.

## Goal Description
Transform `menu.html` into a full-page, dark-themed dashboard application. The new layout will feature a fixed left sidebar for navigation and a main content area that initially displays a beautiful grid of category cards (like the mockup), which then drills down into specific items.

## Proposed Changes

### `menu.html` (HTML Restructuring)
- **Remove** the standard top navbar and footer from `menu.html` to make it a standalone dashboard app.
- **Sidebar**:
  - Add the SAS Cafeteria logo at the top.
  - Add an "All Items" tab followed by the 8 category tabs.
  - Add the contact info (Phone, Instagram, Address) at the bottom.
- **Main Content**:
  - Create a top header section with "OUR MENU - Cravings Start Here".
  - Create an "All Items" panel containing a 4x2 CSS grid of category cards. Each card will have an image, title, subtitle, and "View Items ->" button.
  - Retain the existing detailed item lists but style them to fit the dark theme and show them when a category is selected.

### `style.css` (Dark Theme & Layout)
- Introduce a dark color palette specifically for `.menu-dashboard-dark` (e.g., `#0a0a0a` background, `#1a1a1a` cards, `#d4af37` gold accents).
- Style the category cards to look premium with subtle borders and hover scaling.
- Style the sidebar to match the mockup (dark grey, gold active state, bottom contact info).

### `script.js` (Dashboard Logic)
- Update the tab switching logic:
  - Clicking "All Items" shows the grid of category cards.
  - Clicking a category tab in the sidebar (or a "View Items" button on a card) hides the grid and shows the specific items for that category.

## Open Questions
- **Images**: I will use placeholder images (or reuse the ice cream images) for the category cards for now until you upload the specific photos for Doughnuts, Burgers, etc. Is that okay?

## Verification Plan
- Verify that the layout precisely matches the provided mockup in both desktop and mobile views.
- Verify that clicking categories properly switches the views.
