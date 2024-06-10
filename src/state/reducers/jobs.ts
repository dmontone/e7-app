type TJobsState = TState<TJob[], { page?: number, perPage?: number, search?: string }>

type TSetJobFetching = TAction<'SET_JOB_FETCHING', boolean>
type TSetJobError = TAction<'SET_JOB_ERROR', any>
type TSetJobData = TAction<'SET_JOB_DATA', TJob[]>
type TSetJobSearch = TAction<'SET_JOB_SEARCH', string>

type TAllActions =
  TSetJobFetching
  | TSetJobData
  | TSetJobError
  | TSetJobSearch

type TJobActions = TAllActions extends { type: infer U; payload: infer V } ? { type: U; payload: V } : never

const reducerKey: string = 'jobs'

export const JobsReducer: TReducer<TJobsState, TJobsState, TJobActions> = (state, { type, payload }) => {
  switch (type) {
    case 'SET_JOB_FETCHING':
      return {
        ...state,
        isFetching: payload
      }

    case 'SET_JOB_DATA':
      return {
        ...state,
        data: payload,
        error: false,
        isFetched: true,
        isFetching: false,
      }

    case 'SET_JOB_ERROR':
      return {
        ...state,
        error: payload,
        isFetching: false,
      }

    case 'SET_JOB_SEARCH':
      return {
        ...state,
        params: {
          ...state.params,
          search: payload
        }
      }
  }
}

JobsReducer.key = reducerKey
JobsReducer.initialState = {
  params: {
    page: 1,
    perPage: 3,
    search: ''
  },
  isFetching: false,
  isFetched: false,
  error: null,
  data: []
}