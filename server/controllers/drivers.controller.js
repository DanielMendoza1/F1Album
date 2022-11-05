import { pool } from "../db.js";

export const getDrivers = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM drivers");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDriver = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM drivers WHERE id_driver = ?",
      [req.params.id]
    );

    if (result.length == 0)
      return res.status(404).json({ message: "Driver not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
