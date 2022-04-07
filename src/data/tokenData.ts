import { ChainId, TokenAddress } from '../constants'

const assetsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/v1/assets/token-icons'

const tokenData = {
  [TokenAddress[ChainId.MAINNET].ONE_INCH]: {
    address: TokenAddress[ChainId.MAINNET].ONE_INCH,
    chainId: ChainId.MAINNET,
    logoUrl: null,
    name: '1INCH',
  },
  [TokenAddress[ChainId.MAINNET].ALCHEMIX]: {
    address: TokenAddress[ChainId.MAINNET].ALCHEMIX,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [TokenAddress[ChainId.MAINNET].CONVEX]: {
    address: TokenAddress[ChainId.MAINNET].CONVEX,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [TokenAddress[ChainId.MAINNET].DAI]: {
    address: TokenAddress[ChainId.MAINNET].DAI,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  [TokenAddress[ChainId.MAINNET].ETH]: {
    address: TokenAddress[ChainId.MAINNET].ETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/eth.svg',
    name: 'ETH',
  },
  [TokenAddress[ChainId.MAINNET].FEI_USD]: {
    address: TokenAddress[ChainId.MAINNET].FEI_USD,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [TokenAddress[ChainId.MAINNET].PICKLE]: {
    address: TokenAddress[ChainId.MAINNET].PICKLE,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [TokenAddress[ChainId.MAINNET].REN_BTC]: {
    address: TokenAddress[ChainId.MAINNET].REN_BTC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  [TokenAddress[ChainId.MAINNET].ST_ETH]: {
    address: TokenAddress[ChainId.MAINNET].ST_ETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/stake-ether.svg',
    name: 'stETH',
  },
  [TokenAddress[ChainId.MAINNET].TRIBE]: {
    address: TokenAddress[ChainId.MAINNET].TRIBE,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/tribe.svg',
    name: 'Tribe',
  },
  [TokenAddress[ChainId.MAINNET].USDC]: {
    address: TokenAddress[ChainId.MAINNET].USDC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC',
  },
  [TokenAddress[ChainId.MAINNET].USDT]: {
    address: TokenAddress[ChainId.MAINNET].USDT,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [TokenAddress[ChainId.MAINNET].WBTC]: {
    address: TokenAddress[ChainId.MAINNET].WBTC,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [TokenAddress[ChainId.MAINNET].WETH]: {
    address: TokenAddress[ChainId.MAINNET].WETH,
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
  [TokenAddress[ChainId.MATIC].ONE_INCH]: {
    address: TokenAddress[ChainId.MATIC].ONE_INCH,
    chainId: ChainId.MATIC,
    logoUrl: null,
    name: '1INCH',
  },
  [TokenAddress[ChainId.MATIC].ALCHEMIX]: {
    address: TokenAddress[ChainId.MATIC].ALCHEMIX,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [TokenAddress[ChainId.MATIC].CONVEX]: {
    address: TokenAddress[ChainId.MATIC].CONVEX,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [TokenAddress[ChainId.MATIC].DAI]: {
    address: TokenAddress[ChainId.MATIC].DAI,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  // [TokenAddress[ChainId.MATIC].ETH]: {
  //   address: TokenAddress[ChainId.MATIC].ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/eth.svg',
  //   name: 'ETH',
  // },
  [TokenAddress[ChainId.MATIC].FEI_USD]: {
    address: TokenAddress[ChainId.MATIC].FEI_USD,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [TokenAddress[ChainId.MATIC].PICKLE]: {
    address: TokenAddress[ChainId.MATIC].PICKLE,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [TokenAddress[ChainId.MATIC].REN_BTC]: {
    address: TokenAddress[ChainId.MATIC].REN_BTC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  // [TokenAddress[ChainId.MATIC].ST_ETH]: {
  //   address: TokenAddress[ChainId.MATIC].ST_ETH,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/stake-ether.svg',
  //   name: 'stETH',
  // },
  // [TokenAddress[ChainId.MATIC].TRIBE]: {
  //   address: TokenAddress[ChainId.MATIC].TRIBE,
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/tribe.svg',
  //   name: 'Tribe',
  // },
  [TokenAddress[ChainId.MATIC].USDC]: {
    address: TokenAddress[ChainId.MATIC].USDC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC (PoS)',
  },
  [TokenAddress[ChainId.MATIC].USDT]: {
    address: TokenAddress[ChainId.MATIC].USDT,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [TokenAddress[ChainId.MATIC].WBTC]: {
    address: TokenAddress[ChainId.MATIC].WBTC,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [TokenAddress[ChainId.MATIC].WETH]: {
    address: TokenAddress[ChainId.MATIC].WETH,
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
}

export default tokenData
