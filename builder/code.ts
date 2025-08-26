// Product class
class Burger {
  private size: string;
  private cheese: boolean;
  private tomato: boolean;
  private lettuce: boolean;

  constructor(builder: BurgerBuilder) {
    this.size = builder.size;
    this.cheese = builder.cheese;
    this.tomato = builder.tomato;
    this.lettuce = builder.lettuce;
  }

  describe() {
    console.log(
      `Burger Size: ${this.size}, Cheese: ${this.cheese}, Tomato: ${this.tomato}, Lettuce: ${this.lettuce}`
    );
  }
}

// Builder class
class BurgerBuilder {
  size: string;
  cheese: boolean = false;
  tomato: boolean = false;
  lettuce: boolean = false;

  constructor(size: string) {
    this.size = size;
  }

  addCheese(): BurgerBuilder {
    this.cheese = true;
    return this;
  }

  addTomato(): BurgerBuilder {
    this.tomato = true;
    return this;
  }

  addLettuce(): BurgerBuilder {
    this.lettuce = true;
    return this;
  }

  build(): Burger {
    return new Burger(this);
  }
}

// Client code
const burger = new BurgerBuilder("Large")
  .addCheese()
  .addTomato()
  .build();

burger.describe();
// Output: Burger Size: Large, Cheese: true, Pepperoni: true, Lettuce: false
