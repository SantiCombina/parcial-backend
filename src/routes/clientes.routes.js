import { Router } from "express";
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente,
  getCliente,
} from "../controllers/clientes.controller.js";

const router = Router();

router.get("/clientes", getClientes);

router.get("/cliente/:id", getCliente);

router.post("/clientes", createCliente);

router.patch("/cliente/:id", updateCliente);

router.delete("/cliente/:id", deleteCliente);

export default router;
