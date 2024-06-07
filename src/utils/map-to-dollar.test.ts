import { mapToDollar } from './map-to-dollar'

describe('UTILS: mapToDollar', () => {
  it('should map keys to $ prefix', () => {
    const inputObject = { TEST_KEY_1: 'TEST_VALUE_1', TEST_KEY_2: 'TEST_VALUE_2', TEST_KEY_3: 'TEST_VALUE_3' }
    
    const result = mapToDollar(inputObject)

    expect(result).toEqual({
      $TEST_KEY_1: 'TEST_VALUE_1',
      $TEST_KEY_2: 'TEST_VALUE_2',
      $TEST_KEY_3: 'TEST_VALUE_3',
    })
  })

  test('should handle empty input object', () => {
    const inputObject = {}
    
    const result = mapToDollar(inputObject)

    expect(result).toEqual({})
  })
})