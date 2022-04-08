import { ChainId } from '../constants'
import tokenAddresses from '../data/tokenAddresses'

const assetsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/v1/assets/token-icons'

const tokenDataByAddress = {
  // MAINNET
  [tokenAddresses[ChainId.MAINNET].ONE_INCH]: {
    address: tokenAddresses[ChainId.MAINNET].ONE_INCH,
    chainId: ChainId.MAINNET,
    logoUrl: null,
    name: '1INCH',
  },
  [tokenAddresses[ChainId.MAINNET].ALCHEMIX]: {
    address: tokenAddresses[ChainId.MAINNET].ALCHEMIX,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [tokenAddresses[ChainId.MAINNET].CONVEX]: {
    address: tokenAddresses[ChainId.MAINNET].CONVEX,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [tokenAddresses[ChainId.MAINNET].DAI]: {
    address: tokenAddresses[ChainId.MAINNET].DAI,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  [tokenAddresses[ChainId.MAINNET].ETH]: {
    address: tokenAddresses[ChainId.MAINNET].ETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/eth.svg',
    name: 'ETH',
  },
  [tokenAddresses[ChainId.MAINNET].FEI_USD]: {
    address: tokenAddresses[ChainId.MAINNET].FEI_USD,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [tokenAddresses[ChainId.MAINNET].NEAR]: {
    address: tokenAddresses[ChainId.MAINNET].NEAR,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/near.svg',
    name: 'NEAR',
  },
  [tokenAddresses[ChainId.MAINNET].PICKLE]: {
    address: tokenAddresses[ChainId.MAINNET].PICKLE,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [tokenAddresses[ChainId.MAINNET].REN_BTC]: {
    address: tokenAddresses[ChainId.MAINNET].REN_BTC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  [tokenAddresses[ChainId.MAINNET].ST_ETH]: {
    address: tokenAddresses[ChainId.MAINNET].ST_ETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/stake-ether.svg',
    name: 'stETH',
  },
  [tokenAddresses[ChainId.MAINNET].TRIBE]: {
    address: tokenAddresses[ChainId.MAINNET].TRIBE,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/tribe.svg',
    name: 'Tribe',
  },
  [tokenAddresses[ChainId.MAINNET].USDC]: {
    address: tokenAddresses[ChainId.MAINNET].USDC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC',
  },
  [tokenAddresses[ChainId.MAINNET].USDT]: {
    address: tokenAddresses[ChainId.MAINNET].USDT,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [tokenAddresses[ChainId.MAINNET].WBTC]: {
    address: tokenAddresses[ChainId.MAINNET].WBTC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [tokenAddresses[ChainId.MAINNET].WETH]: {
    address: tokenAddresses[ChainId.MAINNET].WETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
  // MATIC
  [tokenAddresses[ChainId.MATIC].ONE_INCH]: {
    address: tokenAddresses[ChainId.MATIC].ONE_INCH,
    chainId: ChainId.MATIC,
    logoUrl: null,
    name: '1INCH',
  },
  [tokenAddresses[ChainId.MATIC].ALCHEMIX]: {
    address: tokenAddresses[ChainId.MATIC].ALCHEMIX,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [tokenAddresses[ChainId.MATIC].CONVEX]: {
    address: tokenAddresses[ChainId.MATIC].CONVEX,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [tokenAddresses[ChainId.MATIC].DAI]: {
    address: tokenAddresses[ChainId.MATIC].DAI,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  // [tokenAddresses[ChainId.MATIC].ETH]: {
  //   address: tokenAddresses[ChainId.MATIC].ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/eth.svg',
  //   name: 'ETH',
  // },
  [tokenAddresses[ChainId.MATIC].FEI_USD]: {
    address: tokenAddresses[ChainId.MATIC].FEI_USD,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  // [tokenAddresses[ChainId.MATIC].NEAR]: {
  //   address: tokenAddresses[ChainId.MATIC].NEAR,
  //   chainId: ChainId.MATIC,
  //   logoUrl: null,
  //   name: 'NEAR',
  // },
  [tokenAddresses[ChainId.MATIC].PICKLE]: {
    address: tokenAddresses[ChainId.MATIC].PICKLE,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [tokenAddresses[ChainId.MATIC].REN_BTC]: {
    address: tokenAddresses[ChainId.MATIC].REN_BTC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  // [tokenAddresses[ChainId.MATIC].ST_ETH]: {
  //   address: tokenAddresses[ChainId.MATIC].ST_ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/stake-ether.svg',
  //   name: 'stETH',
  // },
  // [tokenAddresses[ChainId.MATIC].TRIBE]: {
  //   address: tokenAddresses[ChainId.MATIC].TRIBE,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/tribe.svg',
  //   name: 'Tribe',
  // },
  [tokenAddresses[ChainId.MATIC].USDC]: {
    address: tokenAddresses[ChainId.MATIC].USDC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC (PoS)',
  },
  [tokenAddresses[ChainId.MATIC].USDT]: {
    address: tokenAddresses[ChainId.MATIC].USDT,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [tokenAddresses[ChainId.MATIC].WBTC]: {
    address: tokenAddresses[ChainId.MATIC].WBTC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [tokenAddresses[ChainId.MATIC].WETH]: {
    address: tokenAddresses[ChainId.MATIC].WETH,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
}

export default tokenDataByAddress
