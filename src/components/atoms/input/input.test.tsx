import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Input } from './input'

describe("COMPONENTS: ATOMS: Input", () => {
  it("should render input element with placeholder and icon", () => {
    render(
      <RenderWithTheme>
        <Input placeholder="TEST_PLACEHOLDER" icon="search" />
      </RenderWithTheme>
    )

    const inputElement = screen.getByPlaceholderText('TEST_PLACEHOLDER')

    expect(inputElement).toBeInTheDocument()
  })
})