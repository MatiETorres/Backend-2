import ProductService from "../services/ProductService.js";

const service = new ProductService();

export const getProducts = (req, res) => {
  res.json(service.getProducts());
};

export const createProduct = (req, res) => {
  res.json(service.createProduct(req.body));
};
