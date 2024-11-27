import { CartItem } from '../interfaces/CartItem';

export class ItemManager {
    private items: CartItem[] = [];
  
    addItem(name: string, price: number, quantity: number): void {
      this.items.push({ name, price, quantity });
    }
  
    getItems(): CartItem[] {
      return this.items;
    }
  }