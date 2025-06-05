# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify
---

## Google Maps Integration & API Key Setup

This project includes live Google Maps for route planning and errands. **To use the Map features:**

### 1. Obtain a Google Maps JavaScript API Key

- Go to [Google Cloud Console: APIs & Credentials](https://console.cloud.google.com/apis/credentials).
- Create a new API Key (or use an existing one).
- Ensure it is enabled for **Maps JavaScript API**.
- (Optional) Restrict your API key to your app’s origins for security.

### 2. Add the key to your `.env` file

Create or open your `.env` file in the `/errand_management` directory.<br>
Add this line (use your own key!):

```
REACT_APP_GOOGLE_MAPS_API_KEY=your-api-key-here
```

### 3. **Restart your development server**

> ⚠️ After creating or editing `.env`, you **MUST fully stop and re-run** your dev server.  
> Hot reload will **not** pick up .env changes.
> 
> - If running: press <kbd>Ctrl+C</kbd> in your terminal to stop.
> - Then start again with `npm start`.

### 4. Troubleshooting

If Maps do not appear and you see a warning or error:
- Double-check your API key is correct and enabled for Maps JavaScript API.
- Ensure your `.env` line is present (`REACT_APP_GOOGLE_MAPS_API_KEY=...`).
- Stop the server and restart it.
- For invalid key errors, see the in-app error message for hints.

See `src/features/map/MapView.js` for further in-code instructions.

---

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
