# Playwright Basic repository

This is a basic Playwright repository. It contains nothing more than Playwright packages, a simple Playwright configuration file, and a sample test file. 

This repository's purpose is to be a simple environment that somebody could clone and then have a test file to try out Playwright functionality. It is not intended to be a foundation of another project, but more of a sandbox or "hello world" repository for trying out Playwright.

## Installation

1. Install a recent version of [Node.js](https://nodejs.org/) on your system.
2. Clone this repo.
3. Install the packages in this repo by running: `npm install`

For documentation on Playwright functionality, visit [Playwright's "Getting Started" page](https://playwright.dev/docs/intro).

## Usage

See the `sample.test.mjs` file in the `tests` subdirectory.  To run the test, run:  

```
npx playwright test sample.test.mjs
```
You should see an output that looks like this:
```
Running 1 test using 1 worker

  ✓  1 sample.test.mjs:6:3 › Sample tests › has title (3.6s)

  1 passed (4.1s)
```

Additionally, you can run the npm "test" script defined in `package.json`. (It runs the same command):
```
npm run test
```

## License

[MIT](https://choosealicense.com/licenses/mit/)