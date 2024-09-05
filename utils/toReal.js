function toReal(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}
console.log(toReal(200))
module.exports = toReal