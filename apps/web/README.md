# Web

Built using [SolidStart](https://start.solidjs.com) which was bootstrapped via [Solid-CLI](https://solid-cli.netlify.app)

# Installation

Get the `CLIENT ID` and `CLIENT SECRET` from here: https://genius.com/api-clients and replace `VITE_GENIUS_CLIENT_ID` and `VITE_GENIUS_CLIENT_SECRET` with the values respectively.

Make sure the `REDIRECT URI` is `VITE_LOCAL_BASE_URL/api/signup-login`. Replace `VITE_LOCAL_BASE_URL` with the URL your app is running on. 

# Developing

Install the dependencies by running `pnpm i` and then running the project by `pnpm run dev`. By default the app will run on port `3000`

# Building

Use `pnpm run build` to build the project and start it by `pnpm run start`