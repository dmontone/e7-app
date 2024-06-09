import { Section, Typography } from 'components/atoms'
import { FC } from 'react'
import * as S from './styles'
import { JobList, Search } from 'components/molecules'

export const Jobs: FC = () => {
  const jobs = [{}]

  return (
    <Section bgColor='white'>
      <S.Header>
        <Typography variant='title' level={2} size={16} weight='bold' text='Vagas em aberto' />
        <Search />
      </S.Header>
      <JobList jobs={jobs} />
    </Section>
  )
}