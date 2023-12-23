import { Controller, Get } from 'amala'
import axios from 'axios'

@Controller('/crypto/coingecko/')
export default class CryptoCurrencyController {
  @Get('/currency/all')
  async getCurrency() {
    try {
      const params = new URLSearchParams({
        vs_currency: 'usd',
        order: 'market_cap_desc',
        per_page: '10',
        page: '1',
        sparkline: 'false',
      })

      const options = {
        method: 'GET',
        url: `https://api.coingecko.com/api/v3/coins/markets?${params.toString()}`,
      }

      const response = await axios(options)

      const cryptoList = response.data

      return cryptoList
    } catch (error: any) {
      console.error('Error while fetching data: ', error.message)
    }
  }
}
