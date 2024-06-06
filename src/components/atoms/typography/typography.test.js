import { render, screen } from '@testing-library/react'
import { Typography } from './typography'
import { RenderWithTheme } from 'test-utils'

describe('COMPONENT: ATOMS: Typography', () => {
  it('should render children string', () => {
    render(
      <RenderWithTheme>
        <Typography>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    expect(screen.getByText(/TEST CHILD/)).toBeInTheDocument()
  })

  
  it('should render the correct component based on default variant', () => {
    render(
      <RenderWithTheme>
        <Typography>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    const element = screen.queryByText(/TEST CHILD/)

    expect(element.nodeName.toLowerCase()).toBe('p')
  })
  
  it('should render the component as h1 based on title variant', () => {
    render(
      <RenderWithTheme>
        <Typography variant='title'>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    const element = screen.queryByText(/TEST CHILD/)

    expect(element.nodeName.toLowerCase()).toBe('h1')
  })
  
  it('should render the component as h2 based on heading variant', () => {
    render(
      <RenderWithTheme>
        <Typography variant='heading'>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    const element = screen.queryByText(/TEST CHILD/)

    expect(element.nodeName.toLowerCase()).toBe('h2')
  })
  
  it('should render the component as div based on subtitle variant', () => {
    render(
      <RenderWithTheme>
        <Typography variant='subtitle'>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    const element = screen.queryByText(/TEST CHILD/)

    expect(element.nodeName.toLowerCase()).toBe('div')
  })
  
  it('should render the component as p based on body variant', () => {
    render(
      <RenderWithTheme>
        <Typography variant='body'>TEST CHILD</Typography>
      </RenderWithTheme>
    )
    const element = screen.queryByText(/TEST CHILD/)

    expect(element.nodeName.toLowerCase()).toBe('p')
  })
})