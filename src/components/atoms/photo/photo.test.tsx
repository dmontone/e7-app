import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Photo } from './photo'

describe("COMPONENTS: ATOMS: Photo", () => {
  it("should render the image with correct alt and src", () => {
    render(
      <RenderWithTheme>
        <Photo src='TEST_SRC' alt='TEST_ALT' width={100} height={100} />
      </RenderWithTheme>
    )

    const imgElement = screen.getByRole('img')

    expect(imgElement).toBeInTheDocument()
    expect(imgElement).toHaveAttribute('src', 'TEST_SRC')
    expect(imgElement).toHaveAttribute('alt', 'TEST_ALT')
  })
})