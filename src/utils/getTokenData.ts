import { TokenData } from '#types'

import { ChainId } from '../constants'
import { mainnetTokens, maticTokens } from '../data'

const getTokenData = ({
  chainId,
  tokenAddress,
}: {
  chainId: ChainId
  tokenAddress: string
}): TokenData | undefined => {
  const findTokenCallback = ({ address }: TokenData) => {
    return address.toLowerCase() === tokenAddress.toLowerCase()
  }

  if (chainId === ChainId.MAINNET) return mainnetTokens.find(findTokenCallback)
  if (chainId === ChainId.MATIC) return maticTokens.find(findTokenCallback)
  return undefined
}

export default getTokenData