import ProductDAO from "../daos/ProductDAO.js";

export default class ProductRepository {
  constructor() {
    this.dao = new ProductDAO();
  }

  getProducts() {
    return this.dao.getAll();
  }

  addProduct(product) {
    return this.dao.create(product);
  }
}
