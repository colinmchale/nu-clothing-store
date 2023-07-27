const db = require('..connection');
const {Cart, Category, Product} = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        {name: 'Mens'},
        {name: 'Womens'},
        {name: 'Kids'},
        {name: 'Shirts'},
        {name: 'Pants'},
        {name: 'Shorts'},
        {name: 'Shoes'},
        {name: 'Accessories'},
        {name: 'Hats'},
        {name: 'Socks'},
        {name: 'New Arrivals'},
        {name: 'Gift Cards'},
        {name: 'Sale'},
    ]);

    console.log('categories seeded');

    await Product.deleteMany();

    const products = await Product.insertMany([
        {
            name: 'Black T-Shirt',
            description: 'Black T-Shirt',
            image: 'https://i.imgur.com/DvpvklR.png',
            category: [categories[0]._id, categories[0]._id],
            price: 20.00,
            quantity: 10
        },
        {
            name: 'Black Pants',
            description: 'Black Pants',
            image: 'https://i.imgur.com/DvpvklR.png',
            category: categories[1]._id,
            price: 20.00,
            quantity: 10
        },
        {
            name: 'Black Shoes',
            description: 'Black Shoes',
            image: 'https://i.imgur.com/DvpvklR.png',
            category: categories[2]._id,
            price: 20.00,
            quantity: 10
            
        }
        
    ]);
    console.log('products seeded');

    await Cart.deleteMany();

    process.exit();
}

);
