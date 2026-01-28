import CartRepository from "../repositories/CartRepository.js";

export default class CartService {
  constructor() {
    this.repo = new CartRepository();
  }

  addProduct(cartId, product) {
    return this.repo.addProduct(cartId, product);
  }
}
