# Svelte Snowpack Template

A `snowpack` template for `svelte`.

Configured with `jest`, `eslint`, `prettier`, `husky`, `dotenv`, `postcss`, `tailwind`, and `rollup` for production builds. Also with CI build on Github (you can safely remove it).

# Usage

To use this template:

```bash
npx degit minetower/svelte-snowpack-template path/to/dir
```

or use as template from Github.

## Available Scripts

### `yarn dev`

Runs the app in the development mode. Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `yarn test`

Runs `jest` on all `*.test.js` files.

### `yarn format:check`

Runs `eslint` and `prettier` on all files.

### `yarn format`

Formats all files according to rules defined in `.eslintrc.yaml` and `.prettierrc.yaml`.

### `yarn build`

Builds a static copy of your site to the `build/` folder. Your app is ready to be deployed!

# License

MIT
