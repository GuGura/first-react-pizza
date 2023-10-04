 # React + Vite

### eslint
```
npm i eslint vite-plugin-eslint eslint-config-react-app --save-dev
```

### react-router-dom
```
npm install react-router-dom
```

### Reduxjs-Toolkit
```
npm i @reduxjs/toolkit react-redux
```

### Tailwind prettier
```
npm install -D prettier prettier-plugin-tailwindcss
```

### Tailwind vite
```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```
tailwind.config.js
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```