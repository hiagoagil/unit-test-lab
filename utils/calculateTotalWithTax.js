function calculateTotalWithTax(value, taxRate) {
    return value + (value * (taxRate / 100))
}

module.exports = calculateTotalWithTax

