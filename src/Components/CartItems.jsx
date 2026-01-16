import React from "react";
import { useCart } from "../Contexts/CartContext";
import { IoCaretBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartItems = () => {
  const { items, removeItem } = useCart();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen h-full w-screen bg-[#222222] pb-1">
        <div className="max-w-7xl mx-auto flex items-center gap-5 py-4 border-b border-secondary/20">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center font-medium text-secondary hover:opacity-80 "
          >
            <IoCaretBack size={20} className="mt-0.5" />
            Back
          </button>

          <h2 className="flex justify-center w-full text-white text-3xl font-bold">
            Your Cart
          </h2>
        </div>

      {items.length === 0 ? (
        <div className="flex flex-col items-center text-xl h-120 relative mt-20">
          <p className="absolute top-25 text-gray-500">Your cart is empty!</p>
          <iframe
            className="h-screen w-50"
            src="https://lottie.host/embed/3e8b91af-9a60-4915-afda-0177e4de1029/umcQO9i6WF.lottie"
          ></iframe>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-5 gap-x-5 gap-y-20 py-5  max-w-7xl w-full h-full mx-auto">
          {items.map((item) => (
            <div className="flex flex-col gap-2">
              <div
                key={item.id}
                className="bg-linear-to-tr from-[#111] via-primary/15 to-[#111] border border-primary/20 rounded-xl pb-5 w-full"
              >
                <div className="flex flex-col w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-xl w-full h-52 object-cover"
                  />

                  <div className="flex justify-between items-center px-4 mt-5">
                    <p className="text-secondary text-sm md:text-xl font-medium truncate">
                      {item.name}
                    </p>
                    <p className="text-secondary font-semibold whitespace-nowrap">
                      ₹{item.price}
                    </p>
                  </div>

                  <p className="text-gray-400 font-medium text-xs px-4 line-clamp-2">
                    {item.code}
                  </p>
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <p className="flex justify-center text-secondary border border-primary/30 py-1 px-2 rounded-lg w-[50%] cursor-pointer transition-transform duration-300 group-hover:scale-90 hover:scale-110 hover:shadow-md shadow-primary/20">Buy Item</p>
                <p onClick={() => removeItem(item.id)} className="flex justify-center text-red-500 border-2 border-primary/20 py-1 px-2 w-[50%] rounded-lg cursor-pointer transition-transform duration-300 group-hover:scale-90 hover:scale-110 hover:shadow-md shadow-primary/20">Remove</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartItems;
