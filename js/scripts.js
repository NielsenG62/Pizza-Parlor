function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.sizePrice = function () {
  let price;
  if (this.size === "small") {
    price = 7;
  } else if (this.size === "medium") {
    price = 10;
  } else {
    price = 15;
  }
  return price;
};
