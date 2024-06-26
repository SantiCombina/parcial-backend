import { Router } from "express";
import {
  getClientes,
  createCliente,
  updateCliente,
  deleteCliente
} from "../controllers/clientes.controller";

const router = Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Cliente:
 *      type: object
 *      properties:
 *        id:
 *          type: integer
 *          description: el id autogenerado del cliente
 *        nombre:
 *          type: string
 *          description: el nombre del cliente
 *        domicilio:
 *          type: string
 *          description: el domicilio del cliente
 *        idLocalidad:
 *          type: integer
 *          description: el id de la localidad del cliente
 *        idPromotor:
 *          type: integer
 *          description: el id del promotor del cliente
 *        saldo:
 *          type: integer
 *          description: el saldo del cliente
 *      required:
 *        - nombre
 *        - domicilio
 *      example:
 *        nombre: Santiago
 *        domicilio: Domicilio 1
 *        idLocalidad: 1
 *        idPromotor: 1
 *        saldo: 1000
 *    ClienteNotFound:
 *      type: object
 *      properties:
 *        message:
 *          type: string
 *          description: Mensaje de cliente no encontrado
 *      example:
 *        message: Cliente no encontrado
 *
 *  parameters:
 *    clienteId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: integer
 *      description: el id del cliente
 */

/**
 * @swagger
 * tags:
 *  name: Clientes
 *  description: Endpoints para clientes
 */

/**
 * @swagger
 * /api/clientes:
 *  get:
 *    summary: Retorna una lista de clientes
 *    tags: [Clientes]
 *    responses:
 *      200:
 *        description: Lista de clientes
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Cliente'
 */
router.get("/api/clientes", getClientes);

/**
 * @swagger
 * /api/clientes:
 *  post:
 *    summary: Crea un nuevo cliente
 *    tags: [Clientes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cliente'
 *    responses:
 *      200:
 *        description: Cliente creado exitosamente
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cliente'
 *      500:
 *        description: Error del servidor
 */
router.post("/api/clientes", createCliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *  put:
 *    summary: Actualiza un cliente por id
 *    tags: [Clientes]
 *    parameters:
 *      - $ref: '#/components/parameters/clienteId'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Cliente'
 *    responses:
 *      200:
 *        description: Cliente actualizado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Cliente'
 *      404:
 *        description: Cliente no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 */
router.put("/api/clientes/:id", updateCliente);

/**
 * @swagger
 * /api/clientes/{id}:
 *  delete:
 *    summary: Elimina un cliente por id
 *    tags: [Clientes]
 *    parameters:
 *      - $ref: '#/components/parameters/clienteId'
 *    responses:
 *      200:
 *        description: Cliente eliminado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 *      404:
 *        description: Cliente no encontrado
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ClienteNotFound'
 */
router.delete("/api/clientes/:id", deleteCliente);

export default router;
