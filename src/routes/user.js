const express = require('express');

const router = new express.Router();

router.use('/test',  (req,res) => res.status(200).send("weeee"));

module.exports = router;
