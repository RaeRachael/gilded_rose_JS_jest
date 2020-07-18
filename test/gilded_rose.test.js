const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  describe("item", function() {

    it("returns correct name", function() {
      const gildedRose = new Shop([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toBe("foo");
    });

    it("quality decreases over time", function() {
      const gildedRose = new Shop([new Item("foo", 2, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(1);
    });
    it("quality decreases faster after sellIn == 0", function() {
      const gildedRose = new Shop([new Item("foo", 0, 2)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    it("quality cannot be negative", function() {
      const gildedRose = new Shop([new Item("foo", 0, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toBe(0);
    });
    it("quality cannot be above 50", function() {
      const gildedRose = new Shop([new Item("foo", 0, 56)]);
      const items = gildedRose.items;
      expect(items[0].quality).toBe(50);
    });

    it("sellIn decreases on a day update", function() {
      const gildedRose = new Shop([new Item("foo", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
    });
  });
});
