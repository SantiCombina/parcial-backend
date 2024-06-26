import { Router } from "express";
import {
  getProvincias,
  getProvincia,
  createProvincia,
  updateProvincia,
  deleteProvincia,
} from "../controllers/provincias.controller.js";

const router = Router();

router.get("/provincias", getProvincias);

router.get("/provincia/:id", getProvincia);

router.post("/provincias", createProvincia);

router.patch("/provincia/:id", updateProvincia);

router.delete("/provincia/:id", deleteProvincia);

export default router;
