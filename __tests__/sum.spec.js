const sum = require('../utils/sum')

test('soma 2 + 2 deve ser igual a 4', () => {
    expect(sum(2, 2)).toBe(4)
})