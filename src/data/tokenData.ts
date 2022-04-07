import { ChainId, TokenAddress } from '../constants'

const assetsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/v1/assets/token-icons'

const tokenData = {
  // [ChainId.MAINNET]: {
  [TokenAddress[ChainId.MAINNET]['1INCH']]: {
    address: TokenAddress[ChainId.MAINNET]['1INCH'],
    chainId: ChainId.MAINNET,
    logoUrl: null,
    name: '1INCH',
  },
  [TokenAddress[ChainId.MAINNET]['Alchemix']]: {
    address: TokenAddress[ChainId.MAINNET]['Alchemix'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [TokenAddress[ChainId.MAINNET]['Convex']]: {
    address: TokenAddress[ChainId.MAINNET]['Convex'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [TokenAddress[ChainId.MAINNET]['DAI']]: {
    address: TokenAddress[ChainId.MAINNET]['DAI'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  [TokenAddress[ChainId.MAINNET]['ETH']]: {
    address: TokenAddress[ChainId.MAINNET]['ETH'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/eth.svg',
    name: 'ETH',
  },
  [TokenAddress[ChainId.MAINNET]['Fei USD']]: {
    address: TokenAddress[ChainId.MAINNET]['Fei USD'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [TokenAddress[ChainId.MAINNET]['Pickle']]: {
    address: TokenAddress[ChainId.MAINNET]['Pickle'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [TokenAddress[ChainId.MAINNET]['renBTC']]: {
    address: TokenAddress[ChainId.MAINNET]['renBTC'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  [TokenAddress[ChainId.MAINNET]['stETH']]: {
    address: TokenAddress[ChainId.MAINNET]['stETH'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/stake-ether.svg',
    name: 'stETH',
  },
  [TokenAddress[ChainId.MAINNET]['Tribe']]: {
    address: TokenAddress[ChainId.MAINNET]['Tribe'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/tribe.svg',
    name: 'Tribe',
  },
  [TokenAddress[ChainId.MAINNET]['USDC']]: {
    address: TokenAddress[ChainId.MAINNET]['USDC'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC',
  },
  [TokenAddress[ChainId.MAINNET]['USDT']]: {
    address: TokenAddress[ChainId.MAINNET]['USDT'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [TokenAddress[ChainId.MAINNET]['WBTC']]: {
    address: TokenAddress[ChainId.MAINNET]['WBTC'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [TokenAddress[ChainId.MAINNET]['WETH']]: {
    address: TokenAddress[ChainId.MAINNET]['WETH'],
    chainId: ChainId.MAINNET,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
  // },
  // [ChainId.MATIC]: {
  [TokenAddress[ChainId.MATIC]['1INCH']]: {
    address: TokenAddress[ChainId.MATIC]['1INCH'],
    chainId: ChainId.MATIC,
    logoUrl: null,
    name: '1INCH',
  },
  [TokenAddress[ChainId.MATIC]['Alchemix']]: {
    address: TokenAddress[ChainId.MATIC]['Alchemix'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/alchemix.svg',
    name: 'Alchemix',
  },
  [TokenAddress[ChainId.MATIC]['Convex']]: {
    address: TokenAddress[ChainId.MATIC]['Convex'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/convex.svg',
    name: 'Convex',
  },
  [TokenAddress[ChainId.MATIC]['DAI']]: {
    address: TokenAddress[ChainId.MATIC]['DAI'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/dai.svg',
    name: 'DAI',
  },
  // [TokenAddress[ChainId.MATIC]['ETH']]: {
  //   address: TokenAddress[ChainId.MATIC]['ETH'],
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/eth.svg',
  //   name: 'ETH',
  // },
  [TokenAddress[ChainId.MATIC]['Fei USD']]: {
    address: TokenAddress[ChainId.MATIC]['Fei USD'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/fei-usd.svg',
    name: 'Fei USD',
  },
  [TokenAddress[ChainId.MATIC]['Pickle']]: {
    address: TokenAddress[ChainId.MATIC]['Pickle'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/pickle.svg',
    name: 'Pickle',
  },
  [TokenAddress[ChainId.MATIC]['renBTC']]: {
    address: TokenAddress[ChainId.MATIC]['renBTC'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/renbtc.svg',
    name: 'renBTC',
  },
  // [TokenAddress[ChainId.MATIC]['stETH']]: {
  //   address: TokenAddress[ChainId.MATIC]['stETH'],
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/stake-ether.svg',
  //   name: 'stETH',
  // },
  // [TokenAddress[ChainId.MATIC]['Tribe']]: {
  //   address: TokenAddress[ChainId.MATIC]['Tribe'],
  //   chainId: ChainId.MATIC,
  //   logoUrl: assetsPath + '/tribe.svg',
  //   name: 'Tribe',
  // },
  [TokenAddress[ChainId.MATIC]['USDC']]: {
    address: TokenAddress[ChainId.MATIC]['USDC'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdc.svg',
    name: 'USDC (PoS)',
  },
  [TokenAddress[ChainId.MATIC]['USDT']]: {
    address: TokenAddress[ChainId.MATIC]['USDT'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/usdt.svg',
    name: 'USDT',
  },
  [TokenAddress[ChainId.MATIC]['WBTC']]: {
    address: TokenAddress[ChainId.MATIC]['WBTC'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/wbtc.svg',
    name: 'WBTC',
  },
  [TokenAddress[ChainId.MATIC]['WETH']]: {
    address: TokenAddress[ChainId.MATIC]['WETH'],
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/weth.svg',
    name: 'WETH',
  },
  // },
}

export default tokenData
