import express from "express";
import multer from "multer";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getFilteredProducts,
  recommendProducts, // ✅ Thêm dòng này
} from "../controllers/product.controller.js";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const productRouter = express.Router();

productRouter
  .route("/")
  .get(getAllProducts)
  .post(upload.array("images"), createProduct);

productRouter.route("/filtered").get(getFilteredProducts);

// ✅ Route gợi ý sản phẩm
productRouter.route("/recommend").get(recommendProducts);

productRouter
  .route("/:id")
  .get(getProductById)
  .put(upload.array("images"), updateProduct)
  .delete(deleteProduct);

export { productRouter };
