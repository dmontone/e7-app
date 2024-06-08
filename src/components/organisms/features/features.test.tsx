import { render, screen } from '@testing-library/react'
import { RenderWithTheme } from 'test-utils'
import { Features } from './features'
import { Card } from 'components/molecules'

jest.mock('components/molecules')

describe('COMPONENT: ORGANISM: Feature', () => {
  it('should render 3 cards with correct data', () => {
    (Card as jest.Mock).mockReturnValue(<>MOCK_CARD_COMPONENT</>)

    render(
      <RenderWithTheme>
        <Features />
      </RenderWithTheme>
    )

    const card1 = (Card as jest.Mock).mock.calls[0][0]
    const card2 = (Card as jest.Mock).mock.calls[1][0]
    const card3 = (Card as jest.Mock).mock.calls[2][0]

    expect(Card).toBeCalledTimes(3)
    expect(card1).toEqual(expect.objectContaining({ illustration: 'graph', title: 'Resultados' }))
    expect(card2).toEqual(expect.objectContaining({ illustration: 'thumb', title: 'Qualidade de vida' }))
    expect(card3).toEqual(expect.objectContaining({ illustration: 'safe', title: 'Nossos valores' }))
  })
})