import { pool } from "../db.js";

export const getProvincias = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Provincia");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las provincias",
    });
  }
};

export const getProvincia = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Provincia WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Provincia no encontrada" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la provincia",
    });
  }
};

export const createProvincia = async (req, res) => {
  const { nombre } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO Provincia(nombre) VALUES (?)",
      [nombre]
    );
    res.send({
      id: rows.insertId,
      nombre,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear la provincia",
    });
  }
};

export const deleteProvincia = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Provincia WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Provincia no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar la provincia",
    });
  }
};

export const updateProvincia = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  try {
    const [rows] = await pool.query(
      "UPDATE Provincia SET nombre = IFNULL(?, nombre) WHERE id = ?",
      [nombre, id]
    );
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Provincia no encontrada" });
    }
    const [provincia] = await pool.query("SELECT * FROM Provincia WHERE id = ?", [
      id,
    ]);
    res.json(provincia[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar la provincia",
    });
  }
};
