import { debounce } from './debounce'

describe('UTILS: Debounce', () => {
  
  beforeEach(() => {
    jest.clearAllTimers()
  })

  it('should delay function and do only last call after timeout', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 10)

    debouncedFn('CALL 1')
    jest.advanceTimersByTime(5)
    expect(mockFn).not.toHaveBeenCalled()

    
    debouncedFn('CALL 2')
    jest.advanceTimersByTime(11)
    expect(mockFn).toHaveBeenCalledWith('CALL 2')
  })

  it('should delay function and do only last call after default timeout', () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn)

    debouncedFn('CALL 1')
    jest.advanceTimersByTime(299)
    expect(mockFn).not.toHaveBeenCalled()

    
    debouncedFn('CALL 2')
    jest.advanceTimersByTime(301)
    expect(mockFn).toHaveBeenCalledWith('CALL 2')
  })
})