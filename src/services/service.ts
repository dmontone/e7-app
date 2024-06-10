import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

export const Service = () => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json'
    }
  })

  instance.interceptors.request.use(
    (req: InternalAxiosRequestConfig) => {
      return req
    },
    (error: any) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (res: AxiosResponse) => {
      res.data = res.data.data
      return res
    },
    (e: AxiosError) => {
      return Promise.reject({
        status: e.response?.status,
        code: e.code,
        message: e.message
      })
    }
  )

  return instance
}