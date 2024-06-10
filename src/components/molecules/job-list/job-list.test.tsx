import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { JobList } from './job-list'

describe('COMPONENTS: MOLECULES: Job list', () => {
  const mockJobs = [
    { title: 'JOB TITLE 1', location: 'JOB LOCATION 1' },
    { title: 'JOB TITLE 2', location: 'JOB LOCATION 2' }
  ] as TJob[]

  it('should render list with jobs', () => {
    render(
      <RenderWithTheme>
        <JobList jobs={mockJobs} />
      </RenderWithTheme>
    )

    const job1 = screen.getByText('JOB TITLE 1')
    const job2 = screen.getByText('JOB TITLE 2')

    expect(job1).toBeInTheDocument()
    expect(job2).toBeInTheDocument()
  })
})