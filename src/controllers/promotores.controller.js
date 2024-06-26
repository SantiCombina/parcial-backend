import { pool } from "../db.js";

export const getPromotores = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Promotor");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los promotores",
    });
  }
};

export const getPromotor = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Promotor WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Promotor no encontrado" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener el promotor",
    });
  }
};

export const createPromotor = async (req, res) => {
  const { nombre } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO Promotor(nombre) VALUES (?)",
      [nombre]
    );
    res.send({
      id: rows.insertId,
      nombre,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear el promotor",
    });
  }
};

export const deletePromotor = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Promotor WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Promotor no encontrado" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el promotor",
    });
  }
};

export const updatePromotor = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const [rows] = await pool.query(
      "UPDATE Promotor SET nombre = IFNULL(?, nombre) WHERE id = ?",
      [nombre, id]
    );
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Promotor no encontrado" });
    }
    const [promotor] = await pool.query("SELECT * FROM Promotor WHERE id = ?", [
      id,
    ]);
    res.json(promotor[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el promotor",
    });
  }
};
