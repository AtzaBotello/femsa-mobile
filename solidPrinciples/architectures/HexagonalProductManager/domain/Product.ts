export class Product {
    constructor(
      public readonly id: string,
      public name: string,
      public price: number,
      public quantity: number
    ) {
      if (price <= 0) throw new Error("Price must be greater than zero.");
      if (quantity < 0) throw new Error("Quantity cannot be negative.");
    }
}
  
export interface ProductRepository {
    addProduct(product: Product): void;
    getProductById(id: string): Product | undefined;
    getAllProducts(): Product[];
    updateProduct(product: Product): void;
    deleteProduct(id: string): void;
}