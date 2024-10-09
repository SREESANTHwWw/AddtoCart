import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddproductComp = () => {
  const [Productname, SetProductName] = useState("");
  const [Quantity, setQuantity] = useState(null);
  const [Price, setPrice] = useState("");
  const [supplier, setSupplier] = useState("");
const navigate = useNavigate();
  const fullProduct = () => {
       SetProductName("")
       setQuantity("")
       setPrice("")
       setSupplier("")

       


    
    fetch(
     "http://localhost:5050/api/v1/product",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: Productname,
          quantity:Quantity,
          price:Price,
          supplier,
        })
      }    
    ).then((res)=> res.json()).then((res)=> console.log({msg:"success"}, res)
    )
   navigate('/')
  };

 

  return (
    <div className="  w-screen h-screen flex justify-center items-center bg-slate-50 ">
      <div className="w-[700px] h-[600px] bg-slate-50 rounded-md flex flex-col  items-center ">
        <h1 className="flex justify-center text-3xl font-bold my-3">
          {" "}
          New Product{" "}
        </h1>
        <div className="w-[500px] h-[80px] bg-slate-50 shadow-md flex flex-col  my-9">
          <span className=" mx-9">Product Name</span>
          <input
            className="w-[500px] h-[40px] outline-none placeholder:px-0 px-9"
            type="text"
            placeholder="Enter Your Product Name"
            value={Productname}
            onChange={(e) => SetProductName(e.target.value)}
          />
        </div>
        <div className="w-[500px] h-[80px] bg-slate-50 shadow-md flex flex-col  my-5">
          <span className=" mx-9 ">Quantity</span>
          <input
            className="w-[500px] h-[40px] outline-none placeholder:px-11 px-9"
            type="number"
            placeholder="Enter Your Quantity"
            value={Quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="w-[500px] h-[80px] bg-slate-50 shadow-md flex flex-col  my-9">
          <span className=" mx-9">Price</span>
          <input
            className="w-[500px] h-[40px] outline-none placeholder:px-0 px-9"
            type="text"
            placeholder="Enter Your Price"
            value={Price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="w-[500px] h-[80px] bg-slate-50 shadow-md flex flex-col  my-9">
          <span className=" mx-9">Supplier Name</span>
          <input
            className="w-[500px] h-[40px] outline-none placeholder:px-0 px-9"
            type="text"
            placeholder="Enter Your Supplier Name"
            value={supplier}
            onChange={(e) => setSupplier(e.target.value)}
          />
        </div>

        <div className="w-[700px] h-[80px] bg-slate-50 flex flex-col items-center ">
          <button
            className="bg-black text-white rounded-md w-44 h-11 "
            type="submit"
            onClick={fullProduct}
          >
            {" "}
            Submit{" "}
          </button>
          
        </div>
       
      </div>
      
    </div>
  );
};

export default AddproductComp;
