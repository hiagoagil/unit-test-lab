const TesteSomaList = require('../utils/calculateTotal')

test('Somando lista de valores com 100 e 300 e recebendo 400', () => {
    const list = [ 100,300]
    expect(TesteSomaList(list)).toBe(400)

});