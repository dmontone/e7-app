import { render } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { MemberList } from 'components/molecules'
import { Team } from './team'

jest.mock('components/molecules', () => ({
  ...jest.requireActual('components/molecules'),
  MemberList: jest.fn()
}))

describe('COMPONENT: ORGANISMS: Testimonial', () => {

  it('should render testimonial photo, title, subtitle and content through corresponding components', () => {
    render(
      <RenderWithTheme>
        <Team />
      </RenderWithTheme>
    )

    expect(MemberList).toHaveBeenCalled()
  })  
})
