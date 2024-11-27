import { CartItem } from "../interfaces/CartItem";
import { CheckoutProcessor } from '../interfaces/CheckoutProcessor';

export class PriceCalculator {
    calculateTotal(items: CartItem[]): number {
      return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
}

export class DefaultCheckoutProcessor implements CheckoutProcessor {
    process(totalAmount: number): void {
      console.log("Processing payment for total:", totalAmount);
    }
}