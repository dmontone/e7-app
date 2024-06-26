import { DefaultTheme } from 'styled-components'

export const text: DefaultTheme['text'] = {
  font: '"figtree", sans-serif',
  size: (step) => step * 2 + 'px',
  lineHeight: (step) => step * 2 + 'px',
  weight: {
    normal: 400,
    semibold: 600,
    bold: 700
  }
}

