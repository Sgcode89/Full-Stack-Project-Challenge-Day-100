const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const quantityInput = document.getElementById('quantity');
const addToCartBtn = document.getElementById('addToCart');

decreaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    if (currentValue > 1) quantityInput.value = currentValue - 1;
});

increaseBtn.addEventListener('click', () => {
    let currentValue = parseInt(quantityInput.value);
    quantityInput.value = currentValue + 1;
});

addToCartBtn.addEventListener('click', () => {
    const quantity = quantityInput.value;
    alert(`Added ${quantity} item(s) to your cart!`);
});
