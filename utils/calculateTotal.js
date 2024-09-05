function calculateTotal(items) {
    return items.reduce((total, item) => total + item, 0)
}

module.exports = calculateTotal
