# RedwoodJS Edge Demo

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/ericapisani/sample-redwoodjs-with-edge-netlify)

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

## Additional setup
As a first pass, the home page component makes a request to the edge function using the `BASE_URL` environment variable in order to get geolocation data.

A value is set locally as a default value in the `.env.defaults` file, but a different value will need to be provided for the production build.

As a first pass, this was achieved by specifying that the `BASE_URL` environment variable be included in the `redwood.toml` file as mentioned in the [RedwoodJS docs](https://redwoodjs.com/docs/environment-variables#including-environment-variables) and the value itself stored via the Netlify UI (Site Settings > Build & deploy > Environment section).
