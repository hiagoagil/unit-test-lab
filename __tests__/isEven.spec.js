const isEven = require('../utils/isEven')

test('verifica se 2 é par e retorna true', () => {
    expect(isEven(2)).toBe(true)
})

test('verificar se 3 é impar e retorna false', () => {
    expect(isEven(3)).toBe(false)
})