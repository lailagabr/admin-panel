const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
    name: String,
    shortDescribtion: String,
    describtion: String,
    Price: Number,
    discount: Number,
    images: [String],  
    CategoryId: { type: Schema.Types.ObjectId, ref: 'categories' }
});

const Product = mongoose.model("products", productSchema);
module.exports = Product;
