import { get, post } from './http'

const apiUrl: String = import.meta.env.VITE_API_URL
const league: String = import.meta.env.VITE_LEAGUE
const tradeUrl: String = import.meta.env.VITE_TRADE_URL

export const getTradeSeachQuery = (query: Object) => {
  const response = post(`${apiUrl}${tradeUrl}/search/${league}`, query)
  return response
}

export const getIdFromSeachQuery = (json: any) => {
  return json.id
}

export const getTradeItemsBySearchQuery = async (queryId: String) => {
  const res = await get(`${apiUrl}${tradeUrl}/fetch/${queryId}`)
  return res
}
