import mongoose from 'mongoose';
var Schema = mongoose.Schema; //Define collection for schema and items

var Category = new Schema({
    categoryId: {type: Number},
    categoryName: {type: String}
}, {collection: 'category'});

module.exports = mongoose.model('Category',Category);
