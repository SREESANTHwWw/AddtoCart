const express = require("express")
const  Router = express.Router()
const {getAllData,
    createProduct,
    updateData,
    deleteData,
lowQuantity,} = require('../controllers/inventory')

Router.route('/').get(getAllData).post(createProduct)
Router.route('/:id').patch(updateData).delete(deleteData)
Router.route('/addtocart/:id').patch(lowQuantity)

module.exports = Router