import { ChainId } from '../constants'
import { ChainData } from '../types'

const chainIconsPath =
  'https://raw.githubusercontent.com/neuron-fund/token-data-shipper/v1/assets/chain-icons'

const chainDataById: Record<ChainId, ChainData> = {
  [ChainId.MAINNET]: {
    id: ChainId.MAINNET,
    logoUrl: chainIconsPath + 'mainnet.svg',
    name: 'Ethereum',
    rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    scannerHostUrl: 'https://etherscan.io',
  },
  [ChainId.MATIC]: {
    id: ChainId.MATIC,
    logoUrl: chainIconsPath + 'matic.svg',
    name: 'Polygon',
    rpcUrl: 'https://polygon-rpc.com',
    scannerHostUrl: 'https://polygonscan.com',
  },
}

export default chainDataById
