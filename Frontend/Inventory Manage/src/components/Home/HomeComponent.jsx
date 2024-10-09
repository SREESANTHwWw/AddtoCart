import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoCloseCircle } from "react-icons/io5";

const HomeComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, [data]);

  const fetchData = () => {
    fetch("http://127.0.0.1:5050/api/v1/product/")
      .then((res) => res.json())
      .then((product) => setData(product.Products));
  };

  const addtocart = (id) => {
    fetch(`http://127.0.0.1:5050/api/v1/product/addtocart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log({ msg: "success" }, res))
      .then((pro) => setData(pro.Products));
  };

  const removeData = (id) => {
    fetch(`http://127.0.0.1:5050/api/v1/product/${id}`, {
      method: "Delete",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => console.log({ msg: "success" }, res));
    navigator("/");
  };
  return (
    <div className="w-screen h-full bg-white flex justify-center items-center  ">
      <div className="w-[80rem] h-full bg-white shadow-md flex  flex-wrap  gap-10 py-28   ">
        {data.map((e) => (
          <div className="w-72  h-80   flex flex-col items-center justify-around text-black bg-main rounded-md  shadow-2xl border border-gray-100  ">
            <button
              className="relative left-32 bottom-3"
              onClick={() => removeData(e._id)}
            >
              <IoCloseCircle />
            </button>
            <span className="font-semibold text-sm" key={e._id}>{e.name}</span>
            <span className="font-semibold text-sm">₹{e.price}</span>
            <span
              className={`font-semibold text-sm ${
                e.quantity === 0 ? "text-red-700" : "text-black"
              }`}
              >
              {e.quantity === 0 ? "Out Of Stock" : e.quantity}
            </span>
            <span className="font-semibold text-sm" >{e.supplier}</span>
            <button
              onClick={() => addtocart(e._id)}
              className={`p-2 rounded 
                 ${e.quantity === 0 ? "bg-gray-700" : "bg-three text-black"}  `}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeComponent;
