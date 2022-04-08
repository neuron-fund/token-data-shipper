import { tokenDataByAddress } from '../data'
import { TokenData } from '../types'

const getTokenData = ({
  tokenAddress,
}: {
  tokenAddress: string
}): TokenData | undefined => {
  return tokenDataByAddress[tokenAddress]
}

export default getTokenData
