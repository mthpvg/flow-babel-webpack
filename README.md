# flow-webpack

## Setup
```bash
npm install
npm install flow-bin -g
npm start
```

If no *.flowconfig* file:
```bash
flow init
```

## Editors

### Atom
- install the *linter-flow* package or, not recommended, *nuclide*

### Visual Studio Code
- install the *Flow for Visual Studio Code* extensions
- in the root of the project: `.vscode/settings.json`:

  ```json
  {
      "javascript.validate.enable": false
  }
  ```
