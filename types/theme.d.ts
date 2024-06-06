import 'styled-components'

type map<L extends string, T> = { [k in L]: T }

declare type tokenWeights = 'normal' | 'semibold' | 'bold'

type text = {
  font: string,
  size: (a: 8 | 10 | 12 | 14 | 16) => string
  weight: { [k in tokenWeights]: number }
}

declare module 'styled-components' {
  interface DefaultTheme {
    text: text
  }
}