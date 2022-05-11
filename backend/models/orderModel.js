const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    item_name: {
        type: String,
        // required: [true, 'Please add a item name']
    },
    unit_price: {
        type: Number,
        // required: [true, 'Please add a price per unit'],
    },
    quantity: {
        type: Number,
        // required: [true, 'Please add quantity']
    },

    total_amount: {
        type: Number,
        default: 0.00
    },

    amount_paid: {
        type: Number,
        default: 0.00
    },

    order_status: {
        type: String,
        required: true,
        default: "created"
    }
},
{
    timestamps: true
})

module.exports = mongoose.model('Order', orderSchema)