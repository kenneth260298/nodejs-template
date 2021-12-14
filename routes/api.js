const express = require('express');
const { generic } = require('../controllers/api');
const router = express.Router();

router.get(
    '/',
    generic
);

module.exports = router;