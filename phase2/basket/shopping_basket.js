class ShoppingBasket {
    constructor() {
        this.basket = [];
        this.discount = 0;
    }

    applyDiscount(discount) {
        this.discount = discount;
      }

    addItem(candy) {
        this.basket.push(candy)
    }
    getTotalPrice() {
        let total = 0;
        this.basket.forEach((candy) => {
          total += candy.cost
        });
        return total - this.discount;
    }
};

const Candy = require("./candy");

module.exports = ShoppingBasket;

const sweet = new Candy("Mars", 10.00);

const basket = new ShoppingBasket;
basket.applyDiscount(1);
basket.addItem(sweet);
console.log(basket.getTotalPrice());