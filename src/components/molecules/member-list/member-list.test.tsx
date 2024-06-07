import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { MemberList } from './member-list'
import { Photo } from 'components/atoms'

jest.mock('components/atoms', () => ({
  ...jest.requireActual('components/atoms'),
  Photo: jest.fn()
}))

describe('COMPONENT: ORGANISMS: Testimonial', () => {

  it('should render correct Photo elements', () => {
    render(
      <RenderWithTheme>
        <MemberList members={[ 'TEST MEMBER 1', 'TEST MEMBER 2' ]} />
      </RenderWithTheme>
    )

    expect((Photo as jest.Mock).mock.calls[0][0].src).toEqual('TEST MEMBER 1')
    expect((Photo as jest.Mock).mock.calls[1][0].src).toEqual('TEST MEMBER 2')
  })  
})
