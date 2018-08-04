import mongoose from 'mongoose';
var Schema = mongoose.Schema; //Define collection for schema and items

var Cart = new Schema({
    cartId: {type: String},
    userId: {type: Number},
    quantity: {type: Number},
    productDetails: {
        price: {type: Number},
        productId: {type: Number},
        name: {type:String},
        imgPath: {type:String}
    },
}, {collection: 'cart'});

module.exports = mongoose.model('Cart',Cart);
