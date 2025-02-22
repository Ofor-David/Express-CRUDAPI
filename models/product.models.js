import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'name is required'] },
    price: { type: Number, required: [true, 'price is required'] },
    quantity: { type: Number, required: [true, 'quantity is required'] },
    imageUrl: { type: String, required: false },
    description: { type: String, required: false },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
export default Product