# Gilded Rose

This is the Gilded Rose kata in JavaScript with Jest. - I forgot the requirement to not edit the item class in the week between reading the requirements and starting the task. I will look back at this at a later date to keep achieve the refactor and additional functionality without editing the item class. However I think the refactor atm is ok and the testing of the code is worthwhile to keep around, so I will move this solution to a seperate branch when I start this again later.

## Getting started

Install dependencies

```sh
npm install
```

## Running tests

To run all tests

```sh
npm test
```

To run all tests in watch mode

```sh
npm run test:watch
```

To generate test coverage report

```sh
npm run test:coverage
```

# Requirements to Test

* All items have a SellIn value which denotes the number of days we have to sell the item. All items have a Quality value which denotes how valuable the item is. At the end of each day our system lowers both values for every item.

* Once the sell by date has passed, Quality degrades twice as fast
* The Quality of an item is never negative
* “Aged Brie” actually increases in Quality the older it gets
* The Quality of an item is never more than 50
* “Sulfuras”, being a legendary item, never has to be sold or decreases in Quality
* “Backstage passes”, like aged brie, increases in Quality as it’s SellIn value approaches; Quality increases by 2 when there are 10 days or less and by 3 when there are 5 days or less but Quality drops to 0 after the concert
