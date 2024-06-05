import 'styled-components'

type map<L extends string, T> = { [k in L]: T }

declare type tokenSizes = 'sm' | 'md' | 'lg' | 'xl' | 'xx'
declare type tokenWeights = 'regular' | 'semibold' | 'bold'
declare type tokenAligns = 'left' | 'center' | 'right'

type text = {
  variants?: 'title' | 'subtitle' | 'heading' | 'body'
  font: string,
  fontSize: map<tokenSizes, number>,
  lineHeight: map<tokenSizes, number>,
  weight: map<tokenWeights, number>,
  align: map<tokenAligns, tokenAligns>
}

declare module 'styled-components' {
  interface DefaultTheme {
    text: text
  }
}