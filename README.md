# Token data shipper &middot; [![npm version](https://img.shields.io/npm/v/token-data-shipper)](https://www.npmjs.com/package/token-data-shipper)

## Installation

`npm install token-data-shipper`

## Example

```ts
import { getTokenData } from 'token-data-shipper'

const tokenData = getTokenData({
  tokenAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC token address.
})

console.log(tokenData)

// {
//   address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//   chainId: 1,
//   logoUrl: 'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/master/assets/mainnet-tokens/usdc.svg',
//   name: 'USDC',
// }
```
