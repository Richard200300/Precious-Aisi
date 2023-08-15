import React, { useState, useEffect } from "react";
import cancel_cart from "../../assets/icons/cancel_cart.svg";
import collection_img_2 from "../../assets/images/collection_img_2.png";
import cartIcon from "../../assets/icons/cart-icon.svg";
import down from "../../assets/icons/down.svg";
import up from "../../assets/icons/up_arrow.svg"
const CheckoutCart = () => {
  const cartData = [

    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },

  ];
  return (
    <div className="ml-auto ">
      <div className="  overflow-hidden">
        {cartData.length >= 1 ? (
          <section className="pb-5 px-5 pt-2">
            <div className="item-center relative flex justify-between border-b border-[#0B0B0B] pb-8">
              <div className="">
                <p className="text-[36px]/[36px] font-[500] uppercase">
                 /your cart
                </p>
                <p className="absolute left-[215px] top-[-8px] text-[16px]/[16px] font-[500] text-[#000000]">
                  ({cartData.length})
                </p>
              </div>
              <div
                className="cursor-pointer "
              >
                <p className="border-b border-[#0B0B0B] text-sm font-bold pb-1 w-10 text-center">edit</p>
                
              </div>
            </div>
<div className="max-h-[50vh] overflow-y-scroll">


            {cartData.map((data, index) => {
              return (
                <div key={index}>
                  <div className="my-5 flex items-start justify-between gap-5  border-b-[1.5px] border-[#0B0B0B] pb-4 ">
                    <div className=" h-[154px] w-[116px]">
                      <img
                        src={data.img}
                        alt="collection_img_2"
                        className="h-full w-full object-cover object-top"
                      />
                    </div>
                    <div className="w-[70%]">
                      <div className="flex items-start justify-between  border-b-[0.5px] border-b-[#0B0B0B] pb-2">
                        <div className="">
                          <p className="w-[212px] text-[14px]/[20px] font-[700] text-[#0B0B0B]">{data.name}</p>
                          <p className="mt-2 text-[11px]/[20px] font-[600] text-[#000000]">
                            {data.price} NGN
                          </p>
                        </div>
                        <div className="">
                          <img
                            src={cancel_cart}
                            alt="cancel_cart"
                            className="w-[20px] cursor-pointer"
                          />
                        </div>
                      </div>
                      <div className=" mt-3 flex w-full items-start justify-between">
                        <div className="text-[11px]/[20px] font-[600] text-[#000000]">
                          <p className="">{data.color}</p>
                          <p className="">size: {data.size}</p>
                        </div>
                        <div className=" flex items-center gap-1 text-[11px]/[16px] font-[600] text-[#0B0B0B]">
                          <p> q.ty:{data.qty}</p>
                          <img src={down} alt="down" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            </div>

            <div className="mt-4 flex items-center justify-between text-[14px]/[20px] font-[700]">
              <p>Total</p>
              <p>270,000 NGN</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-b border-b-[#0B0B0B] pb-4  text-[13px]/[20px] font-[500]">
              <p>shipping</p>
              <p>calculated at checkout</p>
            </div>
            <div className="flex w-full justify-between border-b border-[#0B0B0B]">
              <input type="text" className="outline-0 bg-transparent py-10 px-2 font-medium text-sm" placeholder="HAVE A PROMO CODE"/>
              <div className="flex items-center gap-1 cursor-pointer">
                <p className="text-xs font-bold">apply</p>
                <img src={up} alt="up"/>
              </div>
            </div>
          
          </section>
        ) : (
          <section className="relative w-96 px-3 py-6 ">
            <div className="">
              <div
                className="absolute left-3 top-7  cursor-pointer"
              >
                <img src={cancel_cart} alt="cancel_cart" />{" "}
              </div>
              <img src={cartIcon} alt="cartIcon" className="ml-5 mt-20" />
              <div className="mt-4 flex w-full cursor-pointer items-center justify-center bg-[#525050] py-2 text-sm font-semibold text-[#FFFEF5]">
                cart is empty
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default CheckoutCart;
