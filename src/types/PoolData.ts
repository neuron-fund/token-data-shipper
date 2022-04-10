import ChainId from '../constants/ChainId'

type PoolData = {
  chainId: ChainId
  gaugeAddress: string
  iconUrl: string // ToDo: Use token address instead of token icon directly.
  inputAssetsNames: string
  inputTokenAddress: string
  inputTokenName: string // ToDo: Use token address instead of token name directly.
  inputTokenGetLink: string // ToDo: What is get-link for token? Use token address instead of token get-link directly.
  poolAddress: string
  strategyAddress: string
  zapperAppId: string | undefined // ToDo: Remove undefined type after filling `zapId` fields.
}

export default PoolData
