import { pool } from "../db.js";

export const getTeams = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM teams");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTeam = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM teams WHERE id_team = ?", [
      req.params.id,
    ]);

    if (result.length == 0)
      return res.status(404).json({ message: "Team not found" });

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
