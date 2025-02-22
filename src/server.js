import express from 'express';
import mongoose from 'mongoose';
import router from '../routes/productRoute.js';

const app = express();
const port = process.env.port || 3000
const mongodb_url = process.env.mongodb_url || ''

if (!mongodb_url) {
    console.log('mongodb url not provided in .env file')
    process.exit(1)
}

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/products', router)

async function connectDB() {
    try {
        await mongoose.connect(mongodb_url)
        app.listen(port, () => { console.log(`server listening on port ${port}`) })
        console.log('connected to database.')

    } catch (error) {
        console.log(error)
    }
}
app.get('/', (req, res) => {
    res.status(200).json({ msg: 'welcome to my api home page' })
})
connectDB();

