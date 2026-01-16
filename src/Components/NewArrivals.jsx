import React from "react";
import { Heart } from "lucide-react";
import { useCart } from "../Contexts/CartContext";
import { Link } from "react-router-dom";
import { productData } from "../Constants";

const NewArrivals = () => {
  const { addItem, isInCart } = useCart();

  const newArrivals = productData.filter((item) =>
    item.tags?.includes("newArrivals")
  );

  return (
    <div className="flex flex-col bg-[#222222] pt-10">
      <div className="max-w-7xl mx-auto w-full flex flex-col px-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <p className="text-secondary font-bodoni font-bold text-2xl sm:text-2xl md:text-3xl lg:text-3xl">
              New Arrivals
            </p>
            <p className="text-gray-400 text-xs sm:text-xs md:text-sm font-light">
              243 New items added
            </p>
          </div>
          <Link to="#">
            <button className="text-secondary cursor-pointer text-sm border-b border-[#222222] hover:border-secondary transition-all">
              See all
            </button>
          </Link>
        </div>

        {/* Grid */}
        <div className="mt-5 overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[60%] md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {newArrivals.map((item) => (
              <div
                key={item.id}
                className="bg-linear-to-tr from-black via-primary/10 to-black border border-primary/30 rounded-xl pb-5 flex justify-center"
              >
                <div className="flex flex-col w-full">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-t-xl w-full max-w-full object-cover"
                  />

                  <div className="flex justify-between items-center px-4 mt-5">
                    <p className="text-secondary text-sm md:text-xl font-medium">
                      {item.name}
                    </p>
                    <p className="text-green-500 font-medium">₹{item.price}</p>
                  </div>

                  <p className="text-gray-400 font-medium text-xs px-4">
                    {item.code}
                  </p>

                  <div className="flex items-center gap-2 px-4 mt-4">
                    <button
                      onClick={() => addItem(item)}
                      disabled={isInCart(item.id)} // ✅ added
                      className={`flex-1 py-2 rounded-lg font-medium transition-all duration-200 ease-out cursor-pointer
                        ${
                          isInCart(item.id)
                            ? "bg-green-600 text-white" // ✅ added
                            : "bg-primary text-black hover:opacity-80"
                        }`}>
                      {isInCart(item.id) ? "Added" : "Add to Cart"}{" "}
                      {/* ✅ added */}
                    </button>

                    <button className="border border-secondary p-2 rounded-lg hover:bg-secondary/10 transition cursor-pointer">
                      <Heart
                        size={20}
                        className="text-secondary hover:fill-secondary transition"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;
