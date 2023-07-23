const { Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
    },
    image: {
        type: String,
        // default: imageArray[Math.floor(Math.random()*4)],
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    quantity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0.01
    },
    sale_price: {
        type: Number,
        min: 0.01
    },
    category: {
        type: Schema.Types.ObjectId, 
        ref: 'Category'
    }
});

const Product = model('Product', productSchema);

module.exports = Product;