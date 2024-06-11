import { Typography } from 'components/atoms'
import { Separator } from 'components/atoms/separator'
import { FC } from 'react'
import * as S from './styles'

type TJobList = {
  jobs: TJob[]
}

export const JobList: FC<TJobList> = ({ jobs }) =>
  <S.Wrapper>
    <S.List>
      {jobs.map(({ title, location }, index) =>
        <div key={title}>
          <S.Item>
            <Typography size={20} weight='semibold' color='cyan' text={title} />
            <Typography size={20} text={location} />
          </S.Item>
          {index !== (jobs.length - 1) && <Separator />}
        </div>
      )}
    </S.List>
  </S.Wrapper>