# Using Netlify Edge Functions with RedwoodJS

A starter example that shows how to use [RedwoodJS](https://redwoodjs.com/) with [Netlify Edge functions](https://docs.netlify.com/netlify-labs/experimental-features/edge-functions/).

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ericapisani/sample-redwoodjs-with-edge-netlify)

## Demo site

https://redwood-with-edge-demo.netlify.app/

## Prerequisites

- Redwood requires [Node.js](https://nodejs.org/en/) (>=14.19.x <=16.x) and [Yarn](https://yarnpkg.com/) (>=1.15)
- Netlify Edge Functions requires the [netlify-cli](https://www.npmjs.com/package/netlify-cli)

Start by installing dependencies:

```
yarn install
```

Then start the development server using `netlify` so that the edge function is run as well:

```
netlify dev
```

## Questions and troubleshooting

If you found an issue with the code in this repository, feel free to [open an issue](https://github.com/ericapisani/sample-redwoodjs-with-edge-netlify/issues) or let us know in the [Netlify Forums](https://answers.netlify.com/).