import { describe, it, expect } from 'vitest'
import { get, post } from '@/plugins/http'

const apiUrl = import.meta.env.VITE_API_URL
const tradeUrl = import.meta.env.VITE_TRADE_URL
const league = import.meta.env.VITE_LEAGUE

const mockQuery = {
  query: {
    filters: {
      trade_filters: {
        disabled: false,
        filters: {
          price: {
            max: 300,
            min: 1
          }
        }
      }
    },
    name: "Shavronne's Wrappings",
    stats: [
      {
        filters: [],
        type: 'and'
      }
    ],
    status: {
      option: 'online'
    },
    type: "Occultist's Vestment"
  },
  sort: {
    price: 'asc'
  }
}

describe('http module', () => {
  it('check post http service with right query returns id', async () => {
    const { data } = await post(`${apiUrl}${tradeUrl}/search/${league}`, mockQuery)
    expect(data.id).toBe('2QKPMMeCk')
  })
})
