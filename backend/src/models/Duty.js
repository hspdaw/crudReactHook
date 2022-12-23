const poolPG = require("../pgdatabase");

// EMPTY OBJECT
// USED FOR EXPORTING THE FUNCTIONS BELOW
const Duty = {};

Duty.findByIdAndDelete = (id) => {
  const textQuerie = `DELETE FROM duties WHERE id = $1`;
  const value = [id];
  poolPG.query(textQuerie, value);
};

Duty.create = (name) => {
  const textQuerie = `INSERT INTO duties (name) VALUES ($1)`;
  const value = [name];
  poolPG.query(textQuerie, value);
};

Duty.findByIdAndUpdate = (id, data) => {
  const textQuerie = `UPDATE duties SET name = $2 WHERE id = $1`;
  const value = [id, data];
  return poolPG.query(textQuerie, value);
};

Duty.findById = (id) => {
  const textQuerie = `SELECT * FROM duties WHERE id = $1`;
  const value = [id];
  return poolPG.query(textQuerie, value);
};

Duty.findAll = () => {
  return poolPG.query("SELECT * FROM duties");
};

module.exports = Duty;
