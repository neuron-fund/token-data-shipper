import { tokensData } from '../data'
import { TokenData } from '../types'

const getTokenData = ({
  tokenAddress,
}: {
  tokenAddress: string
}): TokenData | undefined => {
  return tokensData[tokenAddress]
}

export default getTokenData
