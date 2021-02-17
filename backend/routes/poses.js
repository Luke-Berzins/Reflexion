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
    let poseList = req.query.session;

    const sqlFormatter = (posesFormat) => {
      let result = `(`
      posesFormat.forEach(pose => {
        result += pose + `, `;
      })
      result = result.substring(0, result.length - 2);
      result += `)`
      return result
    }
    let sqlList = sqlFormatter(poseList)
    let query = `SELECT * FROM poses
    WHERE id in ${sqlList}
    ;`;
    db.query(query)
      .then(data => {
        let indexObj = {}
        let counter = 1;
        poseList.forEach(poseOrder => {
          poseOrder *= 1;
          indexObj[counter] = data.rows.filter(pose => {
           return pose.id === poseOrder
          })[0]
          counter++
        })
        return indexObj;
      })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  return router;

};
