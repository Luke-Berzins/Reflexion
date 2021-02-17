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
    const sessionID = req.query.session * 1;
    let query = `SELECT pose_id FROM sequence_pose
                 WHERE sequence_id = ${sessionID}
                 ORDER BY position
    ;`;
    console.log(query);
    db.query(query)
      .then(data => {
        res.send(data.rows)
        const sequence_pose = data.rows;
        res.json({ sequence_pose });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });

  });

  return router;
};
