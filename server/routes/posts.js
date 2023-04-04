const express = require("express");
const router = express.Router();

const idLength = 8;

router.get('/', (req,res) => {

    console.log('posts');

    return res.status(200).send({
        message: 'This is an error!'
     });

});

module.exports = router;
