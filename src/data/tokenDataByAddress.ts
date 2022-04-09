import { ChainId } from '../constants'
import tokenAddresses from '../data/tokenAddresses'

const tokenIconsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/master/assets/token-icons'

const tokenDataByAddress = {
  // MAINNET
  [tokenAddresses[ChainId.MAINNET].ALCHEMIX]: {
    address: tokenAddresses[ChainId.MAINNET].ALCHEMIX,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [tokenAddresses[ChainId.MAINNET].CONVEX]: {
    address: tokenAddresses[ChainId.MAINNET].CONVEX,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/convex.svg',
    name: 'Convex',
  },
  [tokenAddresses[ChainId.MAINNET].DAI]: {
    address: tokenAddresses[ChainId.MAINNET].DAI,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/dai.svg',
    name: 'DAI',
  },
  [tokenAddresses[ChainId.MAINNET].ETH]: {
    address: tokenAddresses[ChainId.MAINNET].ETH,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/eth.svg',
    name: 'ETH',
  },
  [tokenAddresses[ChainId.MAINNET].FEI_USD]: {
    address: tokenAddresses[ChainId.MAINNET].FEI_USD,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [tokenAddresses[ChainId.MAINNET].NEAR]: {
    address: tokenAddresses[ChainId.MAINNET].NEAR,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/near.svg',
    name: 'NEAR',
  },
  [tokenAddresses[ChainId.MAINNET].NEUR]: {
    address: tokenAddresses[ChainId.MAINNET].NEUR,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/neur.svg',
    name: 'NEUR',
  },
  [tokenAddresses[ChainId.MAINNET].ONE_INCH]: {
    address: tokenAddresses[ChainId.MAINNET].ONE_INCH,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/1inch.svg',
    name: '1INCH',
  },
  [tokenAddresses[ChainId.MAINNET].PICKLE]: {
    address: tokenAddresses[ChainId.MAINNET].PICKLE,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [tokenAddresses[ChainId.MAINNET].REN_BTC]: {
    address: tokenAddresses[ChainId.MAINNET].REN_BTC,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  [tokenAddresses[ChainId.MAINNET].ST_ETH]: {
    address: tokenAddresses[ChainId.MAINNET].ST_ETH,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/stake-ether.svg',
    name: 'stETH',
  },
  [tokenAddresses[ChainId.MAINNET].TRIBE]: {
    address: tokenAddresses[ChainId.MAINNET].TRIBE,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/tribe.svg',
    name: 'Tribe',
  },
  [tokenAddresses[ChainId.MAINNET].USDC]: {
    address: tokenAddresses[ChainId.MAINNET].USDC,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/usdc.svg',
    name: 'USDC',
  },
  [tokenAddresses[ChainId.MAINNET].USDT]: {
    address: tokenAddresses[ChainId.MAINNET].USDT,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/usdt.svg',
    name: 'USDT',
  },
  [tokenAddresses[ChainId.MAINNET].WBTC]: {
    address: tokenAddresses[ChainId.MAINNET].WBTC,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [tokenAddresses[ChainId.MAINNET].WETH]: {
    address: tokenAddresses[ChainId.MAINNET].WETH,
    chainId: ChainId.MAINNET,
    logoUrl: tokenIconsPath + '/weth.svg',
    name: 'WETH',
  },
  // MATIC
  [tokenAddresses[ChainId.MATIC].ALCHEMIX]: {
    address: tokenAddresses[ChainId.MATIC].ALCHEMIX,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [tokenAddresses[ChainId.MATIC].CONVEX]: {
    address: tokenAddresses[ChainId.MATIC].CONVEX,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/convex.svg',
    name: 'Convex',
  },
  [tokenAddresses[ChainId.MATIC].DAI]: {
    address: tokenAddresses[ChainId.MATIC].DAI,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/dai.svg',
    name: 'DAI',
  },
  // [tokenAddresses[ChainId.MATIC].ETH]: {
  //   address: tokenAddresses[ChainId.MATIC].ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: tokenIconsPath + '/eth.svg',
  //   name: 'ETH',
  // },
  [tokenAddresses[ChainId.MATIC].FEI_USD]: {
    address: tokenAddresses[ChainId.MATIC].FEI_USD,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  // [tokenAddresses[ChainId.MATIC].NEAR]: {
  //   address: tokenAddresses[ChainId.MATIC].NEAR,
  //   chainId: ChainId.MATIC,
  //   logoUrl: null,
  //   name: 'NEAR',
  // },
  [tokenAddresses[ChainId.MATIC].NEUR]: {
    address: tokenAddresses[ChainId.MATIC].NEUR,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/neur.svg',
    name: 'NEUR',
  },
  [tokenAddresses[ChainId.MATIC].ONE_INCH]: {
    address: tokenAddresses[ChainId.MATIC].ONE_INCH,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/1inch.svg',
    name: '1INCH',
  },
  [tokenAddresses[ChainId.MATIC].PICKLE]: {
    address: tokenAddresses[ChainId.MATIC].PICKLE,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [tokenAddresses[ChainId.MATIC].REN_BTC]: {
    address: tokenAddresses[ChainId.MATIC].REN_BTC,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  // [tokenAddresses[ChainId.MATIC].ST_ETH]: {
  //   address: tokenAddresses[ChainId.MATIC].ST_ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: tokenIconsPath + '/stake-ether.svg',
  //   name: 'stETH',
  // },
  // [tokenAddresses[ChainId.MATIC].TRIBE]: {
  //   address: tokenAddresses[ChainId.MATIC].TRIBE,
  //   chainId: ChainId.MATIC,
  //   logoUrl: tokenIconsPath + '/tribe.svg',
  //   name: 'Tribe',
  // },
  [tokenAddresses[ChainId.MATIC].USDC]: {
    address: tokenAddresses[ChainId.MATIC].USDC,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/usdc.svg',
    name: 'USDC (PoS)',
  },
  [tokenAddresses[ChainId.MATIC].USDT]: {
    address: tokenAddresses[ChainId.MATIC].USDT,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/usdt.svg',
    name: 'USDT',
  },
  [tokenAddresses[ChainId.MATIC].WBTC]: {
    address: tokenAddresses[ChainId.MATIC].WBTC,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [tokenAddresses[ChainId.MATIC].WETH]: {
    address: tokenAddresses[ChainId.MATIC].WETH,
    chainId: ChainId.MATIC,
    logoUrl: tokenIconsPath + '/weth.svg',
    name: 'WETH',
  },
}

export default tokenDataByAddress
