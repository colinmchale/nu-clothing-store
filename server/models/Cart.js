const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema(
    {
        product: {
            type: Schema.Types.ObjectId, 
            ref: 'Product',
            unique: true
        },
        quantity: {
            type: Number,
            default: 1
        },
        order_date: {
            type: Date,
            default: Date.now
        },
        price_per_unit: {
            type: Number
        }, 
        total_price: { 
            type: Number,
            default: () => {
                    return this.price_per_unit * this.quantity;
            }
        }
        // },
        // user: {
        //     type: Schema.Types.ObjectId,
        //     ref: 'User',
        //     required: false
        // }

    }
)

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
