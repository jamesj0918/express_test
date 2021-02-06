const { response } = require('express');
const express = require('express');

const _query = require('../database/db');
const utils = require('../utils/utils');

const router = express.Router();


router.use((req, res, next) =>{
    // Middleware goes here
    console.log(`${req.ip} requested on ${req.path}`);
    next();
});

router.get('/post', async (req, res) => {
    let data = await _query('SELECT * FROM Post;');
    res.send(data);
});

router.post('/post', async (req, res) => {
    let query_response =  {status: '200 OK'};
    query_response.data = req.body;
    try {
        await _query(utils._insert('post', req.body));    
    }
    catch (error) {
        query_response.status = '400 Bad Request';   
        query_response.data = error;     
    }
    res.send(query_response);
;})


module.exports = router;