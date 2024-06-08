import 'styled-components'

declare module 'styled-components' {
  type Map<L, T> = { [k in L]: T }

  type MapToDollar<T> = {
    [K in keyof T as `$${K}`]: T[K]
  }

  type Weights = 'normal' | 'semibold' | 'bold'
  type Colors = 'white' | 'black' | 'gray' | 'lightGray' | 'darkGray' | 'cyan' | 'yellow' | 'lightYellow' | 'darkYellow'
  type Dimensions = 'auto' | '100%' | number

  interface DefaultTheme {
    text: {
      font: string,
      size: (size: number) => string
      lineHeight: (height: number) => string
      weight: Map<TokenWeights, number>
    }
    colors: Map<TokenColors, string>
  }
}