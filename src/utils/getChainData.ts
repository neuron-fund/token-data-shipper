import { ChainId } from '../constants'
import { chainsData } from '../data'
import { ChainData } from '../types'

const getTokenData = ({ chainId }: { chainId: ChainId }): ChainData => {
  return chainsData[chainId]
}

export default getTokenData
