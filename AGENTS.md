# AGENTS.md

## Project Overview

The Bubble Widget is a lightweight, embeddable chat widget for the Smart Chatbot system, designed for seamless integration with any website or CMS. It provides real-time messaging, AI-powered responses, and seamless handoffs to human agents.

## Development Requirements

-   Node.js (v14+ recommended)
-   NPM or Yarn

## Running Locally

1.  Install dependencies:
    ```sh
    npm install
    ```
2.  Start the development server:
    ```sh
    npm start
    ```

## Build, Lint, and Test Commands

### Build
-   **Purpose**: While not yet explicitly implemented in `package.json` or `README.md`, adding a build process is recommended to package the widget for deployment.
-   **Recommendations**:
    -   Use tools like Webpack or Vite (`npm install webpack --save-dev`).
    -   Add a `build` script in `package.json` (e.g., `{ "build": "webpack" }`).
    -   Example build command: `npm run build`

### Lint
-   **Purpose**: Maintain code quality and enforce style consistency.
-   **Setup**:
    1.  Install ESLint: `npm install eslint --save-dev`
    2.  Generate a config file: `npx eslint --init`
    3.  Add lint scripts to `package.json`:
        ```json
        "scripts": {
          "lint": "eslint .",
          "lint:fix": "eslint . --fix"
        }
        ```
-   **Usage**: `npm run lint`

### Test
-   **Purpose**: Ensure functionality, reliability, and maintainability of code.
-   **Setup**:
    1.  Install Jest: `npm install jest --save-dev`
    2.  Create testing files (e.g., `__tests__/social-button.test.js`).
    3.  Add a test script to `package.json`: `"test": "jest"`
-   **Usage**:
    ```sh
    npm test
    npm test -- --testNamePattern='Test_Name' # Run a specific test
    ```

## Code Style Guidelines

### General Style
-   Use `camelCase` for variables and functions.
-   Classes/Components should use `PascalCase`.
-   Avoid inline styles.
-   Use descriptive naming for all methods and variables.

### Suggested Practices
-   **Reusability First**: Organize code into reusable functions/components (e.g., message rendering) due to functional requirements like seamless widget integration and third-party interconnectivity.
