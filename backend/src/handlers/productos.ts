import { RequestHandler } from "express";
import { ProductService } from "../services/productos";
import { Product } from "../models/productos";

export class ProductHandler {
  private productService: ProductService;

  constructor(productService: ProductService) {
    this.productService = productService;
  }

  getAllProducts(): RequestHandler {
    return async (_req, res) => {
      console.log("Hola")
      const products = await this.productService.getAllProducts();
      res.status(200).json(products);
    };
  }

  getProductById(): RequestHandler {
    return async (req, res) => {
      const productId = Number(req.params["productId"]);

      const product = await this.productService.getProductById(productId);
      if (!product) {
        throw new Error(`Product with ID ${productId} not found.`);
      }

      res.status(200).json(product);
    };
  }

  createProduct(): RequestHandler {
    return async (req, res) => {
      const productData: Product = req.body;

      const createdProduct = await this.productService.createProduct(productData);
      res.status(201).json(createdProduct);
    };
  }

  updateProduct(): RequestHandler {
    return async (req, res) => {
      const productId = Number(req.params["productId"]);
      const productData: Product = req.body;

      const updatedProduct = await this.productService.updateProduct(productData);
      if (!updatedProduct) {
        throw new Error(`Product with ID ${productId} not found.`);
      }

      res.status(200).json(updatedProduct);
    };
  }

  deleteProduct(): RequestHandler {
    return async (req, res) => {
      const productId = Number(req.params["productId"]);

      const deletedProduct = await this.productService.deleteProduct(productId);
      if (!deletedProduct) {
        throw new Error(`Product with ID ${productId} not found.`);
      }

      res.status(200).json(deletedProduct);
    };
  }

  // Puedes agregar métodos adicionales según las necesidades de tu aplicación
}