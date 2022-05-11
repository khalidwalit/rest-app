const asyncHandler = require('express-async-handler')
const axios = require('axios')
const Order = require('../models/orderModel')
const User = require('../models/userModel')



//@desc     Get orders
//@route    GET /api/orders
//@access   Private 
const getOrders = async (req, res) => {
    const orders = await Order.find({ user: req.user.id })

    res
        .status(200)
        .json(orders)
}

//@desc     Get orders
//@route    GET /api/orders/:id
//@access   Private 
const getOrderById = async (req, res) => {
    const orders = await Order.findById(req.params.id)

    res
        .status(200)
        .json(orders)
}

//@desc     Get orders
//@route    GET /api/orders
//@access   Private 
const setOrderStatus = async (req, res) => {

   


      res
        .status(200)
        .json(response.data)
    
}

//@desc     Set order
//@route    POST /api/orders
//@access   Private 
const setOrder = asyncHandler(async (req, res) => {
    
    if(!req.body.item_name) {
        res.status(400)
        throw new Error('Missing parameters')
    }

    if(!req.body.unit_price) {
        res.status(400)
        throw new Error('Missing parameters')
    }

    if(!req.body.quantity) {
        res.status(400)
        throw new Error('Missing parameters')
    }

    const total_amount = req.body.unit_price * req.body.quantity


    // console.log(req.headers.authorization);

    const config = {
        headers: {
        Authorization: req.headers.authorization,
        },
    }

 
    const response = await axios.get('http://localhost:8000/api/orders/627baea599ac89bda168cf0e', config)

    const new_status = 'apa'//response.data.order_status === "created" ? "cancel" : "confirmed"
 
       
    //    console.log(response);

    test

    const order = await Order.create({
        item_name: req.body.item_name,
        unit_price: req.body.unit_prce,
        quantity: req.body.quantity,
        total_amount: total_amount,
        order_status: new_status,
        user: req.user.id
    })

    res
        .status(200)
        .json(order)
})


const test = () => {
    console.log('natang 123123');
}
//@desc     Update order
//@route    PUT /api/orders/:id
//@access   Private 
const updateOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Only logged user matched the user data
    if(order.user.toString() != req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    console.log(req.params.id)

    const updateOrder = await Order.findByIdAndUpdate(req.params.id, { order_status: 'haram' }, {new: true})

    res
        .status(200)
        .json({
            messsage: 'Order status updated'
        })
})

//@desc     Delete order
//@route    DELETE /api/order/:id
//@access   Private 
const deleteOrder = asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if(!order){
        res.status(400)
        throw new Error('Order not found')
    }

    // Check for user
    if(!req.user) {
        res.status(401)
        throw new Error('User not found')
    }

    // Only logged user matched the user data
    if(order.user.toString() != req.user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await order.remove()

    res
        .status(200)
        .json({ 
            message: 'Order deleted',
            id: req.params.id 
        })
})

module.exports = {
    getOrders,
    setOrder,
    updateOrder,
    deleteOrder,
    setOrderStatus,
    getOrderById
}