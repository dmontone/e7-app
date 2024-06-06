import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'
import { RenderWithTheme } from 'test-utils'

describe('COMPONENT: ATOMS: Button', () => {
  beforeEach(jest.clearAllMocks)

  it('should render children node', () => {
    render(
      <RenderWithTheme>
        <Button onClick={jest.fn}>TEST CHILD</Button>
      </RenderWithTheme>
    )
    expect(screen.getByText(/TEST CHILD/)).toBeInTheDocument()
  })

  it('should call onClick function after mouse clicked', () => {
    const mockOnClick = jest.fn()

    render(
      <RenderWithTheme>
        <Button onClick={mockOnClick}>TEST CHILD</Button>
      </RenderWithTheme>
    )

    const element = screen.getByText(/TEST CHILD/)
    userEvent.click(element)
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})