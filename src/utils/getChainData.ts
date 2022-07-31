import { chainsData } from '../data'
import ChainId from '../data/ChainId'
import { ChainData } from '../types'

const getChainData = ({ chainId }: { chainId: ChainId }): ChainData => {
  return chainsData[chainId]
}

export default getChainData
