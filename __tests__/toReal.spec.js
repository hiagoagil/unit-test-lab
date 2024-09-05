const toReal = require('../utils/toReal')

test('Fornecendo valor 200 e obtendo R$ 200,00', () => {
    expect(toReal(200)).toBe('R$ 200,00')
});