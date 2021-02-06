const express = require('express');
const router = express.Router();

const _query = require('../database/db');
const utils = require('../utils/utils');

let query_response =  {status: '200 OK'};


router.use((req, res, next) =>{
    // Middleware goes here
    console.log(`${req.method}  ${req.ip} requested on ${req.path}`);
    next();
});

router.get('/post', async (req, res) => {
    try {
        query_response.data = await _query('SELECT * FROM Post;');
    }
    catch (error) {
        query_response.status = '400 Bad Request';   
        query_response.data = error;     
    }
    
    res.send(query_response);
});

router.post('/post', async (req, res) => {
    query_response.data = req.body;

    try {
        await _query(utils._insert(table='post', req.body));    
    }
    catch (error) {
        query_response.status = '400 Bad Request';   
        query_response.data = error;     
    }

    res.send(query_response);
;})

router.delete('/post/:id', async (req, res) => {
    try {
        let query = await _query(utils._select('post', req.params.id));
        if (query.length == 0) {
            query_response.status = '204 No Content ';   
            query_response.data = `Post with id=${req.params.id} does not exists.`;
        }
        else {
            await _query(utils._delete('post', req.params.id));
            query_response.data = `${req.params.id} has been successfully deleted.`;
        }
    }
    catch (error) {
        query_response.status = '400 Bad Request';   
        query_response.data = error;     
    }
    res.send(query_response);
});

module.exports = router;