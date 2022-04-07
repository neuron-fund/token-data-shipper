import ChainId from './ChainId'

const TokenAddress = {
  [ChainId.MAINNET]: {
    '1INCH': '0x111111111117dC0aa78b770fA6A738034120C302',
    Alchemix: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
    Convex: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    DAI: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    ETH: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    'Fei USD': '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
    Pickle: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
    renBTC: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
    stETH: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    Tribe: '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
    USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    WBTC: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    WETH: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  [ChainId.MATIC]: {
    '1INCH': '0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f',
    Alchemix: '0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89',
    Convex: '0x4257EA7637c355F81616050CbB6a9b709fd72683',
    DAI: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    // ETH: 'ToDo: Find address.',
    'Fei USD': '0xc7031408C7978da9aCA03308CD104cb54E7A2EB3',
    Pickle: '0x2b88aD57897A8b496595925F43048301C37615Da',
    renBTC: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
    // stETH: 'ToDo: Find address.',
    // Tribe: 'ToDo: Find address.',
    USDC: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    USDT: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
    WBTC: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
    WETH: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
  },
}

export default TokenAddress

/* TokenAddress[TokenName][ChainId] variant. */
// const TokenAddress = {
//   '1INCH': {
//     [ChainId.MAINNET]: '0x111111111117dC0aa78b770fA6A738034120C302',
//     [ChainId.MATIC]: '0x9c2C5fd7b07E95EE044DDeba0E97a665F142394f',
//   },
//   Alchemix: {
//     [ChainId.MAINNET]: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
//     [ChainId.MATIC]: '0x95c300e7740D2A88a44124B424bFC1cB2F9c3b89',
//   },
//   Convex: {
//     [ChainId.MAINNET]: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
//     [ChainId.MATIC]: '0x4257EA7637c355F81616050CbB6a9b709fd72683',
//   },
//   DAI: {
//     [ChainId.MAINNET]: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
//     [ChainId.MATIC]: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
//   },
//   ETH: {
//     [ChainId.MAINNET]: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
//     [ChainId.MATIC]: 'ToDo: Find address.',
//   },
//   'Fei USD': {
//     [ChainId.MAINNET]: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
//     [ChainId.MATIC]: '0xc7031408C7978da9aCA03308CD104cb54E7A2EB3',
//   },
//   Pickle: {
//     [ChainId.MAINNET]: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
//     [ChainId.MATIC]: '0x2b88aD57897A8b496595925F43048301C37615Da',
//   },
//   renBTC: {
//     [ChainId.MAINNET]: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
//     [ChainId.MATIC]: '0xDBf31dF14B66535aF65AaC99C32e9eA844e14501',
//   },
//   stETH: {
//     [ChainId.MAINNET]: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
//     [ChainId.MATIC]: 'ToDo_Find_Address',
//   },
//   Tribe: {
//     [ChainId.MAINNET]: '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
//     [ChainId.MATIC]: 'ToDo_Find_Address',
//   },
//   USDC: {
//     [ChainId.MAINNET]: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
//     [ChainId.MATIC]: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
//   },
//   USDT: {
//     [ChainId.MAINNET]: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
//     [ChainId.MATIC]: '0xc2132D05D31c914a87C6611C10748AEb04B58e8F',
//   },
//   WBTC: {
//     [ChainId.MAINNET]: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
//     [ChainId.MATIC]: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
//   },
//   WETH: {
//     [ChainId.MAINNET]: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
//     [ChainId.MATIC]: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
//   },
// }
