# Backcraft Registry

The `backcraft-registry` is a companion package for `backcraft-cli` that holds JSON-based registry templates and components. It helps scaffold full applications (`app`) or reusable modules (`component`) into your backend project.

## 📁 Registry Structure
templates/ ├── app/ 
           ├── component/ 

## 📦 Registry Types

- `app`: Full project scaffolds (e.g. blog, ecommerce)
- `component`: Addable components like auth, payment, websocket, etc.

## 📖 Usage

Used with [backcraft-cli](https://github.com/yourusername/backcraft-cli):

```bash
npx backcraft-cli init blog-mongoose
npx backcraft-cli add auth-mongo
