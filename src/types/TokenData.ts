import { ChainId } from '@sushiswap/sdk'

type TokenData = {
  address: string
  chainId: ChainId
  logoUrl: string | null
  name: string
}

export default TokenData
