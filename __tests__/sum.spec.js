const sum = require('../utils/sum')

test('Somando 50 + 50 e obtendo valor 100', () => {
    expect(sum(50,50)).toBe(100)
});