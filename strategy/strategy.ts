interface TaxStrategy {
    calculate(amount: number): number;
  }
  
  class IndiaTax implements TaxStrategy {
    calculate(amount: number): number {
      return amount * 0.18;
    }
  }
  
  class USTax implements TaxStrategy {
    calculate(amount: number): number {
      return amount * 0.07;
    }
  }
  
  class UKTax implements TaxStrategy {
    calculate(amount: number): number {
      return amount * 0.2;
    }
  }
  
  class PaymentProcessor {
    private strategy: TaxStrategy;
  
    constructor(strategy: TaxStrategy) {
      this.strategy = strategy;
    }
  
    setStrategy(strategy: TaxStrategy): void {
      this.strategy = strategy;
    }
  
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
  
  // Run
  const indiaPayment = new PaymentProcessor(new IndiaTax());
  indiaPayment.processPayment(1000);
  
  const usPayment = new PaymentProcessor(new USTax());
  usPayment.processPayment(1000);
  
  const ukPayment = new PaymentProcessor(new UKTax());
  ukPayment.processPayment(1000);
  