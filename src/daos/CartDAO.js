export default class CartDAO {
  addProduct(cartId, product) {
    return { cartId, product };
  }
}
