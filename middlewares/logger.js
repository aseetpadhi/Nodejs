const express = require('express');
const router = express.Router();
const validate = require("./validate");
const winston = require("winston");
const log = winston.createLogger({
    format : winston.format.json()
});
router.get('/', (req,res) => {
    res.send({id: 1, name: "Aseet"});
    });

    router.get('/name', (req,res) => {
        //const msg= req.body.validate;
               //res.send(JSON.stringify(req.path));
 router.get("/" , (error, response, body) => {
    
    console.log(body);
})
        });

module.exports= router;