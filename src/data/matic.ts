import { ChainId } from '@sushiswap/sdk'

import { Token } from '../types'
import { assetsPath } from './helpers'

const mainnetTokens: Token[] = [
  {
    address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',
    chainId: ChainId.MATIC,
    logoUrl: assetsPath + '/matic-tokens/usdc-pos.svg',
    name: 'USDC (PoS)',
  },
]

export default mainnetTokens
