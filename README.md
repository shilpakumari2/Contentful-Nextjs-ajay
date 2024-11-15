This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started
First install the contentful package from node

```bash
npm install contentful
```

Then Install the rich-text-react-renderer

```bash
npm install @contentful/rich-text-react-renderer
```
if the above one throws any error like

    ```
    npm ERR! code ERESOLVE
    npm ERR! ERESOLVE unable to resolve dependency tree
    npm ERR!
    npm ERR! While resolving: contentful_nextjs@0.1.0
    npm ERR! Found: react@19.0.0-rc-66855b96-20241106
    npm ERR! node_modules/react
    npm ERR!   react@"19.0.0-rc-66855b96-20241106" from the root project
    npm ERR!
    npm ERR! Could not resolve dependency:
    npm ERR! peer react@"^16.8.6 || ^17.0.0 || ^18.0.0" from @contentful/rich-text-react-renderer@16.0.0
    npm ERR! node_modules/@contentful/rich-text-react-renderer
    npm ERR!   @contentful/rich-text-react-renderer@"*" from the root project
    ```

    
Then follow below commands
```bash
	npm install @contentful/rich-text-react-renderer --legacy-peer-deps
	npm uninstall react react-dom
	npm install react@18 react-dom@18
	npm install @contentful/rich-text-react-renderer
```

Next, to run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
