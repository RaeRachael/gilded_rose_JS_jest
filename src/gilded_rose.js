class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
    this.limitsOnQuality()
  }

  updateQuality() {
    if (this.name == "Backstage passes to a TAFKAL80ETC concert") {
      if (this.sellIn == 0) {
        this.quality = 0;
      } else if (this.sellIn < 6) {
          this.qualityChange(3)
      } else if (this.sellIn < 11) {
          this.qualityChange(2)
      } else {
        this.qualityChange(1)
      }
    } else if (this.name == "Aged Brie") {
      this.qualityChange(1)
    } else if (this.name == "Sulfuras, Hand of Ragnaros") {
    } else {
      if (this.sellIn > 0) {
        this.qualityChange(-1)
      } else {
        this.qualityChange(-2)
      }
    }
  }

  qualityChange(number) {
    this.quality += number
    this.limitsOnQuality()
  }

  limitsOnQuality() {
    if (this.quality < 0) {
      this.quality = 0
    } else if (this.quality > 50) {
      this.quality = 50
    }
  }

}

class Shop {
  constructor(items=[]){
    this.items = items;
  }

  updateQuality() {
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].updateQuality()
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn -= 1;
      }
    }

    return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
