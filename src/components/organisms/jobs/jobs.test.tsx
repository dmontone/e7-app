import { render, screen, waitFor } from '@testing-library/react'
import { AppContext } from 'state'
import { RenderWithTheme } from 'test-utils'
import { Jobs } from './jobs'
import { JobsService } from 'services'
import { fetch } from 'utils'
import { JobList } from 'components/molecules'

jest.mock('utils')

jest.mock('services', () => ({
  JobsService: jest.fn()
}))

jest.mock('components/atoms', () => ({
  ...jest.requireActual('components/atoms'),
  Loading: () => <>LOADING</>,
  Typography: ({ text }: { text: string }) => <>{text}</>
}))

jest.mock('components/molecules', () => ({
  ...jest.requireActual('components/molecules'),
  Loading: () => <>SEARCH</>,
  JobList: jest.fn()
}))

describe('COMPONENTS: ORGANISMS: Jobs', () => {
  const mockDefaultState = { data: [], error: null, isFetching: false, isFetched: false }
  const mockActions = {
    setJobFetching: jest.fn(),
    setJobData: jest.fn(),
    setJobError: jest.fn(),
    setJobSearch: jest.fn()
  } as { [k: string]: (...args: any[]) => void }

  it('should fetch jobs with default parameters on mount', () => {
    const mockFetch = fetch as jest.Mock
    const mockSvc = JobsService as jest.Mock
    const mockGet = jest.fn()

    const mockState = { jobs: { ...mockDefaultState, params: { page: 123, perPage: 456, search: '789' } } }

    mockSvc.mockImplementation(() => ({ get: mockGet }))
    mockFetch.mockImplementation((fn: Function) => () => fn())

    render(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    expect(mockGet).toHaveBeenCalledWith({ page: 123, perPage: 456, search: '789' })
  })

  it('should fetch jobs with current parameters when parameters change', async () => {
    const mockFetch = fetch as jest.Mock
    const mockSvc = JobsService as jest.Mock
    const mockGet = jest.fn()

    const mockState = { jobs: { ...mockDefaultState, params: { page: 123, perPage: 456, search: '789' } } }

    mockSvc.mockImplementation(() => ({ get: mockGet }))
    mockFetch.mockImplementation((fn: Function) => () => fn())

    const { rerender } = render(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    mockState.jobs.params = { page: 321, perPage: 654, search: '987' }

    rerender(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    expect(mockGet).toHaveBeenCalledWith({ page: 123, perPage: 456, search: '789' })
    expect(mockGet).toHaveBeenCalledWith({ page: 321, perPage: 654, search: '987' })
  })

  it('should render loading components if isFetching is true', () => {
    const mockFetch = fetch as jest.Mock
    const mockSvc = JobsService as jest.Mock
    const mockGet = jest.fn()

    const mockState = { jobs: { ...mockDefaultState, isFetching: true, params: {} } }

    mockSvc.mockImplementation(() => ({ get: mockGet }))
    mockFetch.mockImplementation((fn: Function) => () => fn())

    render(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    expect(screen.getByText(/LOADING/)).toBeInTheDocument()
  })

  it('should should not render search input and render error message if state has error', () => {
    const mockFetch = fetch as jest.Mock
    const mockSvc = JobsService as jest.Mock
    const mockGet = jest.fn()

    const mockState = { jobs: { ...mockDefaultState, error: { status: 500 }, params: {} } }

    mockSvc.mockImplementation(() => ({ get: mockGet }))
    mockFetch.mockImplementation((fn: Function) => () => fn())

    render(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    expect(screen.queryByText(/SEARCH/)).not.toBeInTheDocument()
    expect(screen.getByText(/Houve um erro/)).toBeInTheDocument()
  })

  it('should call job list with data in state', () => {
    const mockFetch = fetch as jest.Mock
    const mockSvc = JobsService as jest.Mock
    const mockGet = jest.fn()

    const mockState = { jobs: { ...mockDefaultState, data: [{ title: 'TITLE', location: 'LOCATION' }] as TJob[], params: {} } }

    mockSvc.mockImplementation(() => ({ get: mockGet }))
    mockFetch.mockImplementation((fn: Function) => () => fn())

    render(
      <RenderWithTheme>
        <AppContext.Provider value={[mockState, mockActions]}>
          <Jobs />
        </AppContext.Provider>
      </RenderWithTheme>
    )

    const jobCall = (JobList as jest.Mock).mock.calls[0][0].jobs
    expect(jobCall).toEqual([{ title: 'TITLE', location: 'LOCATION' }])
  })
})