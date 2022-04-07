import { ChainId } from '#constants'

type TokenData = {
  address: string
  chainId: ChainId
  logoUrl: string | null
  name: string
}

export default TokenData
