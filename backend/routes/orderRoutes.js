const express = require('express')
const router = express.Router()
const {
    getOrders, 
    setOrder, 
    updateOrder, 
    deleteOrder,
    setOrderStatus,
    getOrderById
} = require('../controllers/orderController')
const {protect} = require('../middleware/authMiddleware')

router
    .route('/')
    .get(protect, getOrders)
    .post(protect, setOrder)

router
    .route('/test')
    .get(protect, setOrderStatus)
    
router
    .route('/:id')
    .get(protect, getOrderById)
    .put(protect, updateOrder)
    .delete(protect, deleteOrder)


module.exports = router
