const toReal = require('../utils/toReal')

test('transforma 800 em R$800', () => {
    expect(toReal(800)).toBe('R$ 800,00')
})