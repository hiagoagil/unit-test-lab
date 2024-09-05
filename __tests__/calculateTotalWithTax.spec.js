const calculateTotalWithTax = require('../utils/calculateTotalWithTax')

test('Valor de 100 com desconto de 10', () => {
    expect(calculateTotalWithTax(100,10)).toBe(110)
});