export interface CheckoutProcessor {
    process(totalAmount: number): void;
  }