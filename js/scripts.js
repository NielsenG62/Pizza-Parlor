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

Pizza.prototype.toppingPrice = function () {
  let price = 0;
  let toppings = this.toppings;
  for (i = 0; i < this.toppings.length; i++) {
    if (
      toppings[i] === "pepperoni" ||
      toppings[i] === "sausage" ||
      toppings[i] === "ham" ||
      toppings[i] === "bacon"
    ) {
      price += 1.5;
    } else {
      price += 1.0;
    }
  }
  return price;
};

Pizza.prototype.priceCalc = function () {
  let price = this.sizePrice() + this.toppingPrice();
  return price.toFixed(2);
};

// UI Logic

function pizzaBuild() {
  const size = $("#size").val();
  const toppings = $("input:checked").map(function () {
    return $(this).val();
  });
  const pizza = new Pizza(toppings, size);
  const price = pizza.priceCalc();
  $("#total").text(price);
  return price;
}

$("document").ready(function () {
  $("form").submit(function (event) {
    event.preventDefault();
    const price = pizzaBuild();
    if ($("#size option:selected").val() === "null") {
      $("#results p").text("Please select a size for your pizza");
      $("#results p").addClass("error");
    } else {
      $("#results p").text("Thank you! Your pizza will be ready shortly.");
      $("#results p").removeClass("error");
      $("img").attr("src", "img/pizza-dance.gif");
    }
    $("#results").removeClass("hidden");
  });
  $("html").change(function () {
    pizzaBuild();
  });
});
