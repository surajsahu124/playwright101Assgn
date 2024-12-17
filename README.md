# Project Name

This repository contains [describe your project briefly].

## Requirements
- Gitpod account
- GitHub account

## Running the Project in Gitpod
To launch the project directly in a Gitpod environment, click the following button:

[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/new/#https://github.com/sahu-suraj/playwright-project.git)

### Steps:
1. Click the **"Open in Gitpod"** button above.
2. Wait for the workspace to initialize.
3. Gitpod will run the project setup commands as defined in `.gitpod.yml`.

## Test Instructions
- Open the terminal inside Gitpod.
- Run the test commands:
  ```bash
  apt update
  apt install -y nodejs npm
  npx playwright install
  chmod +x node_modules/.bin/playwright (run this command if permission denied)
  npx playwright install-deps
  npm install
  npm run test
  ```

## Key Files
- `.gitpod.yml`: Configures Gitpod dev environment.
- `package.json`: Lists dependencies and scripts.
