import { http, createConfig } from '@wagmi/core'
import { mainnet, sepolia } from '@wagmi/core/chains'

export const config = createConfig({
  chains: [mainnet, sepolia],
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

import { connect } from '@wagmi/core'
import { injected } from '@wagmi/connectors'

const button = document.getElementById('connect')

button?.addEventListener('click', handleConnect)

async function handleConnect(){
  const result = await connect(config, { connector: injected({ target(){ return window.ethereum } }) })
  console.log(result)
}