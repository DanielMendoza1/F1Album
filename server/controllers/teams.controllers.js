import { pool } from "../db.js";

export const getTeams = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM teams");
  res.json(result);
};

export const getTeam = async (req, res) => {
  const [result] = await pool.query("SELECT * FROM teams WHERE id_team = ?", [req.params.id]);

  if(result.length == 0)
  return res.status(404).json({message: "Team not found"});

  res.json(result[0]);
};

