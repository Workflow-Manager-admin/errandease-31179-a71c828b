# ErrandEase Main Container – Requirements Document

## 1. Overview

ErrandEase (codename: MapMyErrands) is a web-based, mobile-first application designed to help users manage and optimize daily errands. Built using React JS (JavaScript ES6+), it emphasizes simplicity, clarity, and accessibility with a modern and friendly UI. This requirements document details the features, user flows, UI guidelines, technical constraints, and specifications for the main container and core modules, providing a development and design reference.

---

## 2. Audience

- **Developers:** Implementing components and integrating features.
- **Designers:** Ensuring consistency with visual and UX standards.

---

## 3. Core Features & Functional Requirements

### 3.1 Add/Edit Errand
- Users can add or edit errands with:
  - Required fields: Task Name, Location (using address search or draggable map pin), Time.
  - Optional: Notes field.
  - Embedded mini map with draggable pin for location selection.

### 3.2 View & Optimize Tasks
- Home (main) screen displays:
  - A list of today’s errands with time, name, and location.
  - Option to sort or optimize the task route (UI placeholder triggers demo).
  - Optimized route view on a map.
  - Prominent "+ Add Errand" floating action button.

### 3.3 Route Navigation
- Full-screen map with:
  - Custom task icons.
  - Numbered route lines connecting tasks.
  - Bottom sheet displaying a scrollable list of errands with estimated times.
  - Controls to start or recalculate the route.

### 3.4 Reminders & Notifications
- Users can set notifications for each errand:
  - Time-based or location-based (UI only/mock due to browser limitations).
  - UI for previewing upcoming notifications (shows task and scheduled time).

### 3.5 Settings & Integrations
- Settings page includes toggles for:
  - Dark mode.
  - Google Calendar sync (initially UI only with mocked/stubbed interaction).
  - Profile, preferences, and sign out.

### 3.6 Microinteractions & Animations
- Animated feedback for:
  - Task completion (e.g., animated checkmark).
  - Adding errands (e.g., FAB expand/contract).
  - Route optimization (e.g., animated loading/progress).
- Subtle transitions for screen changes and dialog open/close.

---

## 4. User Interface & Design Guidelines

- **Mobile-First Approach:** UI adapts seamlessly from mobile to desktop.
- **Layout & Navigation:**
  - Soft shadows and rounded corners throughout.
  - Bottom-sheet pattern for maps and task lists.
  - Easy, prominent navigation—fixed App Bar on top, floating action button at bottom right.
  - Clean, accessible tab and menu structures.
- **Theme & Colors:**
  - Light theme by default.
  - Primary: `#4FC3F7` (light blue)
  - Secondary: `#81C784` (green)
  - Accent: `#FFFFFF` (white)
- **Typography:**
  - Modern sans-serif fonts (e.g., Inter, Roboto, Helvetica).
  - Clear visual hierarchy for titles, subtotals, and descriptions.
- **Accessibility:**
  - Sufficient color contrast for text and UI elements.
  - Keyboard and screen-reader navigable.

---

## 5. Technology Stack

- **Frontend Framework:** React JS (functional components, hooks)
- **Programming Language:** JavaScript (ES6+)
- **CSS:** Vanilla CSS for layout/styling; no heavy third-party UI libraries, maintain custom styles in `App.css` and component files.
- **Platform:** Web (desktop and primarily mobile browsers)
- **3rd Party Integrations:** Google Maps (initially stubbed/mocked), Google Calendar (UI only for initial implementation).

---

## 6. Key Screens & Flows

### 6.1 Home / Task List Screen
- Displays today’s errands.
- "+ Add Errand" floating action button.
- "Optimize Route" control.
- Access to profile/settings.

### 6.2 Add/Edit Errand
- Form with inputs for name, time, location (address/map pin), and notes.
- Embedded map for selecting/adjusting location.

### 6.3 Map / Route View
- Full-screen interactive map.
- Task markers, routes, and bottom sheet for stepwise navigation (ETA/task list).
- Actions: Start/recalculate route, return to list.

### 6.4 Reminders & Notifications Preview
- Modal or panel showing upcoming notifications UI.

### 6.5 Settings
- Dark mode toggle.
- Google Calendar switch.
- Profile information.

---

## 7. Constraints & Implementation Notes

- **Web Platform Limitations:**
  - Location-based notifications are UI-only; actual background geolocation and notifications are unsupported in browsers.
- **Integrations:**
  - Google Maps and Calendar are mocked/stubbed initially—APIs and logic to be integrated in future phases.
- **Modularity:**
  - Features should be modular, allowing for independent development and testing.
- **Responsiveness:**
  - All features and screens must follow mobile-first, responsive design principles.
- **Testing:**
  - Each container/component should include tests for functional and visual behavior.

---

## 8. Non-Functional Requirements

- **Performance:** Fast load and transition between screens.
- **Reliability:** Minimal dependencies; solid fallbacks for unimplemented integrations.
- **Maintainability:** Clear code structure and in-code documentation, consistent style.

---

## 9. Out of Scope (Phase 1)

- Backend/API implementation.
- Real Google Maps, Calendar, or notification integration (to be added in later releases).
- User authentication and persistent cloud sync.

---

## 10. Visual Reference

- Prefer the "modern mobile-app" look as demonstrated in the included style sheets.
- See `App.css` for current in-app style variables and baseline UI kit.

---

## 11. Revision History

| Date       | Author  | Description            |
|------------|---------|------------------------|
| 2024-06-11 | Kavia   | Initial requirements   |
