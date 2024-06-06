import 'styled-components'

type Map<L, T> = { [k in L]: T }

declare type TokenWeights = 'normal' | 'semibold' | 'bold'
declare type TokenColors = 'white' | 'black'

type text = {
  font: string,
  size: (a: 8 | 10 | 12 | 14 | 16) => string
  weight: Map<TokenWeights, number>
}

type colors = Map<TokenColors, string>

declare module 'styled-components' {
  interface DefaultTheme {
    text: text
    colors: colors
  }

  type Weights = TokenWeights
  type Colors = TokenColors
}