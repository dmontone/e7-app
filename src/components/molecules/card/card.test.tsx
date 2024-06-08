import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import userEvent from '@testing-library/user-event'
import { Card } from './card'

describe('COMPONENTS: MOLECULES: Card', () => {
  it('should render correct image, title and text', () => {
    render(
      <RenderWithTheme>
        <Card illustration="graph" title="MOCK_TITLE" text="MOCK_TEXT" />
      </RenderWithTheme>
    )

    const img = screen.getByRole('img') as HTMLImageElement
    const title = screen.getByText('MOCK_TITLE')
    const text = screen.getByText('MOCK_TEXT')

    expect(img.src).toMatch(/graph.png/)
    expect(title).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })

  it('should render call to action', () => {
    const mockCta = jest.fn()

    render(
      <RenderWithTheme>
        <Card illustration="graph" title="MOCK_TITLE" text="MOCK_TEXT" cta={{ text: 'MOCK_CTA', action: mockCta }} />
      </RenderWithTheme>
    )

    const cta = screen.getByText('MOCK_CTA')
    userEvent.click(cta)

    expect(mockCta).toHaveBeenCalledTimes(1)
  })
})