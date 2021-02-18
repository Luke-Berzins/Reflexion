/*
 * All routes for poses are defined here
 * Since this file is loaded in server.js into api/widgets,
 *   these routes are mounted onto /widgets
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    let query = `SELECT * FROM poses`;
    db.query(query)
      .then(data => {
        const poses = data.rows;
        res.json({ poses });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  router.get("/build", (req, res) => {
    let session_id = req.query.session;

    let query = `SELECT * FROM poses
    JOIN sequence_pose ON poses.id = pose_id
    JOIN sequences ON sequence_id = sequences.id
    WHERE sequences.id = ${session_id}
    ORDER BY position;
    ;`;
    db.query(query)
      .then(data => {
        console.log(data.rows)
        res.send(data.rows)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};
