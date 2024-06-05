import { createContext, Dispatch, FC, ReactNode, useReducer } from 'react'
import { ExtractAllReducerActions, TJob } from 'types'
import * as Reducers from './reducers'

const ReducersList = Object.keys(Reducers).filter(item => !!item).map(item => Reducers[item as keyof typeof Reducers])
const ReducerKeys = ReducersList.map(item => item.key)

type IAppState = Record<typeof ReducerKeys[number], ReturnType<typeof ReducersList[number]>>

type TAppContext = [ IAppState, ReturnType<typeof getActions> ]

const initialState: IAppState = ReducersList.reduce((prev, current) =>
  ({ ...prev, [current.key]: current.initialState }), {})

type Actions = ExtractAllReducerActions<typeof ReducersList>

const getActions = (dispatch: Dispatch<Actions>) => ({
  setJobData: (jobs: TJob[]) => dispatch({ type: 'SET_JOB_DATA', payload: jobs }),
  setJobSearch: (query: string) => dispatch({ type: 'SET_JOB_DATA', payload: query }),
})

const reducer = (state: IAppState, action: Actions): IAppState => 
  ReducersList.reduce((curState, curReducer) => ({
      ...curState,
      [curReducer.key]: curReducer(state[curReducer.key], action)
  }), state)

export const AppContext = createContext<TAppContext>([initialState, {} as ReturnType<typeof getActions>])
export const AppContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const actions = getActions(dispatch)

  return <AppContext.Provider value={[state, actions]}>{children}</AppContext.Provider>
}