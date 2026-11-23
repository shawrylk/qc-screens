# qc-screens

Capture and compare screenshots across application targets with Playwright. A screen map defines the targets and the routes to capture. The CLI can also list screens, open them in Chrome, and manage sign-in sessions.

## Run

Use Node.js 24 and install Google Chrome for browser commands. Install the screen packages in the project that contains the screen map.

```sh
npm install -D playwright pixelmatch pngjs
```

Replace `<sha>` with a commit SHA from this repository. If npm blocks Git dependencies, set `npm_config_allow_git=all` in your environment.

```sh
npx --yes github:shawrylk/qc-screens#<sha> --help
npx --yes github:shawrylk/qc-screens#<sha> list --map screens.json
npx --yes github:shawrylk/qc-screens#<sha> --map screens.json --targets local,staging --out screenshots
```

This tool came from [architecture-kit at `7883543`](https://github.com/shawrylk/architecture-kit/tree/7883543/packages/qc-harness).
