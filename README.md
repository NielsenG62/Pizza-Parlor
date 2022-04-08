# _Pizza Parlor Website_

#### By _**Gabe Nielsen**_

#### _A site to order pizzas_

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _JavaScript_
- _jQuery_

## Description

_This webpage is for a fictional pizza parlor to order your pizza. The user can select a size and choice of toppings. There is a price counter that automatically updates the price of the pizza whenever there is a change to it. On submission, an error occurs if there was not a size chosen, or a thank you message appears._

## Setup/Installation Requirements

- _Clone this repository_
- _Navigate to the top level of this directory_
- _Open index.html in your browser of choice_

## Link to project on GitHub Pages

https://nielseng62.github.io/Pizza-Parlor

## Known Bugs

- _None that I know of as of this commit._

## License

Copyright (c) _2022_ _Gabe Nielsen_

## Specs:

```javascript
Describe: Pizza()

Test: "It should return a pizza object with properties for toppings and size"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      myPizza;
Expected Output: Pizza {toppings: ["pepperoni", "sausage"], size: "medium"}


Describe: Pizza.prototype.sizePrice()

Test: "It should calculate the price based on the size of the pizza"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      pizza.sizePrice()
Expected Output: 10


Describe: Pizza.prototype.toppingPrice()

Test: "It should calculate the price based on the toppings on the pizza"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      pizza.toppingPrice()
Expected Output: 2

Test: "It should calculate different prices if the topping is a meat"
Code: const pizza = new Pizza (["pepperoni", "onions"], "medium")
      pizza.toppingPrice()
Expected Output: 2.50


Describe Pizza.prototype.priceCalc()

Test: "It should calculate the total cost of the pizza"
Code: const pizza = new Pizza (["pepperoni", "onions"], "medium")
      pizza.priceCalc()
Expected Output: "12.50"
```
