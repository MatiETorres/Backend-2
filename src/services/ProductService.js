import ProductRepository from "../repositories/ProductRepository.js";

export default class ProductService {
  constructor() {
    this.repo = new ProductRepository();
  }

  getProducts() {
    return this.repo.getProducts();
  }

  createProduct(product) {
    return this.repo.addProduct(product);
  }
}
