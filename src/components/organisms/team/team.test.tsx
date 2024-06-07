import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Photo } from 'components/atoms'
import { Team } from './team'

jest.mock('components/atoms', () => ({
  ...jest.requireActual('components/atoms'),
  Photo: jest.fn()
}))

describe('COMPONENT: ORGANISMS: Testimonial', () => {

  it('should render testimonial photo, title, subtitle and content through corresponding components', () => {
    render(
      <RenderWithTheme>
        <Team />
      </RenderWithTheme>
    )

    expect(Photo).toHaveBeenCalledTimes(4)
  })  
})
