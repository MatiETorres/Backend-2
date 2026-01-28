import CartService from "../services/CartService.js";

const service = new CartService();

export const addProductToCart = (req, res) => {
  const { cid } = req.params;
  res.json(service.addProduct(cid, req.body));
};
