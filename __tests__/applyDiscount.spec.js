const calculateDiscount = require('../utils/applyDiscount')

test('em R$100 aplica 10% de desconto', () => {
    expect(calculateDiscount(100, 10)).toBe(90)
})