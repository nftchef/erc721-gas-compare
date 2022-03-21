# ERC721 Contract implementation comparisson

This is a boilerplate test project includes various implementations of the https://eips.ethereum.org/EIPS/eip-721 standard to compare gas Usage for the same functions. This should be used as a starting point to build out functionality. Currently, this repo tests `mint` costs only for the following contract implementations:


1. OpenZeppelin standard
2. ERC721B (Blimpie. by Squeebo aka erc721 slim)
3. ERC721Sequencial by papaver (Genetic chain implementation)
4. Nuclear Nerds ERC721 (Mason/Chance)
5. Azuki ERC721A
6. ERC1155D (erc721-like implementation)

<img width="898" alt="image" src="https://user-images.githubusercontent.com/91582112/159269155-205ed378-5f7f-44b5-990b-09cd4f0f245e.png">

- **Differenece beteen mint costs grow larger (relative) as gas price increases. test this by setting manual gas price in hardhat.config.js**
- **Mint Many example is for minting `10` from each contract implementation**

# Running the tests:

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
