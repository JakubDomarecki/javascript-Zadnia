function Basket() {
    this.products = [];
    this.sum = 0;
}

Basket.prototype.addProduct = function (name, price) {
    this.products.push({ name: name, price: price });
    this.sum += price;
};

Basket.prototype.showBasket = function () {
    console.log(this.products);
    console.log(this.sum);
};