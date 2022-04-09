import { tokenData } from '../data'
import { TokenData } from '../types'

const getTokenData = ({
  tokenAddress,
}: {
  tokenAddress: string
}): TokenData | undefined => {
  return tokenData[tokenAddress]
}

export default getTokenData
