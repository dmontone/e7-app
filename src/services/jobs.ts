import { Service } from './service'

type TGetProps = {
  page?: number
  perPage?: number
  search?: string
}

type TGet = (props: TGetProps) => Promise<TJob[]>

export const JobsService = () => {
  const service = Service()

  const get: TGet = async (params) => {
    const response = await service.get<TJob[]>(`jobs`, { params })
    return response.data
  }

  return { get }
}