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
  return router;
};