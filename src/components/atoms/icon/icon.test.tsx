import { render, screen } from '@testing-library/react'
import { Icon } from './icon'


describe('COMPONENT: ATOMS: Icon', () => {
  it('should render FA with passed type', () => {
    render(<Icon type='search' />)

    const element = screen.getByRole('img', { hidden: true })
    expect(element).toBeInTheDocument()
    expect(element).toHaveClass('fa-magnifying-glass')
  })
})

export {}