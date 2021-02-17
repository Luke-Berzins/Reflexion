/*
 * All routes for sequence_pose are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM sequence_pose`;
    console.log(query);
    db.query(query)
      .then(data => {
        const sequence_pose = data.rows;
        res.json({ sequence_pose });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    db.query(
      `INSERT INTO sequences (name)
       VALUES ($1::text)
       RETURNING id;
    `,
      [req.body.name]
    ).then(response => {
      res.send(response)
    })
  });
  return router;
};
