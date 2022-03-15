import { ChainId } from '@sushiswap/sdk'

import { mainnetTokens, maticTokens } from './data'
import { Token } from './types'

const getTokenData = ({
  chainId,
  tokenAddress,
}: {
  chainId: ChainId
  tokenAddress: string
}): Token | undefined => {
  const findTokenCallback = ({ address }: Token) => {
    return address.toLowerCase() === tokenAddress.toLowerCase()
  }

  if (chainId === ChainId.MAINNET) return mainnetTokens.find(findTokenCallback)
  if (chainId === ChainId.MATIC) return maticTokens.find(findTokenCallback)
  return undefined
}

export default getTokenData
