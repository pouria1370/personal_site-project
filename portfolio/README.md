# Introduction

Hi, my name is Pouria and this is a Portfolio site for my expriences and articles.
I want to share with you all of my knowledge and expriences to not only grasb a high-value review by your side to boost my functionality, but also teach and learn you some thing.

## Stacks

In this implementation i used page-based [Next.js]("www.Nextjs.com") as my main front-end framework for handling all my client stuff with the pnpm command:

```
pnpm create next-app
  or
pnpm create next-app  my-new-app-name
```

for handling the requests, i prefer using [Axios](www.axios.com) and for handling the server-side states-managment [tanstack-query](www.tanstack.com) :

```bash
pnpm add @tanstack/react-query axios
```

> Why using pnpm?  
> for handling better the modules and not occupying the storage more than required, i chose the pnpm for my projects

for handling the formatter and pre-commit issues, [husky](https://typicode.github.io/husky/), [prettier](www.prettier.com) and [Eslint](www.eslint.com) were in the following command configured.

```
pnpm add --save-dev husky prettier eslint
```

All the tests(unit,integration and e2e) and evaluation and UI-documents are handled by [storybook](www.storybook.com), [cypress](www.cypress.com)

```bash
pnpm add --save-dev cypress
pnpm add --save-dev @storybook/nextjs
pnpm dlx storybook@latest init
```

for ahndling the UI and styling [tailwind](www.taiwlind.com) and [Ant-design](www.antdesign.com) are prefered:

```bash
pnpm install antd --save
```

> [!Important]
> Tailwind is installed by deault in during the installing the project with create-next-app

and for the handling the client state managment [zustand](www.zustand.com) is the best one.

```bash
pnpm add zustand
```
