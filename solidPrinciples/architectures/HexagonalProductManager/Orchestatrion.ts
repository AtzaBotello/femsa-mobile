import { ProductService } from "./application/ProductService";
import { InMemoryProductRepository } from "./infraestructure/InMemoryProductRepository";

const repository = new InMemoryProductRepository();
const productService = new ProductService(repository);

const product1 = productService.addProduct("Laptop", 1000, 10);
const product2 = productService.addProduct("Phone", 500, 20);

console.log("All Products:", productService.getAllProducts());

productService.updateProduct(product1.id, "Gaming Laptop", 1200, 8);
console.log("Updated Product:", productService.getProductById(product1.id));

productService.deleteProduct(product2.id);
console.log("All Products After Deletion:", productService.getAllProducts());