```javascript
Describe: Pizza()

Test: "It should return a pizza object with properties for toppings and size"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      myPizza;
Expected Output: Pizza {toppings: ["pepperoni", "sausage"], size: "medium"}


Describe: Pizza.prototype.sizePrice(size)

Test: "It should calculate the price based on the size of the pizza"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      pizza.sizePrice()
Expected Output: 10


Describe: Pizza.prototype.toppingPrice(size)

Test: "It should calculate the price based on the toppings on the pizza"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      pizza.toppingPrice()
Expected Output: 12
```
