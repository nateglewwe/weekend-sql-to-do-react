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

// DELETE

module.exports = router;
