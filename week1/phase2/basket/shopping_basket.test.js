const ShoppingBasket = require("./shopping_basket")

describe('ShoppingBasket', () => {
    it('returns a total price of 0 when empty', () => {
      const basket = new ShoppingBasket
      expect(basket.getTotalPrice()).toEqual(0);
    });
    it('returns 4.99 when a Marsbar has been added to the basket', () => {
        const mockCandy = {
            brand: "mars",
            cost: 4.99
        }
        const basket = new ShoppingBasket;
        basket.addItem(mockCandy);
        expect(basket.getTotalPrice()).toEqual(4.99);
      });
  });