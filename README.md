# React + Vite Template

This template provides a minimal setup to get **React** working with **Vite**, featuring **Hot Module Replacement (HMR)** and basic **ESLint** rules for a smooth development experience.

## Available Plugins

Vite provides two official plugins for React:

1. **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)**
   - Uses [Babel](https://babeljs.io/) for Fast Refresh.

2. **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc)**
   - Uses [SWC](https://swc.rs/) for Fast Refresh, offering better performance.

## Installation Steps

### 1. Create a Vite Project

Start by creating a new Vite project with the React template:

```bash
npm create vite@latest my-react-app --template react
cd my-react-app

### 2. Install Dependencies
Install the required packages for Tailwind CSS and the Vite plugin:
```bash
npm install tailwindcss @tailwindcss/vite

### 3. Configure Vite
Open or create the vite.config.js file in the root directory of your project and add the Tailwind CSS plugin:

```bash
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
});

### 4. Set Up Tailwind CSS
In your src/index.css (or the main CSS file of your project), add the following line to import the Tailwind CSS library:

```bash
@import "tailwindcss";
