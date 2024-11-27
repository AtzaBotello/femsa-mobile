import { ItemManager } from "./class/ItemManager";
import { DefaultCheckoutProcessor, PriceCalculator } from "./class/PriceProcessor";
import { CheckoutProcessor } from "./interfaces/CheckoutProcessor";

class ShoppingCart {
    private itemManager: ItemManager;
    private priceCalculator: PriceCalculator;
    private checkoutProcessor: CheckoutProcessor;
  
    constructor(
      itemManager: ItemManager,
      priceCalculator: PriceCalculator,
      checkoutProcessor: CheckoutProcessor
    ) {
      this.itemManager = itemManager;
      this.priceCalculator = priceCalculator;
      this.checkoutProcessor = checkoutProcessor;
    }
  
    addItem(name: string, price: number, quantity: number): void {
      this.itemManager.addItem(name, price, quantity);
    }
  
    calculateTotal(): number {
      return this.priceCalculator.calculateTotal(this.itemManager.getItems());
    }
  
    checkout(): void {
      const total = this.calculateTotal();
      this.checkoutProcessor.process(total);
    }
  }
  

// Ejemplo de implementacion

const itemManager = new ItemManager();
const priceCalculator = new PriceCalculator();
const checkoutProcessor = new DefaultCheckoutProcessor();

const shoppingCart = new ShoppingCart(itemManager, priceCalculator, checkoutProcessor);

shoppingCart.addItem("Apple", 1.0, 3);
shoppingCart.addItem("Banana", 0.5, 6);

console.log("Total:", shoppingCart.calculateTotal());
shoppingCart.checkout();