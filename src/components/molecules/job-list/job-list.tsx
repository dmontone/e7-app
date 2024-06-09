import { Typography } from 'components/atoms'
import { Separator } from 'components/atoms/separator'
import { FC } from 'react'
import * as S from './styles'

type TJobList = {
  jobs: any[]
}

export const JobList: FC<TJobList> = ({ jobs }) => {
  const placeholderJobs: any[] = new Array(5).fill({})

  return (
    <S.Wrapper>
      <S.List>
        {placeholderJobs.map((_, index) =>
          <>
            <S.Item>
              <Typography size={10} weight='semibold' color='cyan' text='Desenvolvedor(a) Mobile Senior (Android e iOS)' />
              <Typography size={10} text='São Paulo, Brasil' />
            </S.Item>
            {index !== (placeholderJobs.length - 1) && <Separator />}
          </>
        )}
      </S.List>
    </S.Wrapper>
  )
}