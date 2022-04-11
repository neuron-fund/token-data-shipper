import ChainId from '../constants/ChainId'

type PoolData = {
  chainId: ChainId
  gaugeAddress: string // ToDo: No longer used, delete.
  iconUrl: string // ToDo: Use token address instead of token icon directly.
  inputAssetsNames: string
  inputTokenAddress: string
  inputTokenName: string // ToDo: Use token address instead of token name directly, rename with `inputTokenAddress`.
  inputTokenExchangeUrl: string // ToDo: What is get-link for token? Use token address instead of token get-link directly.
  poolAddress: string
  poolSlug: string // ToDo: Now it is used on frontend to get Apy by slug. Replace with poolAddress.
  strategyAddress: string
  zapperAppId: string
}

export default PoolData
