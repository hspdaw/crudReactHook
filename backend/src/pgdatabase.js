const { Pool, Client } = require("pg");
const credentials = {
  user: "postgres",
  host: "localhost",
  database: 'duties',
  password: 'brucelee', //'Set Pass',
  port: 5432,
};

// Connect with a connection pool.
async function poolDemo() {
    const pool = new Pool(credentials);
    const now = await pool.query("SELECT NOW()");
    await pool.end();
  
    return now;
  }
  // Use a self-calling function so we can use async / await.
(async () => {
    const poolResult = await poolDemo();
    console.log("Time with pool: " + poolResult.rows[0]["now"]);
  })();

  const poolPG = new Pool(credentials);


module.exports = poolPG;