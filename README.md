# discouraged-npm-packages
List of npm packages you should stop using.

Npm is full of junk that should best be avoided.
- Some packages are discontinued and don't get any updates any more.
- Some packages forget to deprecate themself and dose not provide you with any information of what you should use instead.
- Some packages can even be harmful

This organisation is an attempt to help out fleshing this things out. 
I will attempt to make a plugin that can work with some certain build tools, such as a lint plugin or something that can scan package(-lock).json for any (dev)Dependency or sub dependency and provide you with a json db linking to the relevant topic

this list of discouraged npm packages is by no mean one sideded. The idea is for the ppl to vote on issues/packages to be disccuraged and if some ratio is meet then it will update the list of disccuraged npm packages


## Making a request to discourage a package

1. First look if the package already exist [here](https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/categories/should-stop-using)
1. If the package is not already listed head create a new [poll discussion](https://github.com/discouraged-npm-packages/discouraged-npm-packages/discussions/new?category=should-stop-using)
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
