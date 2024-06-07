import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Testimonial } from './testimonial'
import { Photo, Typography } from 'components/atoms'

jest.mock('components/atoms', () => ({
  ...jest.requireActual('components/atoms'),
  Photo: () => <>TEST PHOTO COMPONENT</>,
  Typography: ({ variant, text, subtitle }: { [k: string]: string }) => <>{[variant, text, subtitle].join(' | ')}</>,
}))

describe('COMPONENT: ORGANISMS: Testimonial', () => {

  it('should render testimonial photo, title, subtitle and content through corresponding components', () => {
    render(
      <RenderWithTheme>
        <Testimonial />
      </RenderWithTheme>
    )

    const photo = screen.queryByText(/TEST PHOTO COMPONENT/)
    const title = screen.queryByText(/title \| Palavra da vendedora \| Sed rutrum condimentum/)
    const text = screen.queryByText(/text \| Donec in vestibulum elit/)

    expect(photo).toBeInTheDocument()
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })  
})
