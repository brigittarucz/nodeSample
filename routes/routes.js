const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.get('/', homeController.getHome);

router.get('*', (req,res,next) => {
    res.status(404).send('<h1>Page not found</h1>')
});

module.exports = router;