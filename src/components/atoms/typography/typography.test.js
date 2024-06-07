import { render, screen } from '@testing-library/react'
import { Typography } from './typography'
import { RenderWithTheme } from 'test-utils'

describe('COMPONENT: ATOMS: Typography', () => {
  it('should render children string with default props', () => {
    render(
      <RenderWithTheme>
        <Typography text='TEST_CONTENT' />
      </RenderWithTheme>
    )
    
    expect(screen.getByText(/TEST_CONTENT/)).toBeInTheDocument()
  })

  it('should render children string with a variant set', () => {
    render(
      <RenderWithTheme>
        <Typography variant='title' text='TEST_CONTENT' />
      </RenderWithTheme>
    )
    
    expect(screen.getByText(/TEST_CONTENT/)).toBeInTheDocument()
  })

  it('should render children string with a subtitle', () => {
    render(
      <RenderWithTheme>
        <Typography variant='title' text='TEST_CONTENT' subtitle='TEST_SUBTITLE' />
      </RenderWithTheme>
    )

    expect(screen.getByText(/TEST_CONTENT/)).toBeInTheDocument()
    expect(screen.getByText(/TEST_SUBTITLE/)).toBeInTheDocument()
  })

  it('should not render children string with a subtitle if variant is not title', () => {
    render(
      <RenderWithTheme>
        <Typography text='TEST_CONTENT' subtitle='TEST_SUBTITLE' />
      </RenderWithTheme>
    )

    expect(screen.getByText(/TEST_CONTENT/)).toBeInTheDocument()
    expect(screen.queryByText(/TEST_SUBTITLE/)).not.toBeInTheDocument()
  })
})