import { makeAutoObservable } from "mobx";
import { Product } from "../model/Product";

export class ProductCatalogViewModel {
  products: Product[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addProduct(product: Product): void {
    this.products.push(product);
  }

  updateQuantity(productId: string, quantity: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.quantity = quantity;
    }
  }

  get totalValue(): number {
    return this.products.reduce((sum, p) => sum + p.price * p.quantity, 0);
  }
}