function calculateDiscount(price, discountPercentage) {
    const discountAmount = price * (discountPercentage / 100)
    return price - discountAmount
}

module.exports = calculateDiscount