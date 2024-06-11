export const getSize = (size: number | [number, number, number]) => (responsiveStep: number = 0): number => {
  if (size instanceof Array)
    return size[responsiveStep]
  return size
}