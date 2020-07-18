const {Shop, Item} = require("../src/gilded_rose");

describe("Sulfuras, Hand of Ragnaros", function() {

  it("quality doesn't change", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(2);
  });

  it("sellIn doesn't change", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
  });

});
