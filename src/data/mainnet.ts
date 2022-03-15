import { ChainId } from '@sushiswap/sdk'

import { Token } from '../types'
import { assetsPath } from './helpers'

const mainnetTokens: Token[] = [
  {
    address: '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/alchemix.svg',
    name: 'Alchemix',
  },
  {
    address: '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/convex.svg',
    name: 'Convex',
  },
  {
    address: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/dai.svg',
    name: 'DAI',
  },
  {
    address: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/eth.svg',
    name: 'ETH',
  },
  {
    address: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/fei-usd.svg',
    name: 'Fei USD',
  },
  {
    address: '0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/pickle.svg',
    name: 'Pickle',
  },
  {
    address: '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/renbtc.svg',
    name: 'renBTC',
  },
  {
    address: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/stake-ether.svg',
    name: 'stETH',
  },
  {
    address: '0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/tribe.svg',
    name: 'Tribe',
  },
  {
    address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/usdc.svg',
    name: 'USDC',
  },
  {
    address: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/usdt.svg',
    name: 'USDT',
  },
  {
    chainId: ChainId.MAINNET,
    address: '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',
    logoUrl: assetsPath + '/mainnet-tokens/wbtc.svg',
    name: 'WBTC',
  },
  {
    address: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/mainnet-tokens/weth.svg',
    name: 'WETH',
  },
]

export default mainnetTokens
