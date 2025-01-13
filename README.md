# Cypress Automation Template

This project is a template for creating Cypress automation projects using the **Functional Design Pattern**. It is designed with TypeScript and adheres to best practices for test automation.

## Features

- **Functional Design Pattern**: Organized test logic with reusable components and constants.
- **Fixtures**: Centralized constants and test data for easier maintenance.
- **Custom Commands**: Extend Cypress functionality for cleaner and more readable tests.
- **TypeScript Support**: Strongly typed code for better developer experience and error prevention.
- **Prettier & ESLint**: Code formatting and linting to maintain clean and consistent code.

### Getting Started

**Prerequisites**

Ensure you have the following installed:

• **Node.js** (LTS recommended)
• **npm** or **yarn**

**Installation**

1.  Clone this repository:

```
git clone https://github.com/normiaaa/cypress-template.git
cd cypress-automation-template
```

2.  Install dependencies:

```
  npm install
```

**Scripts**

**Open Cypress Test Runner**:

```
npm run cypress:open
```

**Run Tests in Headless Mode**:

```
npm run cypress:run
```

**Code Style**

Run **Prettier** to format code:

```
npm run format
```

Lint your code with **ESLint**:

```
npm run lint
```

**Extra info**

**_Fixtures_**

The fixtures folder is used to store constants and reusable text data for tests. This keeps test cases clean and easy to update.

**_TestIDs_**

The TestIDs folder contains centralized test selectors for easy reference. This helps to avoid hardcoding selectors in test files and makes maintaining selectors more efficient.

**_Custom Commands_**

Custom Cypress commands are defined to simplify and extend test interactions.

### Happy testing with Cypress 🚀
