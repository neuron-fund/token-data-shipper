import ChainId from '../constants/ChainId'
import poolData from '../data/poolData'
import PoolData from '../types/PoolData'

const getPoolData = ({
  chainId,
  poolAddress,
}: {
  chainId: ChainId
  poolAddress: string
}): PoolData | undefined => {
  return poolData[chainId]?.[poolAddress]
}

export default getPoolData
