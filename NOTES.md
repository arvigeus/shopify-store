# Notes

- Based on [hydrogen-demo-store](https://github.com/Shopify/hydrogen-demo-store)
- Changes since last merge:
  [compare](https://github.com/Shopify/hydrogen-demo-store/compare/7ccc13a..main)

## Manual Merge

1. **Clone** `https://github.com/Shopify/hydrogen-demo-store`
1. **Ensure same versions**:
   - `prettier`
   - `@epic-web/config`
   - `eslint`
1. **Copy** `lint` & `format` scripts from `package.json`
1. **Remove from `package.json`**:
   - `"prettier": "@shopify/prettier-config"`
   - devDependencies:
     - `@shopify/prettier-config`
     - `@remix-run/eslint-config`
     - `@shopify/eslint-plugin`
1. **Delete**:
   - `.eslintrc.cjs`
   - `.eslintignore`
   - `.prettierignore`
1. **Copy**:
   - `eslint.config.js`
   - `prettier.config.js`
   - `.editorconfig`
1. **Run**: `npm run lint && npm run format`
