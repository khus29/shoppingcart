import mongoose from 'mongoose';
var Schema = mongoose.Schema; //Define collection for schema and items

var Products = new Schema({
    productId: {type: Number},
    categoryId: {type: Number},
    price: {type: Number},
    inventory: {type: Number},
    name: {type: String},
    section: {type: String}, 
    description: {type: String},
    imgPath: {type: String},
    altText: {type: String}
}, {collection: 'products'});

module.exports = mongoose.model('Products',Products);
