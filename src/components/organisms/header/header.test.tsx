import { Header } from './header';
import { RenderWithTheme } from 'test-utils';
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('COMPONENTS: ORGANISMS: Header', () => {
  const mockOnClick = jest.fn()

  it('should render title with correct title', () => {
    render(
      <RenderWithTheme>
        <Header ctaOnClick={mockOnClick} />
      </RenderWithTheme>
    )

    expect(screen.getByText(/trabalhe no elo7/)).toBeInTheDocument()
  })

  it('should call mockClick on bcta button click', () => {
    render(
      <RenderWithTheme>
        <Header ctaOnClick={mockOnClick} />
      </RenderWithTheme>
    )

    const button = screen.getByText(/vagas em aberto/)
    userEvent.click(button)

    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })
})