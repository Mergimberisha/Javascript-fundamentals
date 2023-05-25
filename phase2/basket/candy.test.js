const Candy = require("./candy")

describe('Candy', () => {
    it('returns only the candies name', () => {
      const candy = new Candy("Mars", 4.99)
      expect(candy.getName()).toEqual('Mars');
      expect(candy.getPrice()).toEqual(4.99);
    });
  });