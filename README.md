# FactoryFour Status

Bootstraped with: [Vite](https://github.com/vitejs/vite), [React](https://reactjs.org/), [Typescript](https://www.typescriptlang.org/), [Eslint](https://eslint.org/), [Prettier](https://prettier.io/), [Husky](https://typicode.github.io/husky/), [Lint Staged](https://github.com/okonet/lint-staged), [Styled Components](https://styled-components.com/), [React Query](https://tanstack.com/query), [Zod](https://zod.dev/).

Welcome to the FactoryFour App, a React application implementing Domain-Driven Design (DDD) principles to ensure a clean and modular architecture. This app is containerized using Docker for easy setup and deployment.

## Features

- Built with React 18 for the latest features in UI development.
- Uses React Query for efficient server state management in React.
- Styled with Styled Components for dynamic styling.
- Validates data with Zod, an TypeScript-first schema validation with static type inference.
- Implements DDD approach in the folder structure for clear domain separation.
- Container-ready with Docker and Docker Compose support.

## Getting Started

To get started with the FactoryFour App, ensure you have [Node.js](https://nodejs.org/en/) and [Docker](https://www.docker.com/) installed on your system.

### Installation

Clone the repository to your local machine:

```bash
git clone https://github.com/BadMastropiero/FactoryFourAPP
cd FactoryFourAPP
yarn install
yarn dev
```
your app will run in http://localhost:5174/

or if you want to use Docker

```bash
docker-compose up --build
```

This command will build and start the app. Your app will now be accessible at http://localhost.

### Scripts

```
npm run dev: Starts the development server using Vite.
npm run build: Builds the app for production.
npm run serve: Serves the built app using Vite preview.
npm run lint: Lints the codebase for potential errors.
npm run lint:fix: Fixes lint errors in the codebase.
npm run format:check: Checks the code formatting using Prettier.
npm run format:fix: Auto-formats the code using Prettier.
npm run type-check: Runs TypeScript compiler to check types.
npm run test: Runs tests with Vitest.
npm run prepare: Sets up Husky for pre-commit hooks.
```
### Project Structure

The FactoryFour App is structured following Domain-Driven Design (DDD) to encapsulate the domain logic:

**src/components:** Reusable UI components.
**src/config:** Application configuration settings.
**src/hooks:** Reusable pieces of logic
**src/styles:** Global styles and theming.
**src/views:** The entry point of the app.
**src/modules:** Business blocks of related logic. 

In this project, each module is subdivided into Application, that contains the UI pieces involved, Domain that contains the most important types and data models, and Infrastructure, that contains the Logic part of the components, API calls, State Management, etc. 
