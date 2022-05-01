import ChainId from '../data/ChainId'
import poolsData from '../data/poolsData'
import PoolData from '../types/PoolData'

const getPoolData = ({
  chainId,
  poolAddress,
}: {
  chainId: ChainId
  poolAddress: string
}): PoolData | undefined => {
  return poolsData[chainId]?.[poolAddress]
}

export default getPoolData
