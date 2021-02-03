const { response } = require('express');
const express = require('express');
const mysql = require('mysql');


const utils = require('../utils/utils');

const router = express.Router();

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database: 'test_db'
  });

connection.connect();

router.use((req, res, next) =>{
    console.log(`${req.ip} requested on ${req.path}`);
    next();
});

router.get('/post/:id', (req, res) => {

    
    utils._query(connection, 'SELECT * from Post;', (err, data)=>{
        if (err) throw err;
        else {
            response_body = utils._response(200, {
                content : data
            });
        
            res.status(200).type('application/json').send(response_body);
        }
    });

    
});

router.post('/post', (req, res) => {

    res.type('application/json');

    if (utils._code(req) == 200) {
        response_body =  utils._response(200, {
            content : 'Post created',
            title : req.body.title
        });
        res.status(200)
    }
    else if (utils._code(req) == 404) {
        response_body =  utils._response(404, {
            content : 'Not Found'
        });
        res.status(404)
    }
    res.send(response_body);
;})


module.exports = router;