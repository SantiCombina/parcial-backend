import { pool } from "../db.js";

export const getLocalidades = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Localidad");
    res.json(rows);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener las localidades",
    });
  }
};

export const getLocalidad = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM Localidad WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.length <= 0) {
      return res.status(404).json({ message: "Localidad no encontrada" });
    }
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener la localidad",
    });
  }
};

export const createLocalidad = async (req, res) => {
  const { nombre, idProvincia } = req.body;
  try {
    const [rows] = await pool.query(
      "INSERT INTO Localidad(nombre, idProvincia) VALUES (?, ?)",
      [nombre, idProvincia]
    );
    res.send({
      id: rows.insertId,
      nombre,
      idProvincia,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al crear la localidad",
    });
  }
};

export const deleteLocalidad = async (req, res) => {
  try {
    const [rows] = await pool.query("DELETE FROM Localidad WHERE id = ?", [
      req.params.id,
    ]);
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Localidad no encontrada" });
    }
    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar la localidad",
    });
  }
};

export const updateLocalidad = async (req, res) => {
  const { id } = req.params;
  const { nombre, idProvincia } = req.body;
  try {
    const [rows] = await pool.query(
      "UPDATE Localidad SET nombre = IFNULL(?, nombre), idProvincia = IFNULL(?, idProvincia) WHERE id = ?",
      [nombre, idProvincia, id]
    );
    if (rows.affectedRows <= 0) {
      return res.status(404).json({ message: "Localidad no encontrada" });
    }
    const [localidad] = await pool.query("SELECT * FROM Localidad WHERE id = ?", [
      id,
    ]);
    res.json(localidad[0]);
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar la localidad",
    });
  }
};
