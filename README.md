```javascript
Describe: Pizza()

Test: "It should return a pizza object with properties for toppings and size"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      myPizza;
Expected Output: Pizza {toppings: ["pepperoni", "sausage"], size: "medium"}


Describe: Pizza.prototype.sizePrice(size)

Test: "It should calculate the price based on the size of the pizza"
Code: const pizza = new Pizza (["pepperoni", "sausage"], "medium")
      pizza.sizePrice(medium)
      console.log(size.price)
Expected Output: 10
```
