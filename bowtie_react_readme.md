# Bowtie React App

This is a React application that uses **React Flow** for building interactive diagrams. This guide will help you install dependencies and run the app locally.

---

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- npm (comes with Node.js) or [Yarn](https://yarnpkg.com/)

---

## Installation

1. **Clone the repository** (if you haven’t already):

```bash
git clone <your-repo-url>
cd <your-repo-folder>
```

2. **Install React and React Flow**:

```bash
# Using npm
npm install react react-dom react-scripts react-flow-renderer

# Or using Yarn
yarn add react react-dom react-scripts react-flow-renderer
```

3. **Install other dependencies** (if you have a `package.json`):

```bash
npm install
# or
yarn install
```

---

## Running the App

Start the development server:

```bash
npm start
# or
yarn start
```

This will start your app at [http://localhost:3000](http://localhost:3000) by default. Open this URL in your browser to see your Bowtie app in action.

---

## Project Structure

A typical structure may look like this:

```
bowtie-app/
├─ public/
├─ src/
│  ├─ components/
│  │  └─ BowtieDiagram.jsx
│  ├─ App.jsx
│  └─ index.js
├─ package.json
└─ README.md
```

- `src/components/BowtieDiagram.jsx` – where your React Flow diagram logic resides.  
- `App.jsx` – main app component.  
- `index.js` – app entry point.

---

## Useful Commands

| Command             | Description                          |
|--------------------|--------------------------------------|
| `npm start`         | Run app in development mode          |
| `npm run build`     | Build app for production             |
| `npm test`          | Run tests                            |
| `npm run eject`     | Eject from create-react-app setup   |

---

## Additional Resources

- [React Docs](https://reactjs.org/docs/getting-started.html)  
- [React Flow Docs](https://reactflow.dev/docs/)

