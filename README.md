## 🔗 Links
- ## github repo
cli - https://github.com/Sallbro/backcraft-cli

repository - https://github.com/Sallbro/backcraft-repository

web - https://github.com/Sallbro/backcraft-web

- ## npm package
cli - https://www.npmjs.com/package/backcraft-cli

repository - https://www.npmjs.com/package/backcraft-registry

# Backcraft Registry

The `backcraft-registry` is a companion package for `backcraft-cli` that holds JSON-based registry templates and components. It helps scaffold full applications (`app`) or reusable modules (`component`) into your backend project.

## 📁 Registry Structure


## 📦 Registry Types

- `app`: Full project scaffolds (e.g. blog, ecommerce)
- `component`: Addable components like auth, payment, websocket, etc.

## 📖 Usage

Used with [backcraft-cli](https://github.com/yourusername/backcraft-cli):

```bash
npx backcraft-cli init blog-mongoose.js.json --registry backcraft-registry
npx backcraft-cli add auth-mongo.js.json --registry backcraft-registry
