import { pool } from "../db.js";

export const getClientes = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Cliente");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los clientes",
    });
  }
};

export const getCliente = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Cliente WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el cliente",
    });
  }
};

export const createCliente = async (req, res) => {
  const { nombre, domicilio, idLocalidad, idPromotor, saldo } = req.body;

  try {
    const [rows] = await pool.query(
      "INSERT INTO Cliente(nombre, domicilio, idLocalidad, idPromotoy, Saldo) VALUES (?, ?, ?, ?, ?)",
      [nombre, domicilio, idLocalidad, idPromotor, saldo]
    );
    res.send({
      id: rows.insertId,
      nombre,
      domicilio,
      idLocalidad,
      idPromotor,
      saldo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el cliente",
    });
  }
};

export const deleteCliente = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Cliente WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el cliente",
    });
  }
};

export const updateCliente = async (req, res) => {
  const { id } = req.params;
  const { nombre, domicilio, idLocalidad, idPromotor, saldo } = req.body;

  try {
    const [rows] = await pool.query(
      "UPDATE Cliente SET nombre = IFNULL(?, nombre), domicilio = IFNULL(?, domicilio), idLocalidad = IFNULL(?, idLocalidad), idPromotor = IFNULL(?, idPromotor), saldo = IFNULL(?, saldo) WHERE id = ?",
      [nombre, domicilio, idLocalidad, idPromotor, saldo, id]
    );
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Cliente no encontrado" });
    }
    const [cliente] = await pool.query("SELECT * FROM Cliente WHERE id = ?", [
      id,
    ]);
    res.json(cliente[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el cliente",
    });
  }
};
