import { Product } from "../domain/Product";
import { ProductRepository } from "../domain/Product";

export class ProductService {
  constructor(private readonly repository: ProductRepository) {}

  addProduct(name: string, price: number, quantity: number): Product {
    const id = Math.random().toString(36).substring(7); // Generate a random ID
    const product = new Product(id, name, price, quantity);
    this.repository.addProduct(product);
    return product;
  }

  getProductById(id: string): Product | undefined {
    return this.repository.getProductById(id);
  }

  getAllProducts(): Product[] {
    return this.repository.getAllProducts();
  }

  updateProduct(id: string, name: string, price: number, quantity: number): void {
    const existingProduct = this.repository.getProductById(id);
    if (!existingProduct) throw new Error("Product not found.");
    existingProduct.name = name;
    existingProduct.price = price;
    existingProduct.quantity = quantity;
    this.repository.updateProduct(existingProduct);
  }

  deleteProduct(id: string): void {
    this.repository.deleteProduct(id);
  }
}