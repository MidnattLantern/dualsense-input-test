# dualsense-input-test
Simple project that displays user game controller input via the vanilla controller API. Designed for the DualSense with Chrome and Safari in mind.

To publish to Github Pages:
Install gh-pages:
```zsh
npm install gh-pages --save-dev
```

Edit package.json and add these lines:
```json
"homepage": "https://midnattlantern.github.io/dualsense-input-test",
"scripts": {
  "predeploy": "vite build",
  "deploy": "gh-pages -d dist"
}
```

Modify your vite.config.js to include:
```typescript
export default defineConfig({
  base: "/your-repo/",  // Replace with your repo name
});
```

Deploy by running the following in terminal:
```zsh
npm run deploy
```

Live link: `https://midnattlantern.github.io/dualsense-input-test/`



Controller input behavior can vary significantly across different game controllers, operating systems, and browsers, regardless of whether the connection is established via USB or Bluetooth. This project is specifically designed with PlayStation controllers (generations 4 and 5) in mind, targeting Chrome and Safari browsers due to their widespread usage.

Given that PlayStation controllers are among the most popular gaming controllers and Chrome and Safari are the leading web browsers among users, it is recommended to use Safari for optimal performance and reliability with controller support.

To add SVG support,
```zsh
npm install vite-plugin-svgr --save-dev
```

Update the `vite.config.ts` file:
```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
});
```

Add to the `vite-env-d-ts` file:
```ts
/// <reference types="vite-plugin-svgr/client" />

declare module '*.svg' {
    import { FC, SVGProps } from 'react';
    const ReactComponent: FC<SVGProps<SVGSVGElement>>;
    export default ReactComponent;
  }
```

The project is veriied for Chrome and Safari, to display warning messages for unverified browsers, the project first need to be able to detect the users browser via the following npm package: https://www.npmjs.com/package/detect-browser
```zsh
npm install detect-browser
```

Assets
- Graphical components that resembles the DualSense was made by Alma using a vector-based editing software (Affinity 2)
- The wallpaper is taken from the following resource: https://wallpaper.dog/black-abstract-desktop-wallpapers#google_vignette 