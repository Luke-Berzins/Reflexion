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
      `INSERT INTO sequence_pose (sequence_id, pose_id, position)
       VALUES ($1::integer, $2::integer, $3::integer);
    `,
      [req.body.sequence_id, req.body.pose_id, req.body.position]
    )
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.get("/build", (req, res) => {
    console.log('REQ:', req.query)
<<<<<<< HEAD
    // console.log('RES:', res)
  });



=======
  });

>>>>>>> a46691cae80152a5fe7f1a5153e43433eb1f3c37
  return router;
};
