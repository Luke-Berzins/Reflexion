/*
 * All routes for sequences are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM sequences`;
    console.log(query);
    db.query(query)
      .then(data => {
        const sequences = data.rows;
        res.json({ sequences });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/personal", (req, res) => {
    const sessionUser = req.query.user
    let query = `SELECT * FROM sequences
    WHERE user_id = ${sessionUser}
    ;`;
    console.log(query);
    db.query(query)
      .then(data => {
        console.log(data.rows)
        const sequences = data.rows;
        res.json({ sequences });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO sequences (user_id, name)
       VALUES ($1::integer, $2::text)
       RETURNING id;
    `,
      [req.body.user_id, req.body.name]
    ).then(response => {
      res.send(response)
    })
  });
  return router;
};
