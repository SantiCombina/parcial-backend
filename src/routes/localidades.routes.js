import { Router } from "express";
import {
  getLocalidades,
  getLocalidad,
  createLocalidad,
  updateLocalidad,
  deleteLocalidad,
} from "../controllers/localidades.controller.js";

const router = Router();

router.get("/localidades", getLocalidades);

router.get("/localidad/:id", getLocalidad);

router.post("/localidades", createLocalidad);

router.patch("/localidad/:id", updateLocalidad);

router.delete("/localidad/:id", deleteLocalidad);

export default router;
