const {Shop, Item} = require("../src/gilded_rose");

describe("Aged Brie", function() {

  it("quality increases over time", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 2, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it("quality cannot be above 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(50);
  });

});
