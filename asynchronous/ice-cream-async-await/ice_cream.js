const time = require("./time.js");
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};
let is_shop_open = true;

async function kitchen() {
  try {
    await time.time(2000, is_shop_open);
    console.log(`${stocks.Fruits[0]} was selected`);
    await time.time(0000, is_shop_open);
    console.log("production has started");
    await time.time(2000, is_shop_open);
    console.log("fruit has been chopped");
    await time.time(1000, is_shop_open);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`);
    await time.time(1000, is_shop_open);
    console.log("start the machine");
    await time.time(2000, is_shop_open);
    console.log(`ice cream placed on ${stocks.holder[1]}`);
    await time.time(3000, is_shop_open);
    console.log(`${stocks.toppings[0]} as toppings`);
    await time.time(2000, is_shop_open);
    console.log("Serve Ice Cream");
  } catch (error) {
    console.log("customer left");
  }
}

kitchen();
