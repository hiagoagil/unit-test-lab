const calculateTotal = require('../utils/calculateTotal')

test('calcula o total de uma lista de valores', () => {
    const items = [100, 200, 300]
    expect(calculateTotal(items)).toBe(600)
})