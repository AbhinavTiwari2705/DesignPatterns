We are using the Strategy Pattern to calculate tax based on country.

So instead of:

```ts


if (country === 'IN') tax = amount * 0.18;
else if (country === 'US') tax = amount * 0.07;
```
We’re doing this the clean way — with reusable classes, each handling its own logic.

🔍 Code Explanation (Line by Line)
1. Define a common interface
```ts

interface TaxStrategy {
  calculate(amount: number): number;
}
```
This is the base interface that all tax strategies will follow.
Every country’s tax logic will implement this .calculate() method.
So PaymentProcessor doesn’t care how tax is calculated — it just calls calculate().

2. Create individual tax strategy classes
ts
```
class IndiaTax implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.18;
  }
}
```
This class handles India’s tax rule (18% GST).
It implements the TaxStrategy interface and defines how to calculate the tax.

Similarly:

```ts

class USTax implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.07;
  }
}
```

```ts

class UKTax implements TaxStrategy {
  calculate(amount: number): number {
    return amount * 0.2;
  }
}
```
These are modular, isolated units — and that’s the core benefit of the Strategy Pattern.

3. Create the context class: PaymentProcessor
```ts

class PaymentProcessor {
  constructor(private strategy: TaxStrategy) {
    this.strategy = strategy;
  }

```
The constructor takes a TaxStrategy — this is dependency injection.
Now, this class doesn’t know which country’s logic it’s using — it just uses whatever it's given.

```ts

  setStrategy(strategy: TaxStrategy): void {
    this.strategy = strategy;
  }
```
This allows you to switch strategies at runtime if needed.

```ts

  processPayment(amount: number): void {
    const tax = this.strategy.calculate(amount);
    const total = amount + tax;
    console.log("--------");
    console.log(`Base Amount: ${amount}`);
    console.log(`Tax Applied: ${tax}`);
    console.log(`Total: ${total}`);
    console.log("--------\n");
  }
}

```
Here, we use the strategy to calculate tax and show the total.
The PaymentProcessor class doesn’t know what country it’s working for — and it doesn’t need to.

4. Usage
```ts
const indiaPayment = new PaymentProcessor(new IndiaTax());
indiaPayment.processPayment(1000);
```
We pass IndiaTax to the processor

It calculates 18% GST and prints total

```ts
const usPayment = new PaymentProcessor(new USTax());
usPayment.processPayment(1000);
```
Now we’re passing a different strategy, but the same processor logic works

Tax and total are calculated differently

🧠 Why This Pattern is Awesome:
1. Clean code — no big tax switch logic anywhere
2. Each country has its own file or class — isolated logic
3. Easy to test — test IndiaTax without touching payment logic
4. Easy to extend — want to add DubaiTax tomorrow? Just create a class, done.
