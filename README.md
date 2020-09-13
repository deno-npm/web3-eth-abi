# web3-eth-abi

[![NPM Package][npm-image]][npm-url] [![Dependency Status][deps-image]][deps-url] [![Dev Dependency Status][deps-dev-image]][deps-dev-url]

This is a sub-package of [web3.js][repo].

This is the abi package used in the `web3-eth` package.

Please read the [documentation][docs] for more.

## Usage

```js
import Web3EthAbi from 'https://deno.land/x/npm_web3_eth_abi@0.0.1/mod.js';

Web3EthAbi.encodeFunctionSignature('myMethod(uint256,string)') // 0x24ee0097
```

## TODO
- [ ] Merge types

[docs]: http://web3js.readthedocs.io/en/1.0/
[repo]: https://github.com/ethereum/web3.js
[npm-image]: https://img.shields.io/npm/v/web3-eth-abi.svg
[npm-url]: https://npmjs.org/package/web3-eth-abi
[deps-image]: https://david-dm.org/ethereum/web3.js/1.x/status.svg?path=packages/web3-eth-abi
[deps-url]: https://david-dm.org/ethereum/web3.js/1.x?path=packages/web3-eth-abi
[deps-dev-image]: https://david-dm.org/ethereum/web3.js/1.x/dev-status.svg?path=packages/web3-eth-abi
[deps-dev-url]: https://david-dm.org/ethereum/web3.js/1.x?type=dev&path=packages/web3-eth-abi
