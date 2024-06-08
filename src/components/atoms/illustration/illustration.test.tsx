import { render, screen } from '@testing-library/react'
import { Illustration } from './illustration'

jest.mock('./assets/graph.png')

describe('COMPONENTS: ATOMS: Illustration', () => {
  it('should render the graph image if type is graph', () => {
    render(<Illustration type='graph' />)

    const img = screen.getByRole('img') as HTMLImageElement

    expect(img).toBeInTheDocument()
    expect(img.src).toMatch(/graph\.png/)
  })
  
  it('should render the thumb image if type is thumb', () => {
    render(<Illustration type='thumb' />)

    const img = screen.getByRole('img') as HTMLImageElement

    expect(img).toBeInTheDocument()
    expect(img.src).toMatch(/thumb\.png/)
  })
  
  it('should render the safe image if type is safe', () => {
    render(<Illustration type='safe' />)

    const img = screen.getByRole('img') as HTMLImageElement

    expect(img).toBeInTheDocument()
    expect(img.src).toMatch(/safe\.png/)
  })
})