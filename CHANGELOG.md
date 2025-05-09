# demo-store

## 2.1.6

### Patch Changes

- Fix template dist package due to CI error
  ([#1451](https://github.com/Shopify/hydrogen/pull/1451)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

- Updated dependencies
  [[`3eb376fe`](https://github.com/Shopify/hydrogen/commit/3eb376fe8796b50131dc43845772ae555e07a1a6)]:
  - @shopify/cli-hydrogen@5.5.1
  - @shopify/hydrogen@2023.7.13

## 2.1.5

### Patch Changes

- Fix the starter template blog route to include a required `startCursor` in the
  GraphQL query. ([#1441](https://github.com/Shopify/hydrogen/pull/1441)) by
  [@blittle](https://github.com/blittle)

- Updated dependencies
  [[`f5b05736`](https://github.com/Shopify/hydrogen/commit/f5b05736a3774b51ff695f1dc5bd16609cc68bf2),
  [`e992de2c`](https://github.com/Shopify/hydrogen/commit/e992de2c73462a954620c3ef896849782d18e506),
  [`f6469d11`](https://github.com/Shopify/hydrogen/commit/f6469d11248543c98e5166f8d8c1a2e2d9e5764c),
  [`b81b452d`](https://github.com/Shopify/hydrogen/commit/b81b452d010c650b1de1678f729945d1d4394820),
  [`945c55ae`](https://github.com/Shopify/hydrogen/commit/945c55aeb3b80f4b6c39d3527ec09c1bc6cd8477)]:
  - @shopify/hydrogen@2023.7.12
  - @shopify/cli-hydrogen@5.5.0
  - @shopify/remix-oxygen@1.1.8

## 2.1.4

### Patch Changes

- Ensure that the `/discount?redirect=...` route only redirects to relative
  URLs. ([#1399](https://github.com/Shopify/hydrogen/pull/1399)) by
  [@frandiox](https://github.com/frandiox)

- Updated dependencies
  [[`cf5fe844`](https://github.com/Shopify/hydrogen/commit/cf5fe844bad989ec944d03bacf3666a6ab09063c),
  [`4f735fd7`](https://github.com/Shopify/hydrogen/commit/4f735fd725aef26cd3bd5b50c87d2c028b93c598),
  [`4156d16b`](https://github.com/Shopify/hydrogen/commit/4156d16bb171a7f5dd4d5feaad7cbd03ffb4610a)]:
  - @shopify/cli-hydrogen@5.4.2
  - @shopify/remix-oxygen@1.1.6
  - @shopify/hydrogen@2023.7.10

## 2.1.3

### Patch Changes

- Cart Optimistic UI helpers
  ([#1366](https://github.com/Shopify/hydrogen/pull/1366)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

- Updated dependencies
  [[`e148cfca`](https://github.com/Shopify/hydrogen/commit/e148cfca004d6bb2981d136231e3825509d52305),
  [`1be1e40d`](https://github.com/Shopify/hydrogen/commit/1be1e40de6abf58679dbfada20fb430892dc5ef8),
  [`8772903d`](https://github.com/Shopify/hydrogen/commit/8772903da9efe23fb56fc4bfcace729065f4960f),
  [`bfb142e8`](https://github.com/Shopify/hydrogen/commit/bfb142e84a22ca1c506f7ebb1692e435790c8fd3),
  [`06da5570`](https://github.com/Shopify/hydrogen/commit/06da5570c25a64b1afc4cce093c3ba3d2d7da2ca),
  [`00210faa`](https://github.com/Shopify/hydrogen/commit/00210faa55cad78a8331adecddc9bdde9463acc7),
  [`425791ce`](https://github.com/Shopify/hydrogen/commit/425791ced37ddb50f71fbdc78760905555716444)]:
  - @shopify/cli-hydrogen@5.4.0
  - @shopify/hydrogen@2023.7.9

## 2.1.2

### Patch Changes

- Improved types of `HydrogenSession` when accessing
  `session.get('customerAccessToken')`.
  ([#1341](https://github.com/Shopify/hydrogen/pull/1341)) by
  [@frandiox](https://github.com/frandiox)

- Updated dependencies
  [[`33ae6ab6`](https://github.com/Shopify/hydrogen/commit/33ae6ab6029213ba34e8c7441d99c7eb8d31721b),
  [`d8dc1acf`](https://github.com/Shopify/hydrogen/commit/d8dc1acf96fae571115908973a47cab3e85f2f2a),
  [`e62a4db1`](https://github.com/Shopify/hydrogen/commit/e62a4db1f54866868d76b450a285d19360fbf83b),
  [`305862ff`](https://github.com/Shopify/hydrogen/commit/305862ff20ca1db2cdecebe2fff34452189d04e8),
  [`33258210`](https://github.com/Shopify/hydrogen/commit/33258210b494b7627c9035c0c54561a3f7a865b2),
  [`e62a4db1`](https://github.com/Shopify/hydrogen/commit/e62a4db1f54866868d76b450a285d19360fbf83b),
  [`be4994fe`](https://github.com/Shopify/hydrogen/commit/be4994feaee7834edd6e58c0bfe585fafa5a48a0),
  [`87918e31`](https://github.com/Shopify/hydrogen/commit/87918e317f15f21cc7e6f3deb39664935e379d79),
  [`2ce3861e`](https://github.com/Shopify/hydrogen/commit/2ce3861ebe51b2fec53c178a19cc21201c4cc2ac),
  [`e62a4db1`](https://github.com/Shopify/hydrogen/commit/e62a4db1f54866868d76b450a285d19360fbf83b),
  [`384a4267`](https://github.com/Shopify/hydrogen/commit/384a4267a56d9386ba4f59b82c0705010ddba590),
  [`113821e5`](https://github.com/Shopify/hydrogen/commit/113821e57bc46ef5fe926889473399f2dc54bbdb)]:
  - @shopify/cli-hydrogen@5.3.0
  - @shopify/hydrogen@2023.7.8

## 2.1.1

### Patch Changes

- Hydrogen is now compatible with TypeScript v5.
  ([#1240](https://github.com/Shopify/hydrogen/pull/1240)) by
  [@frandiox](https://github.com/frandiox)

  If you have `typescript` as a dev dependency in your app, it is recommended to
  change its version as follows:

  ```diff
    "devDependencies": {
      ...
  -   "typescript": "^4.9.5",
  +   "typescript": "^5.2.2",
    },
  ```

  After installing the new version of TypeScript, you may need to update the
  version used in your IDE. For example, in VSCode, you can do this by clicking
  on the `{ }` icon in the bottom-right toolbar next to the language mode
  (generally, `{ } TypeScript JSX` when editing a `.tsx` file).

- Updated dependencies
  [[`3491fd5c`](https://github.com/Shopify/hydrogen/commit/3491fd5cef5586dbf7dc44243124649bfad4df5a),
  [`06516ee9`](https://github.com/Shopify/hydrogen/commit/06516ee91f20153902c2b8ef79c0f6690ba385bb),
  [`d67ce6aa`](https://github.com/Shopify/hydrogen/commit/d67ce6aaaa93791fee4b82e722bd2fad8dcefec0),
  [`1b7e0016`](https://github.com/Shopify/hydrogen/commit/1b7e001647262630dfb66b85f596dd2d86dc12dd),
  [`ee6e2920`](https://github.com/Shopify/hydrogen/commit/ee6e2920389b6cc103642b43a17af2311d347e13),
  [`17892a72`](https://github.com/Shopify/hydrogen/commit/17892a72888bc976acc9f6764878253dab795629),
  [`1a7762bc`](https://github.com/Shopify/hydrogen/commit/1a7762bc4c99ff35ee6392ab7627a0ef13f97e6f),
  [`1f8acd7b`](https://github.com/Shopify/hydrogen/commit/1f8acd7b6ab0aa78e2a882e59cf69887109504be)]:
  - @shopify/cli-hydrogen@5.2.1
  - @shopify/hydrogen@2023.7.4

## 2.1.0

### Minor Changes

- Support Remix Hot Module Replacement (HMR) and Hot Data Revalidation (HDR).
  ([#1187](https://github.com/Shopify/hydrogen/pull/1187)) by
  [@frandiox](https://github.com/frandiox)

  Start using it with the following changes to your project:

  1. Upgrade to the latest Hydrogen version and Remix 1.19.1.

  2. Enable the v2 dev server in `remix.config.js`:

  ```diff
  // ...
  future: {
  + v2_dev: true,
    v2_meta: true,
    v2_headers: true,
    // ...
  }
  ```

  3. Add Remix' `<LiveReload />` component if you don't have it to your
     `root.jsx` or `root.tsx` file:

  ```diff
  import {
    Outlet,
    Scripts,
  + LiveReload,
    ScrollRestoration,
  } from '@remix-run/react';

  // ...

  export default function App() {
    // ...

    return (
      <html>
        <head>
         {/* ...  */}
        </head>
        <body>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
  +       <LiveReload />
        </body>
      </html>
    );
  }

  export function ErrorBoundary() {
    // ...

    return (
      <html>
        <head>
          {/* ... */}
        </head>
        <body>
          Error!
          <Scripts />
  +       <LiveReload />
        </body>
      </html>
    );
  }
  ```

### Patch Changes

- Performance optimization on product page
  ([#1256](https://github.com/Shopify/hydrogen/pull/1256)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

- Add shouldRevalidate export to limit root loaders revalidation on mutations
  only ([#1237](https://github.com/Shopify/hydrogen/pull/1237)) by
  [@juanpprieto](https://github.com/juanpprieto)

- Updated dependencies
  [[`a06b5093`](https://github.com/Shopify/hydrogen/commit/a06b509339bb749a27f5dcf3555c7c2d6ebde3af),
  [`d053978d`](https://github.com/Shopify/hydrogen/commit/d053978dc49a12651a5c7c15efd543884b9f03db),
  [`9fcfc500`](https://github.com/Shopify/hydrogen/commit/9fcfc5000d4df6745ad4c0a05a4cb6d039feed71),
  [`ec21cfd6`](https://github.com/Shopify/hydrogen/commit/ec21cfd64d82d3d2d2ee2ee54cf93d372bc5d927),
  [`867866d1`](https://github.com/Shopify/hydrogen/commit/867866d18cba0324c240c15422c890ccb4fc1546),
  [`bdac4c22`](https://github.com/Shopify/hydrogen/commit/bdac4c2253c45772da0b6b475703c3d97e599cbb),
  [`d896c76b`](https://github.com/Shopify/hydrogen/commit/d896c76be1608f6023dab40625a8cb663e00cb2a),
  [`46d5f8ff`](https://github.com/Shopify/hydrogen/commit/46d5f8ff279dd7e18fa817eeb04206e08122fced),
  [`632a7a38`](https://github.com/Shopify/hydrogen/commit/632a7a385f13a987990f554b907dfb6f421f1351),
  [`e536ae04`](https://github.com/Shopify/hydrogen/commit/e536ae04641c41b56580f69dab454c20f2931cbf)]:
  - @shopify/cli-hydrogen@5.2.0
  - @shopify/hydrogen@2023.7.3

## 2.0.2

### Patch Changes

- Update @shopify/oxygen-workers-types dependencies
  ([#1208](https://github.com/Shopify/hydrogen/pull/1208)) by
  [@juanpprieto](https://github.com/juanpprieto)

- Fix demo-store analytics
  ([#1177](https://github.com/Shopify/hydrogen/pull/1177)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

- Updated dependencies
  [[`b29c85d0`](https://github.com/Shopify/hydrogen/commit/b29c85d053e8beb51216fa2cce47e1d21258ad79),
  [`21eb9dac`](https://github.com/Shopify/hydrogen/commit/21eb9dac935722fd8d0d385b00c3bbcfb4693baa)]:
  - @shopify/hydrogen@2023.7.2
  - @shopify/cli-hydrogen@5.1.2
  - @shopify/remix-oxygen@1.1.3

## 2.0.1

### Patch Changes

- Update to Remix v1.19.1.
  ([#1172](https://github.com/Shopify/hydrogen/pull/1172)) by
  [@frandiox](https://github.com/frandiox)

  See changes for
  [1.18](https://github.com/remix-run/remix/releases/tag/remix%401.18.0) and
  [1.19](https://github.com/remix-run/remix/releases/tag/remix%401.19.0).

- It's recommended to update `@shopify/cli`:
  ([#1172](https://github.com/Shopify/hydrogen/pull/1172)) by
  [@frandiox](https://github.com/frandiox)

  ```diff
  -"@shopify/cli": "3.47.5"
  +"@shopify/cli": "3.48.0"
  ```

  Also, for projects using Remix v1 Error Boundary convention, remove the
  deprecated `ErrorBoundaryComponent` type (or update to the v2 convention):

  ```diff
  -export const ErrorBoundary: ErrorBoundaryComponent = ({error}) => {
  +export const ErrorBoundary = ({error}: {error: Error}) => {
  ```

- Updated dependencies
  [[`b7a8ecf6`](https://github.com/Shopify/hydrogen/commit/b7a8ecf6a687e72de7745a78c61c1a78a9a52629),
  [`ef809228`](https://github.com/Shopify/hydrogen/commit/ef809228da8d6d4f1b3301221e1e03d24cac63fa),
  [`1015f170`](https://github.com/Shopify/hydrogen/commit/1015f17028beb2ab00e381a61e9f4132e74b17ad),
  [`076bab7d`](https://github.com/Shopify/hydrogen/commit/076bab7d31ffcd918c4a3b0dd7be03e00d2dd913)]:
  - @shopify/remix-oxygen@1.1.2
  - @shopify/hydrogen@2023.7.1
  - @shopify/cli-hydrogen@5.1.1

## 2.0.0

### Major Changes

- Add `.env` file to Remix watcher to allow reloading environment variables on
  file save. In `remix.config.js`:
  ([#997](https://github.com/Shopify/hydrogen/pull/997)) by
  [@frandiox](https://github.com/frandiox)

  ```diff
  -watchPaths: ['./public'],
  +watchPaths: ['./public', './.env'],
  ```

### Patch Changes

- Function and component for cart management:
  ([#786](https://github.com/Shopify/hydrogen/pull/786)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  - `createCartHandler` - Creates an object instance that simplifies cart
    operations such as add/update/remove from cart.
  - `CartForm` - A form component that helps you sets up form inputs for cart
    handler.

  **Documentation:**

  - Updated
    [how-to guides](https://shopify.dev/docs/custom-storefronts/hydrogen/cart)
  - [`createCartHandler`](https://shopify.dev/docs/api/hydrogen/2023-04/utilities/createcarthandler)
  - [`CartForm`](https://shopify.dev/docs/api/hydrogen/2023-04/components/cartform)

- Fix demostore to check for `shop.primaryDomain` host for navigation menu
  items. ([#1036](https://github.com/Shopify/hydrogen/pull/1036)) by
  [@rista404](https://github.com/rista404)

- Fix empty discount code
  ([#1104](https://github.com/Shopify/hydrogen/pull/1104)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

- Add a `<VariantSelector>` component to make building product forms easier.
  Also added `getFirstAvailableVariant` and `getSelectedProductOptions` helper
  functions. See the
  [proposal](https://gist.github.com/blittle/d9205d4ac72528005dc6f3104c328ecd)
  for examples. ([#1027](https://github.com/Shopify/hydrogen/pull/1027)) by
  [@blittle](https://github.com/blittle)

- Add @total-typescript/ts-reset to demo-store and skeleton templates
  ([#1042](https://github.com/Shopify/hydrogen/pull/1042)) by
  [@juanpprieto](https://github.com/juanpprieto)

- Updated dependencies
  [[`4c0858f2`](https://github.com/Shopify/hydrogen/commit/4c0858f2bca39a631a868902aef64e537d6dedfd),
  [`c39411e0`](https://github.com/Shopify/hydrogen/commit/c39411e0454750697d580a1ef4858800c494980f),
  [`dc56d296`](https://github.com/Shopify/hydrogen/commit/dc56d296c5abf572c19046756ad5b27f8b98a7b3),
  [`2a036d72`](https://github.com/Shopify/hydrogen/commit/2a036d72c79ef3e40aecfb1832635898208c6d54),
  [`667ea4fb`](https://github.com/Shopify/hydrogen/commit/667ea4fbf30e632529984c8262010d35e5df38b0),
  [`ed9782bc`](https://github.com/Shopify/hydrogen/commit/ed9782bc43921d02a2fdbc951c1df1d200812f2d),
  [`4bee03df`](https://github.com/Shopify/hydrogen/commit/4bee03df3cc8203510f6b05522c1268aa5e5f2f4),
  [`11ab64a8`](https://github.com/Shopify/hydrogen/commit/11ab64a88966dd7b90522f15836abfff6f5d595f),
  [`9482bc59`](https://github.com/Shopify/hydrogen/commit/9482bc59c2ec8ebd1669a8773f7a5ca7c5359abc),
  [`31409877`](https://github.com/Shopify/hydrogen/commit/31409877106182f5505acb07c5d822bc1f0756bc),
  [`00f3e592`](https://github.com/Shopify/hydrogen/commit/00f3e59283d3a413a6acd89722bb71580f73aff5),
  [`4db61421`](https://github.com/Shopify/hydrogen/commit/4db61421a7d55c7409465210996869bfcf765f7a),
  [`5530d987`](https://github.com/Shopify/hydrogen/commit/5530d98756503878fbf5ac013e2103259ffc0443),
  [`63d17266`](https://github.com/Shopify/hydrogen/commit/63d172665cf97fae62629f8019d9b2dad29c7d40),
  [`5530d987`](https://github.com/Shopify/hydrogen/commit/5530d98756503878fbf5ac013e2103259ffc0443),
  [`1befd365`](https://github.com/Shopify/hydrogen/commit/1befd3650dd57cdff584dcd18423cc9b930d91b9),
  [`945fdc57`](https://github.com/Shopify/hydrogen/commit/945fdc57f08bdee363f4e801380696ade323edaa)]:
  - @shopify/hydrogen@2023.10.0
  - @shopify/cli-hydrogen@6.0.0

## 1.0.4

### Patch Changes

- Update Remix to the latest version (`1.17.1`).
  ([#852](https://github.com/Shopify/hydrogen/pull/852)) by
  [@frandiox](https://github.com/frandiox)

  When updating your app, remember to also update your Remix dependencies to
  `1.17.1` in your `package.json` file:

  ```diff
  -"@remix-run/react": "1.15.0",
  +"@remix-run/react": "1.17.1",

  -"@remix-run/dev": "1.15.0",
  -"@remix-run/eslint-config": "1.15.0",
  +"@remix-run/dev": "1.17.1",
  +"@remix-run/eslint-config": "1.17.1",
  ```

- Updated dependencies
  [[`f29e178a`](https://github.com/Shopify/hydrogen/commit/f29e178ada608ef3797c5049fd498afeed272152)]:
  - @shopify/remix-oxygen@1.1.1
  - @shopify/hydrogen@2023.4.5
  - @shopify/cli-hydrogen@5.0.1

## 1.0.3

### Patch Changes

- A default `https://` protocol is now added automatically to `storeDomain` if
  missing. ([#985](https://github.com/Shopify/hydrogen/pull/985)) by
  [@frandiox](https://github.com/frandiox)

- Start using GraphQL code generation. This allows us to have full-stack
  type-safety and better developer experience.
  ([#937](https://github.com/Shopify/hydrogen/pull/937)) by
  [@frandiox](https://github.com/frandiox)

  As a result of the above, we've fixed issues where the frontend was accessing
  data that was not correctly fetched from the Storefront API. For example,
  missing `product.vendor` or accessing `totalPrice` instead of `totalPriceV2`.

  To enable the unstable codegen feature in your project, run your dev command
  as `shopify hydrogen dev --codegen-unstable`. See the
  [changes associated here](https://github.com/Shopify/hydrogen/pull/937/files)
  for examples.

- Update the demostore to not cache the customer query. This is important to
  update in your app if you copied the logic from the demo store.
  ([#950](https://github.com/Shopify/hydrogen/pull/950)) by
  [@blittle](https://github.com/blittle)

- Remove wrong cache control headers from route. Demo store is setting
  `cache-control` header when it is not suppose to. The demo store server
  renders cart information. Cart information is consider personalized content
  and should never be cached in any way.
  ([#991](https://github.com/Shopify/hydrogen/pull/991)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  Route `($locale).api.countries.tsx` can have cache control header because it
  is an API endpoint that doesn't render the cart.

- Make `storefrontApiVersion` parameter optional. By default, it will use the
  current version of Hydrogen as the Storefront API version.
  ([#984](https://github.com/Shopify/hydrogen/pull/984)) by
  [@frandiox](https://github.com/frandiox)

- Updated dependencies
  [[`b2195520`](https://github.com/Shopify/hydrogen/commit/b219552030ed9cdb3fcd3343deaf5c502d12411b),
  [`4c5cdfd6`](https://github.com/Shopify/hydrogen/commit/4c5cdfd61b4634c76db7ecca05972102071109f9),
  [`7b4afea2`](https://github.com/Shopify/hydrogen/commit/7b4afea29a050f9c77482540e321d9bc60351b2e),
  [`42683d0a`](https://github.com/Shopify/hydrogen/commit/42683d0a1b6288d8f6a6e58bfbf2e2650f0d82d2),
  [`7d6a1a7c`](https://github.com/Shopify/hydrogen/commit/7d6a1a7cd3adb6ee0cf4cf242b72d5650509639b),
  [`808ceb51`](https://github.com/Shopify/hydrogen/commit/808ceb518a30389d0df4226bed23aead65ccd11f),
  [`442f602a`](https://github.com/Shopify/hydrogen/commit/442f602a45902beeb188575a85151f45b8be23ca),
  [`be912b2f`](https://github.com/Shopify/hydrogen/commit/be912b2ff7f4bc7a45688ff96d76f482b164efe5),
  [`8ccf6dbe`](https://github.com/Shopify/hydrogen/commit/8ccf6dbe7fb9cb2dec161dea2653c4ef6ba212c4),
  [`428c78dc`](https://github.com/Shopify/hydrogen/commit/428c78dcb6005c369c0c60e4c4cffb869afa7eb1),
  [`93a7c3c6`](https://github.com/Shopify/hydrogen/commit/93a7c3c65fc10c8b1a16cee5fa57ad932d278dc8),
  [`5124d618`](https://github.com/Shopify/hydrogen/commit/5124d6189ccfc208b65d4e8894be1a9a2bfb7db9)]:
  - @shopify/cli-hydrogen@5.0.0
  - @shopify/hydrogen@2023.4.4
  - @shopify/remix-oxygen@1.1.0

## 1.0.2

### Patch Changes

- Fix release ([#926](https://github.com/Shopify/hydrogen/pull/926)) by
  [@blittle](https://github.com/blittle)

- Updated dependencies
  [[`7aaa4e86`](https://github.com/Shopify/hydrogen/commit/7aaa4e86739e22b2d9a517e2b2cfc20110c87acd)]:
  - @shopify/cli-hydrogen@4.2.1
  - @shopify/hydrogen@2023.4.3
  - @shopify/remix-oxygen@1.0.7

## 1.0.1

### Patch Changes

- Fix the load more results button on the /search route
  ([#909](https://github.com/Shopify/hydrogen/pull/909)) by
  [@juanpprieto](https://github.com/juanpprieto)

- Adds pagination support on /search results
  ([#918](https://github.com/Shopify/hydrogen/pull/918)) by
  [@juanpprieto](https://github.com/juanpprieto)

- Added import/order ESLint rule and @remix-run/eslint plugin to demo-store
  template eslint configuration.
  ([#895](https://github.com/Shopify/hydrogen/pull/895)) by
  [@QuintonC](https://github.com/QuintonC)

- Updated dependencies
  [[`1a9f4025`](https://github.com/Shopify/hydrogen/commit/1a9f4025d765bff672cf3c02d87c5303e8b027f9),
  [`112ac42a`](https://github.com/Shopify/hydrogen/commit/112ac42a095afc5269ae75ff15828f27b90c9687),
  [`a8d5fefe`](https://github.com/Shopify/hydrogen/commit/a8d5fefe79140c09a58e77aae329e5034d030a93),
  [`24b82fcf`](https://github.com/Shopify/hydrogen/commit/24b82fcf457d82f456d9661b8a44e4f51b5fbdf5),
  [`3cc6d751`](https://github.com/Shopify/hydrogen/commit/3cc6d75194df4007ebc2f023c46086f093482a87),
  [`112ac42a`](https://github.com/Shopify/hydrogen/commit/112ac42a095afc5269ae75ff15828f27b90c9687),
  [`ba54a3b6`](https://github.com/Shopify/hydrogen/commit/ba54a3b650b85191d3417647f08a6fb932f20d44)]:
  - @shopify/cli-hydrogen@4.2.0
  - @shopify/hydrogen@2023.4.2

## 1.0.0

### Major Changes

- All routes were changed from having a `$lang` path parameter to having a
  `$locale` path parameter. See #860 for more details.
  ([#864](https://github.com/Shopify/hydrogen/pull/864)) by
  [@frehner](https://github.com/frehner)

### Patch Changes

- Add `.shopify` to the .gitignore file to support upcoming CLI changes
  ([#784](https://github.com/Shopify/hydrogen/pull/784)) by
  [@graygilmore](https://github.com/graygilmore)

- Move GraphQL fragments from the beginning of the template literal to the end
  of it, so that we don't get the EOF error in VSCode.
  ([#833](https://github.com/Shopify/hydrogen/pull/833)) by
  [@frehner](https://github.com/frehner)

- Updated Tailwind configuration file with a new dynamic opacity placeholder for
  colors ([#851](https://github.com/Shopify/hydrogen/pull/851)) by
  [@blanklob](https://github.com/blanklob)

- Updated dependencies
  [[`685bb696`](https://github.com/Shopify/hydrogen/commit/685bb696a9bd03b8a7fe8bcefa3630d6ba0c99c8),
  [`025385b6`](https://github.com/Shopify/hydrogen/commit/025385b6f9f58a76ffb15d9f505dfbf2b5e21427),
  [`35a87107`](https://github.com/Shopify/hydrogen/commit/35a871073941e008e104e9c491719d4cade8b49a),
  [`33f33edd`](https://github.com/Shopify/hydrogen/commit/33f33edd205bbc113047533c71c71ad53bc91b3e),
  [`0a009a3b`](https://github.com/Shopify/hydrogen/commit/0a009a3ba06dadd8f9d799575d7f88590f82a966),
  [`9c2e67c5`](https://github.com/Shopify/hydrogen/commit/9c2e67c52ec1c77062cb667505560afb757372a9),
  [`9c2e67c5`](https://github.com/Shopify/hydrogen/commit/9c2e67c52ec1c77062cb667505560afb757372a9),
  [`3d458e2b`](https://github.com/Shopify/hydrogen/commit/3d458e2b3c66a4daac798598cadba38b9ecd8a1e)]:
  - @shopify/cli-hydrogen@4.1.2
  - @shopify/remix-oxygen@1.0.6
  - @shopify/hydrogen@2023.4.1

## 0.2.1

### Patch Changes

- Updated dependencies
  [[`2039a4a`](https://github.com/Shopify/hydrogen/commit/2039a4a534cf75ebcf39bab6d2f95a535bb5d390),
  [`82b6af7`](https://github.com/Shopify/hydrogen/commit/82b6af71cafe1f88c24630178e61cd09e5a59f5e),
  [`361879e`](https://github.com/Shopify/hydrogen/commit/361879ee11dfe8f1ee916b022165b1e7f0e45964)]:
  - @shopify/cli-hydrogen@4.1.1
  - @shopify/hydrogen@2023.4.0

## 0.2.0

### Minor Changes

- Fix scroll issues on Product Detail Page for small screens
  ([#782](https://github.com/Shopify/hydrogen/pull/782)) by
  [@lifeiscontent](https://github.com/lifeiscontent)

- Fix Layout title on mobile when title is long
  ([#781](https://github.com/Shopify/hydrogen/pull/781)) by
  [@lifeiscontent](https://github.com/lifeiscontent)

### Patch Changes

- Adopt Remix [`v2_meta`](https://remix.run/docs/en/main/route/meta#metav2)
  future flag ([#738](https://github.com/Shopify/hydrogen/pull/738)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  ### `v2_meta` migration steps

  1. For any routes that you used `meta` route export, convert it to the
     `V2_MetaFunction` equivalent. Notice that the package name in the import
     statement has also changed to `'@remix-run/react'`:

     ```diff
     - import {type MetaFunction} from '@shopify/remix-oxygen';
     + import {type V2_MetaFunction} from '@remix-run/react';

     - export const meta: MetaFunction = () => {
     + export const meta: V2_MetaFunction = () => {
     -   return {title: 'Login'};
     +   return [{title: 'Login'}];
       };
     ```

  2. If you are using data from loaders, pass the loader type to the
     `V2_MetaFunction` generic:

     ```diff
     - export const meta: MetaFunction = ({data}) => {
     + export const meta: V2_MetaFunction<typeof loader> = ({data}) => {
     -   return {title: `Order ${data?.order?.name}`};
     +   return [{title: `Order ${data?.order?.name}`}];
       };
     ```

  3. If you are using `meta` route export in `root`, convert it to
     [Global Meta](https://remix.run/docs/en/main/route/meta#global-meta)

     ```diff
     // app/root.tsx

     - export const meta: MetaFunction = () => ({
     -   charset: 'utf-8',
     -   viewport: 'width=device-width,initial-scale=1',
     - });

     export default function App() {

       return (
         <html lang={locale.language}>
           <head>
     +       <meta charSet="utf-8" />
     +       <meta name="viewport" content="width=device-width,initial-scale=1" />
             <Seo />
             <Meta />
     ```

- Adopt `v2_routeConvention` future flag
  ([#747](https://github.com/Shopify/hydrogen/pull/747)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  ## `v2_routeConventions` migration steps

  Remix v2 route conventions are just file renames. We just need to ensure when
  changing file name and file location, the import paths of other files are also
  updated.

  Go to Remix docs for more details on the
  [V2 route convention](https://remix.run/docs/en/main/file-conventions/route-files-v2).

  Rename and move the following files in the `routes` folder to adopt to V2
  route convention.

  <table>
  <tr>
  <th>Before</th>
  <th>After (V2 route convention)</th>
  </tr>
  <tr>
  <td>

  ```txt
  app/routes/
    ├─ [sitemap.xml].tsx
    ├─ [robots.txt].tsx
    └─ ($lang)/
        ├─ $shopid/orders/$token/
        │   └─ authenticate.tsx
        ├─ account/
        │   ├─ __private/
        │   │   ├─ address/
        │   │   │   └─ $id.tsx
        │   │   ├─ orders.$id.tsx
        │   │   ├─ edit.tsx
        │   │   └─ logout.ts
        │   └─ __public/
        │       ├─ recover.tsx
        │       ├─ login.tsx
        │       ├─ register.tsx
        │       ├─ activate.$id.$activationToken.tsx
        │       └─ reset.$id.$resetToken.tsx
        ├─ api/
        │   ├─ countries.tsx
        │   └─ products.tsx
        ├─ collections/
        │   ├─ index.tsx
        │   ├─ $collectionHandle.tsx
        │   └─ all.tsx
        ├─ journal/
        │   ├─ index.tsx
        │   └─ $journalHandle.tsx
        ├─ pages
        │   └─ $pageHandle.tsx
        ├─ policies/
        │   ├─ index.tsx
        │   └─ $policyHandle.tsx
        ├─ products/
        │   ├─ index.tsx
        │   └─ $productHandle.tsx
        ├─ $.tsx
        ├─ account.tsx
        ├─ cart.tsx
        ├─ cart.$lines.tsx
        ├─ discount.$code.tsx
        ├─ featured-products.tsx
        ├─ index.tsx
        └─ search.tsx
  ```

  </td>
  <td valign="top">

  ```txt
  app/routes/
    ├─ [sitemap.xml].tsx
    ├─ [robots.txt].tsx
    ├─ ($lang).$shopid.orders.$token.authenticate.tsx
    ├─ ($lang).account.address.$id.tsx
    ├─ ($lang).account.orders.$id.tsx
    ├─ ($lang).account.edit.tsx
    ├─ ($lang).account.logout.ts
    ├─ ($lang).account.recover.tsx
    ├─ ($lang).account.login.tsx
    ├─ ($lang).account.register.tsx
    ├─ ($lang).account.activate.$id.$activationToken.tsx
    ├─ ($lang).account.reset.$id.$resetToken.tsx
    ├─ ($lang).api.countries.tsx
    ├─ ($lang).api.products.tsx
    ├─ ($lang).collections._index.tsx
    ├─ ($lang).collections.$collectionHandle.tsx
    ├─ ($lang).collections.all.tsx
    ├─ ($lang).journal._index.tsx
    ├─ ($lang).journal.$journalHandle.tsx
    ├─ ($lang).pages.$pageHandle.tsx
    ├─ ($lang).policies._index.tsx
    ├─ ($lang).policies.$policyHandle.tsx
    ├─ ($lang).products._index.tsx
    ├─ ($lang).products.$productHandle.tsx
    ├─ $.tsx
    ├─ ($lang)._index.tsx
    ├─ ($lang).account.tsx
    ├─ ($lang).cart.tsx
    ├─ ($lang).cart.$lines.tsx
    ├─ ($lang).discount.$code.tsx
    ├─ ($lang).featured-products.tsx
    └─ ($lang).search.tsx
  ```

  </td>
  </tr>
  </table>

  ### Optional

  If you want to continue using nested folder routes but have the
  `v2_routeConvention` flag turned on, you may consider using the npm package
  [`@remix-run/v1-route-convention`](https://www.npmjs.com/package/@remix-run/v1-route-convention).

  If you like the flat route convention but still wants a hybrid style of nested
  route folder, you may consider using the npm package
  [`remix-flat-routes`](https://www.npmjs.com/package/remix-flat-routes)

- Adopt Remix
  [`unstable_tailwind`](https://remix.run/docs/en/1.15.0/guides/styling#built-in-tailwind-support)
  and
  [`unstable_postcss`](https://remix.run/docs/en/1.15.0/guides/styling#built-in-postcss-support)
  future flags for the Demo Store template.
  ([#751](https://github.com/Shopify/hydrogen/pull/751)) by
  [@frandiox](https://github.com/frandiox)

  ### `unstable_tailwind` and `unstable_postcss` migration steps

  1. Move the file `<root>/styles/app.css` to `<root>/app/styles/app.css`, and
     remove it from `.gitignore`.

  2. Add `"browserslist": ["defaults"]` to your `package.json`, or your
     preferred [value from Browserslist](https://browsersl.ist/).

  3. Replace the `build` and `dev` scripts in your `package.json` with the
     following:

     **Before**

     ```json
      "scripts": {
        "build": "npm run build:css && shopify hydrogen build",
        "build:css": "postcss styles --base styles --dir app/styles --env production",
        "dev": "npm run build:css && concurrently -g --kill-others-on-fail -r npm:dev:css \"shopify hydrogen dev\"",
        "dev:css": "postcss styles --base styles --dir app/styles -w",
        ...
      }
     ```

     **After**

     ```json
      "scripts": {
        "dev": "shopify hydrogen dev",
        "build": "shopify hydrogen build",
        ...
      }
     ```

  You can also remove dependencies like `concurrently` if you don't use them
  anywhere else.

- Forwards search params of `/discount/<code>` route to a redirect route.
  ([#766](https://github.com/Shopify/hydrogen/pull/766)) by
  [@lneicelis](https://github.com/lneicelis)

- Carts created in liquid will soon be compatible with the Storefront API and
  vice versa, making it possible to share carts between channels.
  ([#721](https://github.com/Shopify/hydrogen/pull/721)) by
  [@scottdixon](https://github.com/scottdixon)

  This change updates the Demo Store to use Online Store's `cart` cookie
  (instead of sessions) which prevents customers from losing carts when
  merchants migrate to/from Hydrogen.

- Bump internal Remix dependencies to 1.15.0.
  ([#728](https://github.com/Shopify/hydrogen/pull/728)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  Recommendations to follow:

  - Upgrade all the Remix packages in your app to 1.15.0.
  - Enable Remix v2 future flags at your earliest convenience following
    [the official guide](https://remix.run/docs/en/1.15.0/pages/v2).

- Updated CLI prompts. It's recommended to update your version of `@shopify/cli`
  to `3.45.0` when updating `@shopify/cli-hydrogen`.
  ([#733](https://github.com/Shopify/hydrogen/pull/733)) by
  [@frandiox](https://github.com/frandiox)

  ```diff
  "dependencies": {
  -  "@shopify/cli": "3.x.x",
  +  "@shopify/cli": "3.45.0",
  }
  ```

- Adopt Remix
  [`v2_errorBoundary`](https://remix.run/docs/en/release-next/route/error-boundary-v2)
  future flag ([#729](https://github.com/Shopify/hydrogen/pull/729)) by
  [@wizardlyhel](https://github.com/wizardlyhel)

  ### `v2_errorBoundary` migration steps

  1. Remove all `CatchBoundary` route exports

  2. Handle route level errors with `ErrorBoundary`

     Before:

     ```jsx
     // app/root.tsx
     export function ErrorBoundary({error}: {error: Error}) {
       const [root] = useMatches();
       const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;

       return (
         <html lang={locale.language}>
           <head>
             <title>Error</title>
             <Meta />
             <Links />
           </head>
           <body>
             <Layout layout={root?.data?.layout}>
               <GenericError error={error} />
             </Layout>
             <Scripts />
           </body>
         </html>
       );
     }
     ```

     After:

     ```jsx
     // app/root.tsx
     import {isRouteErrorResponse, useRouteError} from '@remix-run/react';

     export function ErrorBoundary({error}: {error: Error}) {
       const [root] = useMatches();
       const locale = root?.data?.selectedLocale ?? DEFAULT_LOCALE;
       const routeError = useRouteError();
       const isRouteError = isRouteErrorResponse(routeError);

       let title = 'Error';
       let pageType = 'page';

       // We have an route error
       if (isRouteError) {
         title = 'Not found';

         // We have a page not found error
         if (routeError.status === 404) {
           pageType = routeError.data || pageType;
         }
       }

       return (
         <html lang={locale.language}>
           <head>
             <title>{title}</title>
             <Meta />
             <Links />
           </head>
           <body>
             <Layout
               layout={root?.data?.layout}
               key={`${locale.language}-${locale.country}`}
             >
               {isRouteError ? (
                 <>
                   {routeError.status === 404 ? (
                     <NotFound type={pageType} />
                   ) : (
                     <GenericError
                       error={{
                         message: `${routeError.status} ${routeError.data}`,
                       }}
                     />
                   )}
                 </>
               ) : (
                 <GenericError
                   error={error instanceof Error ? error : undefined}
                 />
               )}
             </Layout>
             <Scripts />
           </body>
         </html>
       );
     }
     ```

- Updated dependencies
  [[`e6e6c2d`](https://github.com/Shopify/hydrogen/commit/e6e6c2da274d0582c6b3b9f298dfd2e86dd4bfbe),
  [`475a39c`](https://github.com/Shopify/hydrogen/commit/475a39c867b0851bba0358b6db9208b664aec68c),
  [`1f8526c`](https://github.com/Shopify/hydrogen/commit/1f8526c750dc1d5aa7ea02e196fffdd14d17a536),
  [`0f4d562`](https://github.com/Shopify/hydrogen/commit/0f4d562a2129e8e03ed123dc572a14a72e487a1b),
  [`737f83e`](https://github.com/Shopify/hydrogen/commit/737f83ebb72fccc2f367532ebaa19ea00b1b3436),
  [`2d4c5d9`](https://github.com/Shopify/hydrogen/commit/2d4c5d9340c5a2458c682aa3f9b12352dacdd759),
  [`68a6028`](https://github.com/Shopify/hydrogen/commit/68a60285a3d563d6e98fb79c3ba6d98eb4ee6be0)]:
  - @shopify/cli-hydrogen@4.1.0
  - @shopify/hydrogen@2023.1.7
  - @shopify/remix-oxygen@1.0.5
