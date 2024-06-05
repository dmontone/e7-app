type TJobsState = { data: [], search?: string }

type TSetJobData = TAction<'SET_JOB_DATA', TJob[]>
type TSetJobSearch = TAction<'SET_JOB_SEARCH', string>

type TAllActions =
  TSetJobData
  | TSetJobSearch

type TJobActions = TAllActions extends { type: infer U; payload: infer V } ? { type: U; payload: V } : never

const reducerKey = 'jobs'

export const JobsReducer: TReducer<TJobsState, TJobsState, TJobActions> = (state, { type, payload }) => {
  switch (type) {
    case 'SET_JOB_DATA':
      return {
        ...state,
        data: payload
      } as TJobsState

    case 'SET_JOB_SEARCH':
      return {
        ...state,
        search: payload
      } as TJobsState
  }
  return state
}

JobsReducer.key = reducerKey
JobsReducer.initialState = {
  data: []
}