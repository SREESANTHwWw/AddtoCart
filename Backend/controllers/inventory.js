const Product = require("../models/models");

const getAllData = async (req, res) => {
  try {
    const items = await Product.find({});
    res.status(200).json({ Products: items });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createProduct = async (req, res) => {
  try {
    console.log(req.body);
    
    const items = await Product.create(req.body);
    res.status(201).json({ items });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
  
};
const updateData = async (req, res) => {
  try {
    const { id: ProductID } = req.params;
    const items = await Product.findOneAndUpdate({ _id: ProductID }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!items) {
      return res
        .status(404)
        .json({ msg: `No Product with Id : ${ProductID} ` });
    }
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

const deleteData = async (req, res) => {
  try {
    const { id: ProductID } = req.params;
    const items = await Product.findOneAndDelete({ _id: ProductID });
    if (!items) {
      return res.status(404).json({ msg: `No Product with id ${ProductID}` });
    }
    res.status(200).json({ items });
  } catch (error) {
    res.status(500).json({ error });
  }
};

// const findProduct = async (req ,res)=>{

//     try {
//         const {id:ProductID} = req.params;
//         const items = await Product.findOneAndUpdate({_id:ProductID, quantity: - 1 }, req.body)
//         if(!items){
//             return res.status(404).json({msg:`Product not in this ${ProductID}`})
//         }
//         res.status(200).json({items})

//     } catch (error) {
//         res.status(500).json({error})

//     }
// }

const lowQuantity = async (req, res) => {
  try {
    const { id: productID } = req.params;

    // Find the product and decrement the quantity
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: productID, quantity: { $gt: 0 } }, // Ensure quantity is greater than 0
      { $inc: { quantity: -1 } }, // Decrement quantity by 1
      { new: true } // Return the updated document
    );

    if (!updatedProduct) {
      return res.status(404).json({ msg: 'Product not found or out of stock' });
    }

    res.status(200).json({ msg: 'Product added to cart', product: updatedProduct });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};


module.exports = {
  getAllData,
  createProduct,
  updateData,
  deleteData,
  lowQuantity,
  // findProduct
};
