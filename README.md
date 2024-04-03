# Cotera Dev Server

## Installation

```
git clone git@github.com:coterahq/cotera-dev-mode.git
cd cotera-dev-mode
npm i
npm run dev
```

## Starting the dev server
```
npm run dev
```

## Line numbers

We're still trying to get line numbers in error messages to survive the `.ts`
=> `.js` translation. They work great in in vitest though, so `npm run test
--watch` will let you see where the errors are
