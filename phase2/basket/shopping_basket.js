class ShoppingBasket {
    constructor() {
        this.basket = [];
    }
    addItem(candy) {
        this.basket.push(candy)
    }
    getTotalPrice() {
        let total = 0;
        this.basket.forEach((candy) => {
          total += candy.cost
        });
        return total;
    }
};

module.exports = ShoppingBasket;