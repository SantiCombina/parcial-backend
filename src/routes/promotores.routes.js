import { Router } from "express";
import {
  getPromotores,
  getPromotor,
  createPromotor,
  updatePromotor,
  deletePromotor,
} from "../controllers/promotores.controller.js";

const router = Router();

router.get("/promotores", getPromotores);

router.get("/promotor/:id", getPromotor);

router.post("/promotores", createPromotor);

router.patch("/promotor/:id", updatePromotor);

router.delete("/promotor/:id", deletePromotor);

export default router;
