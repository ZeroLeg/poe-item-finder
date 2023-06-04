import axios, { type AxiosResponse } from 'axios'

const axiosInstance = axios.create({
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export const get = async (endpoint: string): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance.get(endpoint)
    return response
  } catch (error) {
    throw new Error('Error get to server')
  }
}

export const post = async (endpoint: string, data: any): Promise<AxiosResponse> => {
  try {
    const response = await axiosInstance.post(endpoint, data)
    return response
  } catch (error) {
    throw new Error('Error post data to server')
  }
}
