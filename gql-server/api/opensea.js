import * as Web3 from 'web3'
import { OpenSeaPort, Network } from 'opensea-js'

const url = "https://eth-rinkeby.alchemyapi.io/v2/X85pbm1ObcZ11vEgdhOJeLwQdN0cKWDW"
// This example provider won't let you make transactions, only read-only calls:
const provider = new Web3.providers.HttpProvider(url)

const seaport = new OpenSeaPort(provider, {
    networkName: Network.Rinkeby,
    // apiKey: YOUR_API_KEY
})