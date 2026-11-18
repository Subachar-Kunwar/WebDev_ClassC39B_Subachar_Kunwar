let purchaseAmount = 120;

if (purchaseAmount >= 100) {
    purchaseAmount = purchaseAmount * 80 / 100;
} else if (purchaseAmount >= 50) {
    purchaseAmount = purchaseAmount * 90 / 100;
}

console.log("Final Price:", purchaseAmount);
