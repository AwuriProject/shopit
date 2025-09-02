const express = require('express');
const accountController = require('../controllers/account')


const router = express.Router();

router.get('/account', accountController.getAccount)
router.get('/order', accountController.getOrder)
router.get('/order-detail', accountController.getOrderDetail)

module.exports = router