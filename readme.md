# ERC721 Contract implementation comparisson

This is a boilerplate test project includes various implementations of the https://eips.ethereum.org/EIPS/eip-721 standard to compare gas Usage for the same functions. This should be used as a starting point to build out functionality.

1. OpenZeppelin standard
2. ERC721B (Blimpie. by Squeebo)
3. ERC721Sequencial by papaver (Genetic chain implementation)

## Getting started.

This project uses hardhat to run tests. install the dependencies with

```
yarn
```

then, run the included tests with

```
npx hardhat test
```

\*Note: the included tests do not have any assertions, they are simply used to run functions and report the gasUsed.

## Settings

check hardhat.config.js for settings. the optimizer is turned on at 1200 runs.
