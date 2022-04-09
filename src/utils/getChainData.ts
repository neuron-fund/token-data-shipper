import { ChainId } from '../constants'
import { chainDataById } from '../data'
import { ChainData } from '../types'

const getTokenData = ({ chainId }: { chainId: ChainId }): ChainData => {
  return chainDataById[chainId]
}

export default getTokenData
