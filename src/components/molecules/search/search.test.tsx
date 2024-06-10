import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Search } from './search'
import { Input } from 'components/atoms'

jest.mock('components/atoms')

describe('COMPONENTS: MOLECULES: Search', () => {
  it('should call render Input atom with expected properties', () => {
    const mockOnChange = jest.fn()
    const mockInput = Input as jest.Mock

    render(
      <RenderWithTheme>
        <Search onSearch={mockOnChange} />
      </RenderWithTheme>
    )

    const { onChange, placeholder, icon } = mockInput.mock.calls[0][0]
    onChange({ target: { value: 'TEST VALUE' } })

    expect(placeholder).toEqual('nome da vaga')
    expect(icon).toEqual('search')
    expect(mockOnChange).toHaveBeenCalledWith('TEST VALUE')
  })
})