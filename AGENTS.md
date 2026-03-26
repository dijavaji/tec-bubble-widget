# AGENTS.md

## Build, Lint, and Test Commands

### Build
- **Purpose**: While not yet implemented, adding a build process would help package the widget for deployment.
- **Recommendations**:
  - Use tools like Webpack or Vite: `npm install webpack --save-dev`
  - Add a `build` script in `package.json` (e.g., `{ "build": "webpack" }`).
  - Example build command:
    ```sh
    npm run build
    ```

  This will generate a production-ready asset package.

### Lint
- **Purpose**: Maintain code quality, enforcing style consistency.
- **Setup**:
  1. Install ESLint:
     ```sh
     npm install eslint --save-dev
     ```
  2. Generate a config file:
     ```sh
     npx eslint --init
     ```
  3. Add lint scripts to `package.json`:
     ```json
     "scripts": {
       "lint": "eslint .",
       "lint:fix": "eslint . --fix"
     }
     ```

- Example Usage:
  ```sh
  npm run lint
  ```

### Test
- **Purpose**: Ensure functionality, reliability, and maintainability of code.
- **Steps to Add Testing**:
  1. Install Jest:
     ```sh
     npm install jest --save-dev
     ```
  2. Create testing files (e.g., `__tests__/social-button.test.js`).
  3. Add a test script to `package.json`:
     ```json
     "test": "jest"
     ```

- Running Tests:
  ```sh
  npm test
  ```
  Run a specific test with:
  ```sh
  npm test -- --testNamePattern='Test_Name'
  ```

---

## Code Style Guidelines

### General Style
- Use camelCase naming conventions for variables and functions.
- **Classes/Components** should use `PascalCase`.
- Avoid inline styles.
- Descriptive naming for all methods and variables.
  - Example:
    ```javascript
    let isUserLoggedIn = false;
    function handleSubmit() {
      // do something
    }
    ```

---

### Suggested Practices from Vision Document
- Functional requirements like **seamless widget integration** and **third-party interconnectivity** necessitate modular development.
  - **Reusability First**: Organize code into reusable functions/components (e.g., message rendering).

---

### Advancing DevOps based Feedback into Releases...
