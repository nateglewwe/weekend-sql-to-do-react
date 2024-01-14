const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', (req, res) => {
    console.log('In GET request');
    //GET query text
    let queryText = 'SELECT * from "to_do_list";'; //Could add ORDER BY "name" here or something if desired
    //DB Query
    pool.query(queryText)
    .then((result) => {
        res.send(result.rows);
    })
    .catch((err) => {
        console.log('ERROR in GET DB Query', err);
        res.sendStatus(500);
    })
});

// POST
router.post('/', (req, res) => {
    console.log('In POST request');
    //POST query text
    let queryText = 'INSERT INTO "to_do_list" ("task", "completed") VALUES ($1, false);';
    let queryArgs = [req.body.task];
    pool.query(queryText, queryArgs)
    .then((result) => {
        console.log('Task added to DB', req.body);
        res.sendStatus(201);
    }).catch((err) => {
        console.log('ERROR in POST DB Query:', err);
        res.sendStatus(500);
    });
});

// PUT
router.put('/', (req, res) => {
    console.log('In PUT request');
    //PUT query text
    let queryText = 'UPDATE "to_do_list" SET completed = TRUE WHERE id = $1;';
    let queryArgs = [req.body.id];
    pool.query(queryText, queryArgs)
    .then((result) => {
        console.log('Task updated to completed in DB', req.body);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('ERROR in completion update to DB Query:', err);
        res.sendStatus(500);
    });
})
// DELETE
router.delete('/', (req, res) => {
    console.log('In DELETE request');
    //DELETE query text
    let queryText = 'DELETE FROM "to_do_list" WHERE id = $1;';
    let queryArgs = [req.body.id];
    pool.query(queryText, queryArgs)
    .then((result) => {
        console.log('Task deleted from DB', req.body);
        res.sendStatus(200);
    }).catch((err) => {
        console.log('ERROR in DELETE DB Query:', err);
        res.sendStatus(500);
    });
});

module.exports = router;
