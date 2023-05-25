class Candy {
    constructor(brand, cost) {
        this.brand = brand
        this.cost = cost
    }
    getName() {
        return this.brand
    }
    getPrice() {
        return this.cost
    }
};

module.exports = Candy;