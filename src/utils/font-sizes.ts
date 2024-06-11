export const getFontSize = (size: number | [number, number, number], defaultValue: number = 16) => (responsiveStep: number = 0): number => {
  if (size instanceof Array)
    return size[responsiveStep] || defaultValue
  return size || defaultValue
}