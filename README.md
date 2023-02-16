# Featurefm

This project was generated using [Nx](https://nx.dev).

Node Version: 18

## Installing

1. Install NX if not installed already
   `npm install -g nx`
2. Install packages
   `npm install` or `yarn`
3. Run website in dev mode:
   `nx serve website`

## Developing

1. Adding a componenet to the design system example:
   `nx g @nrwl/react:component button --project=design-system --export`
2. Adding a componenet to the design system under a specific directory example:
   `nx g @nrwl/react:component linkedin-icon --directory=lib/icons --project=design-system --export`

# StoryBook

1. Run the storybook app:
   `nx run design-system:storybook` or `npm run storybook-ds`
2. Regenerate stories
   `nx g @nrwl/react:stories design-system`

If you happen to get this error `nodejs 17: digital envelope routines::unsupported #14532` please add this env variable:
`export NODE_OPTIONS=--openssl-legacy-provider`
learn more here: https://github.com/webpack/webpack/issues/14532

# Other useful commands:

## Generate an application

Run `nx g @nrwl/react:app my-app` to generate an application.

> You can use any of the plugins above to generate applications as well.

When using Nx, you can create multiple applications and libraries in the same workspace.

## Generate a library

Run `nx g @nrwl/react:lib my-lib` to generate a library.

> You can also use any of the plugins above to generate libraries as well.

Libraries are shareable across libraries and applications. They can be imported from `@featurefm/mylib`.

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `nx g @nrwl/react:component my-component --project=my-app` to generate a new component.

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
