import Product from '../models/product.models.js';

export const createProduct = async (req, res) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json(product)
    } catch (error) {
        res.status(500).json({ msg: error.message })

    }
}

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json(products)

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getProductById = async (req, res) => {
    try {

        const product = await Product.findById(req.params.id)
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json({ msg: 'Product not found' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body)
        if (product) {
            res.status(200).json({ msg: 'product updated successfully', product })
        } else {
            res.status(404).json({ msg: 'Product not found' })
        }

    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}
export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)
        if (product) {
            res.status(200).json({ msg: 'product deleted successfully', product })
        } else {
            res.status(404).json({ msg: 'Product not found' })
        }
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}