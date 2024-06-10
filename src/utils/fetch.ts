export const fetch = <T>(svc: () => Promise<T>) => async (preFn: () => void, successFn: (res: T) => void, errorFn: (e: any) => void) => {
  preFn()
  try {
    const response = await svc()
    successFn(response)
  } catch (e: any) {
    errorFn(e)
  }
}