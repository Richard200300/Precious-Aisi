import React from "react";
import down from "../../assets/icons/down.svg";

const ProductInformation = ({
  data,
  handleSizeSelect,
  selectedSize,
  handleAddToCart,
}) => {
  return (
    <section>
      {/* Product information */}

      <section className="basis-[40%] py-5">
        <p className="mb-9 text-3xl font-medium text-[#0B0B0B]">/{data.name}</p>
        {/* Sizes */}
        <section className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
          {data.countInStock?.map((sizeData, index) => (
            <div
              key={index}
              onClick={() => handleSizeSelect(sizeData.size)}
              className={`flex h-10 w-24 items-center justify-center border text-xs font-medium uppercase ${
                selectedSize === sizeData.size
                  ? "cursor-pointer border-[#0B0B0B] text-[#0b0b0b]"
                  : " border-[#C4C4C4] text-[#C4C4C4]"
              }`}
            >
              {sizeData.size}
            </div>
          ))}
        </section>

        {/* Additional details */}
        <section className="">
          {/* Time */}
          <article className="flex items-center justify-between text-base font-semibold">
            <p className="uppercase text-[#0B0B0B]">time</p>
            <p className="text-[#17A500]">12:01:43:20</p>
          </article>

          {/* Description */}
          <p className="my-9 text-sm font-medium text-[#0B0B0B]">
            {data.description}
          </p>

          {/* Add to cart */}
      
            <button
              className={`my-3 w-full  bg-[#0B0B0B] py-4 text-center text-xs font-semibold uppercase ${
                selectedSize
                  ? "text-[#FFFFFF] cursor-pointer"
                  : " text-[#C4C4C4] cursor-default"
              }`}
              onClick={() => {
                handleAddToCart();

              }}
            >

              Add to cart -{data.price?.toLocaleString()} NGN
            </button>

          {/* Add to wishlist */}
          <button className="mb-3 w-full cursor-pointer border border-[#0B0B0B] py-4 text-center text-xs font-semibold uppercase text-[#0B0B0B]">
            add to wishlist
          </button>

          {/* Accordion */}
          <section className="border-y border-[#0B0B0B] text-sm uppercase text-[#0B0B0B] ">
            <article className="flex cursor-pointer items-center justify-between border-b border-[#0B0B0B] py-2">
              <p>product details</p>
              <img src={down} alt="down" />
            </article>

            <article className="flex cursor-pointer items-center justify-between py-2">
              <p>size guild</p>
              <img src={down} alt="down" />
            </article>
          </section>
        </section>
      </section>
    </section>
  );
};

export default ProductInformation;
