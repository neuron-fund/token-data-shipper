import { ChainId } from '../constants'
import { chainData } from '../data'
import { ChainData } from '../types'

const getTokenData = ({ chainId }: { chainId: ChainId }): ChainData => {
  return chainData[chainId]
}

export default getTokenData
