import { pool } from "../db.js";

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 1 + 1 AS solution");
  res.json(result[0]);
};
