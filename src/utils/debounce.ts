export const debounce = (fn: Function, timeout: number = 300) => {
  let timer: ReturnType<typeof setTimeout>
  return (...args: any[]) => {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => fn(...args), timeout)
  }
}