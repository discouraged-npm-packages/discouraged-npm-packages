# Discouraged Npm Packages
List of npm packages you should stop using.

Npm is full of junk that should best be avoided.
- Some packages are discontinued and don't get any updates any more.
- Some packages forget to deprecate themself and dose not provide you with any information of what you should use instead.
- Some packages can even be harmful
- Some are not even needed as there are native solution built in to the language itself
- Some have a phobia for large bundles and have no control over those 1000 uncontrolled dependencies. Every dependency is a potential security risk that you have no controll over.

This is an attempt to help out fleshing this things out.
I will attempt to make a plugin that can work with some certain build tools, such as a lint plugin or something that can scan package(-lock).json for any (dev)Dependency or sub dependency and provide you with a json db linking to the relevant discussion

This list of discouraged npm packages is by no mean one sideded. The idea is for the ppl to [vote](https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/categories/should-stop-using) on packages to be disccuraged and if some ratio is meet then it will update the list of disccuraged npm packages. Then i will probably try to automate this process somehow


## Making a request to discourage a package

Please don't add anything just out of own preferable taste. Don't just fork a package and say that ppl should use your own package instead cuz your is doing one thing better. it should have a legit reason for something to be considered generally discouraged. Such as being really outdated or being unmaintained or just being very bloated.

1. First look if the package already exist among the [disccusions](https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/categories/should-stop-using) or search in [db.json](https://github.com/discouraged-npm-packages/discouraged-npm-packages/blob/main/db.json)
1. If the package do not already exist head to create a new [poll discussion](https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/new?category=should-stop-using)
2. for the title: only write the name of the npm package.
2. then for the body use this template belove (gituhb don't support discussion templates yet)
<details>
  <summary>template</summary>

````md

## Developer Should Stop Using: [_____](https://www.npmjs.com/package/_____)

## Reasons:

<!-- Put [x] for the reasons you think it should not be used -->

- [ ] Is Legacy
- [ ] It is deprecated or should be deprecated
- [ ] There is an alternative package for this
- [ ] It is not Maintained
- [ ] It is buggy
- [ ] It has vulnerability
- [ ] Bloated <!-- (too large in size) -->
- [ ] Should use builtin solution instead
- [ ] It is not a good cross platform/worker solution <!-- Depends on many core Node feature to be browserified or work in Deno land  -->
- [ ] Has unnecessary / unwanted access to filesystem or network

## Alternative solution

```js
// this two exist in all environment and works anywhere
new TextEncoder().encode()
new TextDecoder().decode()
```

````
</details>

3. then for the poll write: **Should \`___\` be discouraged?** yes|no

## Using this module
```js
// npm i https://github.com/discouraged-npm-packages/discouraged-npm-packages --save-dev
// yarn add https://github.com/discouraged-npm-packages/discouraged-npm-packages -d

import discouragedPackages from 'discouraged-npm-packages' // or:
import discouragedPackages from 'https://cdn.jsdelivr.net/gh/discouraged-npm-packages/discouraged-npm-packages@master/mod.js'

const votes = 'https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/'
const pkg = discouragedPackages['pad-left']

console.log('number of votes:', pkg.voted)
console.log('percentage of how many agrees:', pkg.percentage)
console.log('number of ppl saying yes:', pkg.yes)
console.log('number of ppl saying no:', pkg.no)

// open up reasons and details on why and how to solve things
window.open(votes + pkg.id)
```
