import CartDAO from "../daos/CartDAO.js";

export default class CartRepository {
  constructor() {
    this.dao = new CartDAO();
  }

  addProduct(cartId, product) {
    return this.dao.addProduct(cartId, product);
  }
}
