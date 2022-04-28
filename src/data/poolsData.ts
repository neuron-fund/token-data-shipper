import ChainId from '../constants/ChainId'
import PoolData from '../types/PoolData'
import poolAddresses from './poolAddresses'

const tokenIconsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/master/assets/token-icons'

const poolsData: Record<ChainId, Record<string, PoolData>> = {
  [ChainId.MAINNET]: {
    [poolAddresses[ChainId.MAINNET].CURVE_THREE_CRV]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/crv.svg',
      inputAssetsNames: '3Crv',
      inputTokenName: '3Crv',
      poolAddress: poolAddresses[ChainId.MAINNET].CURVE_THREE_CRV,
      zapperAppId: 'curve',

      gaugeAddress: '0x4bBea3ff3b3f2Cdd822cFa1b0aeB174f9b132a9f',
      inputTokenAddress: '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490', // ToDo: Replace with constant.
      inputTokenExchangeUrl: 'https://curve.fi/3pool/deposit',
      poolSlug: 'Curve3Crv',
      strategyAddress: '0x9B2dA857A28AD376A3352b4282e60566bAb29710', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].CURVE_REN_CRV]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/crv.svg',
      inputAssetsNames: 'crvRenWBTC',
      inputTokenName: 'crvRenWBTC',
      poolAddress: poolAddresses[ChainId.MAINNET].CURVE_REN_CRV,
      zapperAppId: 'curve',

      gaugeAddress: '0xeEa594DFfCF7F9255283ef4Bc7aeC0A45846cC4f',
      inputTokenAddress: '0x49849C98ae39Fff122806C06791Fa73784FB3675', // ToDo: Replace with constant.
      inputTokenExchangeUrl: 'https://curve.fi/ren/deposit',
      poolSlug: 'CurveRenCrv',
      strategyAddress: '0xeFaEbee13d358729f319aD54b396A2Daa9127a69', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].CURVE_STE_CRV]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/crv.svg',
      inputAssetsNames: 'steCRV',
      inputTokenName: 'steCRV',
      poolAddress: poolAddresses[ChainId.MAINNET].CURVE_STE_CRV,
      zapperAppId: 'curve',

      gaugeAddress: '0x177D46255772A8e0387Ad49Ca3A9CDa0E36d95B8',
      inputTokenAddress: '0x06325440D014e39736583c165C2963BA99fAf14E', // ToDo: Replace with constant.
      inputTokenExchangeUrl: 'https://curve.fi/steth/deposit',
      poolSlug: 'CurveSteCrv',
      strategyAddress: '0x0B5053D8164ec0a6085880e67aC790709d1893F5', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].FEI_TRIBE_LP]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/fei-usd.svg',
      inputAssetsNames: 'UNI FEI/TRIBE',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MAINNET].FEI_TRIBE_LP,
      zapperAppId: 'uniswap-v2',

      gaugeAddress: '0xBc4f73ee11aD575f673fC57Dab51134f983FC1eF',
      inputTokenAddress: '0x9928e4046d7c6513326cCeA028cD3e7a91c7590A', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://app.uniswap.org/#/add/v2/0x956f47f50a910163d8bf957cf5846d573e7f87ca/0xc7283b66eb1eb5fb86327f08e1b5816b0720212b',
      poolSlug: 'FeiTribeLp',
      strategyAddress: '0x70a1aE76d37bADe6f051E769962c127EFbCC14Ca', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_ALCHEMIX_LP]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/alchemix.svg',
      inputAssetsNames: 'SLP ETH/ALCX',
      inputTokenName: 'SLP',
      poolAddress: poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_ALCHEMIX_LP,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0x69Eb3e119aee91c604c39d2F2b092b17A88500f0',
      inputTokenExchangeUrl:
        'https://app.sushi.com/add/ETH/0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',
      inputTokenAddress: '0xC3f279090a47e80990Fe3a9c30d24Cb117EF91a8', // ToDo: Replace with constant.
      poolSlug: 'SushiDoubleEthAlcxLp',
      strategyAddress: '0xf237D7aCF377952E1B945E7F94a37ecF270e902E', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_CONVEX_LP]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/alchemix.svg',
      inputAssetsNames: 'SLP ETH/CVX',
      inputTokenName: 'SLP',
      poolAddress: poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_CONVEX_LP,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0xf1d2A7B230876eb84164Db9cE942b84AA0BEa30F',
      inputTokenAddress: '0x05767d9EF41dC40689678fFca0608878fb3dE906', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://app.sushi.com/add/0x4e3fbd56cd56c3e72c1403e103b45db9da5b9d2b/ETH',
      poolSlug: 'SushiDoubleEthCvxLp',
      strategyAddress: '0x49CA79943AB41963758D24f9cacF91561a8C3505', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_PICKLE_LP]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/alchemix.svg',
      inputAssetsNames: 'SLP ETH/PICKLE',
      inputTokenName: 'SLP',
      poolAddress: poolAddresses[ChainId.MAINNET].SUSHI_DOUBLE_ETH_PICKLE_LP,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0x55283f4c22e3fA912A92abE6BaEED9BAe371BCe7',
      inputTokenAddress: '0x269Db91Fc3c7fCC275C2E6f22e5552504512811c', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://app.sushi.com/add/ETH/0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5',
      poolSlug: 'SushiDoubleEthPickleLp',
      strategyAddress: '0x14293823B5956c30E79d6669F1C79eb70c2619eB', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MAINNET].SUSHI_NEUR]: {
      chainId: ChainId.MAINNET,
      iconUrl: tokenIconsPath + '/neur.svg',
      inputAssetsNames: 'SLP NEUR',
      inputTokenName: 'SLP',
      poolAddress: poolAddresses[ChainId.MAINNET].SUSHI_NEUR,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0x1212121212121212121212121212121212121212',
      inputTokenAddress: '0x3434343434343434343434343434343434343434', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://app.sushi.com/add/ETH/0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5', // ToDo: Replace with a correct value..
      poolSlug: 'SushiNeur',
      strategyAddress: '0x5656565656565656565656565656565656565656', // ToDo: Replace with constant.
      zapperIcon: tokenIconsPath + '/sushi.png',
    },
  },
  [ChainId.MATIC]: {
    [poolAddresses[ChainId.MATIC].CURVE_AM_THREE_CRV]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/crv.svg',
      inputAssetsNames: 'am3CRV',
      inputTokenName: 'am3CRV',
      poolAddress: poolAddresses[ChainId.MATIC].CURVE_AM_THREE_CRV,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0x5D69fc63204423c980a998ed033e07c2B79B42BC',
      inputTokenAddress: '0xE7a24EF0C5e95Ffb0f6684b813A78F2a3AD7D171', // ToDo: Replace with constant.
      inputTokenExchangeUrl: 'https://polygon.curve.fi/aave/deposit',
      poolSlug: 'PolygonCurveAm3Crv',
      strategyAddress: '0x17A53f3Fd97232816ff3E1A8cB10Fdf963d71bFa', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].CURVE_REN_BTC]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/crv.svg',
      inputAssetsNames: 'btcCRV',
      inputTokenName: 'btcCRV',
      poolAddress: poolAddresses[ChainId.MATIC].CURVE_REN_BTC,
      zapperAppId: 'sushiswap',

      gaugeAddress: '0x0090fD3D72b5d89dDe68426bF250b4C039cF78ca',
      inputTokenAddress: '0xf8a57c1d3b9629b77b6726a042ca48990A84Fb49', // ToDo: Replace with constant.
      inputTokenExchangeUrl: 'https://polygon.curve.fi/ren/deposit',
      poolSlug: 'PolygonCurveRenBtc',
      strategyAddress: '0x9B2dA857A28AD376A3352b4282e60566bAb29710', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].QUICKSWAP_DAI_USDC_LP]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/quick-swap.svg',
      inputAssetsNames: 'QUICK DAI/USDC',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MATIC].QUICKSWAP_DAI_USDC_LP,
      zapperAppId: 'quickswap',

      gaugeAddress: '0x1fbC9C9fC7f1A6F0D790CE2a62e11d6ba293B76a',
      inputTokenAddress: '0xf04adBF75cDFc5eD26eeA4bbbb991DB002036Bdd', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      poolSlug: 'PolygonQuickswapDaiUsdcLp',
      strategyAddress: '0xB87355b1a61bbDC4370Fb57334f00Cf9B32FB8a8', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].QUICKSWAP_USDC_USDT_LP]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/quick-swap.svg',
      inputAssetsNames: 'QUICK USDC/USDT',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MATIC].QUICKSWAP_USDC_USDT_LP,
      zapperAppId: 'quickswap',

      gaugeAddress: '0x1D8c2e54e235A54b0E6d10060B2E8822f9975E23',
      inputTokenAddress: '0x2cF7252e74036d1Da831d11089D326296e64a728', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      poolSlug: 'PolygonQuickswapUsdcUsdtLp',
      strategyAddress: '0x0B5053D8164ec0a6085880e67aC790709d1893F5', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].QUICKSWAP_MIMATIC_USDC_LP]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/quick-swap.svg',
      inputAssetsNames: 'QUICK MIMATIC/USDC',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MATIC].QUICKSWAP_MIMATIC_USDC_LP,
      zapperAppId: 'quickswap',

      gaugeAddress: '0x6Bc26F93bA8291dAb59Ecb12fB007100Ae750c72',
      inputTokenAddress: '0x160532D2536175d65C03B97b0630A9802c274daD', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://quickswap.exchange/#/add/0x2791bca1f2de4661ed88a30c99a7a9449aa84174/0xa3fa99a148fa48d14ed51d610c367c61876997f1',
      poolSlug: 'PolygonQuickswapMimaticUsdcLp',
      strategyAddress: '0x70a1aE76d37bADe6f051E769962c127EFbCC14Ca', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].QUICKSWAP_WBTC_ETH_LP]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/quick-swap.svg',
      inputAssetsNames: 'QUICK WBTC/ETH',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MATIC].QUICKSWAP_WBTC_ETH_LP,
      zapperAppId: 'quickswap',

      gaugeAddress: '0xf8e22Ab62C98dd61E2F129b6d6561f4057730727',
      inputTokenAddress: '0xdC9232E2Df177d7a12FdFf6EcBAb114E2231198D', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://quickswap.exchange/#/add/0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      poolSlug: 'PolygonQuickswapWbtcEthLp',
      strategyAddress: '0xf237D7aCF377952E1B945E7F94a37ecF270e902E', // ToDo: Replace with constant.
      zapperIcon: null,
    },
    [poolAddresses[ChainId.MATIC].QUICKSWAP_WMATIC_ETH_LP]: {
      chainId: ChainId.MATIC,
      iconUrl: tokenIconsPath + '/quick-swap.svg',
      inputAssetsNames: 'QUICK WMATIC/ETH',
      inputTokenName: 'UNI-V2',
      poolAddress: poolAddresses[ChainId.MATIC].QUICKSWAP_WMATIC_ETH_LP,
      zapperAppId: 'quickswap',

      gaugeAddress: '0x5b29Dbf2CE628AfaEA743209cb429A65E89545F4',
      inputTokenAddress: '0xadbF1854e5883eB8aa7BAf50705338739e558E5b', // ToDo: Replace with constant.
      inputTokenExchangeUrl:
        'https://quickswap.exchange/#/add/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270/0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      poolSlug: 'PolygonQuickswapWmaticEthLp',
      strategyAddress: '0xf1fe98A2e16cc9a82dE7b278Bd7209237a0874F0', // ToDo: Replace with constant.
      zapperIcon: null,
    },
  },
}

export default poolsData
