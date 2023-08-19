import React from "react";
import cancel_cart from "../assets/icons/cancel_cart.svg";
import cartIcon from "../assets/icons/cart-icon.svg";
import down from "../assets/icons/down.svg";
import { Link } from "react-router-dom";

const Cart = ({ setHideCart, cartData }) => {
  return (
    <div className="sticky right-7 top-10 z-20 ml-auto">
      <div className="absolute right-0  overflow-hidden bg-[url('./assets/images/bg_img.png')] uppercase shadow-[-7px_8px_30px_0px_#00000033]">
        {cartData.length >= 1 ? (
          // Cart with items
          <section className="p-5">
            <div className="item-center relative flex justify-between border-b border-[#0B0B0B] pb-10">
              <div>
                <p className="text-4xl font-medium uppercase">
                  <span className="mr-1 font-normal">/</span>your cart
                </p>
                <p className="absolute -top-2 left-52 text-base font-medium text-[#000000]">
                  ({cartData.length})
                </p>
              </div>
              {/* close cart component */}
              <img
                src={cancel_cart}
                alt="cancel_cart"
                className="cursor-pointer"
                onClick={() => setHideCart(false)}
              />
            </div>
            <div className="max-h-[40vh] overflow-y-scroll">
              {cartData.map((data, index) => {
                return (
                  <section key={index}>
                    <div className="my-5 flex items-start justify-between gap-5 border-b border-[#0B0B0B] pb-4">
                      {/* cart image */}
                      <img
                        src={data.img}
                        alt="collection_img_2"
                        className="h-36 w-[116px] object-cover object-top"
                      />
                      {/* right hand of the product detail of the cart */}
                      <section className="w-4/5">
                        {/* Product details */}
                        <div className="flex items-start justify-between border-b border-b-[#0B0B0B] pb-2">
                          <div>
                            <p className="w-[212px] text-sm font-bold text-[#0B0B0B]">
                              {data.name}
                            </p>
                            <p className="mt-2 text-xs font-semibold text-[#000000]">
                              {data.price?.toLocaleString()} NGN
                            </p>
                          </div>
                          {/* remove item from cart */}
                          <img
                            src={cancel_cart}
                            alt="cancel_cart"
                            className="w-5 cursor-pointer"
                          />
                        </div>
                        <div className="mt-3 flex w-full items-start justify-between text-xs font-semibold text-[#000000]">
                          <div>
                            <p>{data.color}</p>
                            <p>size: {data.size}</p>
                          </div>
                          <div className="flex items-center gap-1 ">
                            <p> q.ty:{data.qty}</p>
                            <img src={down} alt="down" />
                          </div>
                        </div>
                      </section>
                    </div>
                  </section>
                );
              })}
            </div>
            {/* total calculation  */}
            <div className="mt-4 flex items-center justify-between text-sm font-bold">
              <p>Total</p>
              <p>270,000 NGN</p>
            </div>
            <div className="mt-3 flex items-center justify-between border-b border-b-[#0B0B0B] pb-4 text-[13px]/[20px] font-medium">
              <p>shipping</p>
              <p>calculated at checkout</p>
            </div>
            {/* Link to checkout */}
            <Link to="/checkout">
              <button
                className="mt-5 flex cursor-pointer w-full uppercase items-center justify-center rounded-[7px] bg-[#0B0B0B] py-3 text-sm font-semibold text-[#FFFFFF]"
                onClick={() => {
                  setHideCart(false);
                }}
              >
                checkout
              </button>
            </Link>
          </section>
        ) : (
          // Empty cart
          <section className="relative w-96 px-3 py-6">
            <div>
              <div className="item-center relative flex justify-between border-b border-[#0B0B0B] pb-8">
                <div >
                  <p className="text-4xl font-medium uppercase">/your cart</p>
                  <p className="absolute -top-1 left-52 text-base font-medium text-[#000000]">
                    ({cartData.length})
                  </p>
                </div>
                <img
                  src={cancel_cart}
                  alt="cancel_cart"
                  className="cursor-pointer"
                  onClick={() => setHideCart(false)}
                />
              </div>
              <img src={cartIcon} alt="cartIcon" className="ml-5 mt-8" />
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

export default Cart;
