import axios, { type AxiosResponse } from 'axios'

export const get = async (endpoint: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.get(endpoint)
    return response
  } catch (error) {
    throw new Error(error)
  }
}

export const post = async (endpoint: string, data: any): Promise<AxiosResponse> => {
  try {
    const response = await axios.post(endpoint, data)
    return response
  } catch (error) {
    throw new Error(error)
  }
}
