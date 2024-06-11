import { FC, useContext, useEffect } from 'react'
import { Loading, Section, Typography } from 'components/atoms'
import { JobList, Search } from 'components/molecules'
import { JobsService } from 'services'
import { AppContext } from 'state'
import { fetch } from 'utils'
import * as S from './styles'

export const Jobs: FC = () => {
  const svcJobs = JobsService()
  const [{ jobs }, { setJobFetching, setJobData, setJobError, setJobSearch }] = useContext(AppContext)

  useEffect(() => {
    const fetchJobs = fetch(() => svcJobs.get(jobs.params))
    fetchJobs(() => setJobFetching(true), setJobData, setJobError)
  }, [jobs.params])

  return (
    <Section bgColor='white'>
      <S.Header>
        <Typography variant='title' level={2} size={32} weight='bold' text='Vagas em aberto' />
        {jobs.isFetched && !jobs.error && <Search onSearch={setJobSearch} />}
      </S.Header>
      <S.Content $centralize={jobs.isFetching || jobs.error || !jobs.data.length}>
        {jobs.isFetching
          && <Loading />}
        
        {!jobs.isFetching
          && jobs.error
          && <Typography size={16} color='gray' weight='bold' text='Houve um erro. Tente novamente mais tarde.' />}

        {!jobs.isFetching
          && !jobs.error
          && jobs.data.length <= 0
          && <Typography size={16} color='gray' weight='bold' text='Nenhuma vaga encontrada' />}
          
        {!jobs.isFetching
          && !jobs.error
          && jobs.data.length > 0
          && <JobList jobs={jobs.data} />}
      </S.Content>
    </Section>
  )
}