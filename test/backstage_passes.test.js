const {Shop, Item} = require("../src/gilded_rose");

describe("Backstage Passes", function() {

  it("quality increases by 1 when sellIn > 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 20, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(3);
  });

  it("quality increases by 2 when sellIn > 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(4);
  });

  it("quality increases by 3 when sellIn =< 5", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(5);
  });

  it("quality == 0 if sellIn was 0", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 2)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toBe(0);
  });

});
