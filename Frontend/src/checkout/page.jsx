import React, { useState } from "react";
import Contact from "./components/contact";
import Shipping from "./components/shipping";
import Payment from "./components/Payment";
import CheckoutCart from "./components/checkoutCart";

const Page = () => {
  const [checkoutPage, setCheckoutPage] = useState(0);
  const checkoutName = ["contact", "Shipping", "Payment"];
  const checkOutTitle = [ "contact information", "shipping method", "payment method"]

  function displayCheckoutPage() {
    if (checkoutPage === 0) {
      return <Contact />;
    } else if (checkoutPage === 1) {
      return <Shipping />;
    } else if (checkoutPage === 2) {
      return <Payment />;
    }
  }
  console.log(checkoutPage);
  return (
    <form>
    <div className=" h-full p-0 uppercase">
      <section className="flex items-start justify-between mt-5">
        <article className="basis-[58%] ">
          <div className="sticky top-9 bg-[url('./assets/images/bg_img.png')]">

        
          <div className=" text-[16px]/[16px] font-[500] italic mt-5">
            <div className="flex w-full items-center justify-between text-[#0b0b0b77]">
              {checkoutName.map((data, index) => {
                  const stepStyle = {
                    color: checkoutPage === index ? "#000000" : "#0b0b0b77"
                  };
                return (
                  <div key={index} style={stepStyle}>
                    (0{index + 1}/{data})
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sticky top-10">
            
          </div>
          <div className="my-4 w-full h-1 bg-[#B0B0B0] mt-10">
            <div style={{
              width: checkoutPage === 0 ? "33.3%" : checkoutPage === 1 ? "66.6%" : "100%"
            }} className="w-[33.3%] h-full bg-[#0B0B0B] transition-all duration-200"></div>
          </div>
          </div>
        <p className="font-[500] text-[24px]/[24px] my-9">/{checkOutTitle[checkoutPage]}  </p>


          {displayCheckoutPage()}

          <div className="flex w-full justify-end items-end gap-7">
            <div className="">
            
            {checkoutPage >= 1 && checkoutPage <=2 ? (
              <div
                className="ml-auto mt-8  cursor-pointer border-[#0B0B0B] border-b-[1.5px] py-1 text-center text-[12px]/[16px] font-[700] text-[#0B0B0B]"
                onClick={() => {
                  setCheckoutPage((add) => add - 1);
                }}
              >
                go back
              </div>
            ) : (
              []
            )}
</div>
<div className="w-[49%]">


            {checkoutPage <= 1 ? (
              <div
                className="ml-auto mt-8 w-full cursor-pointer bg-[#0B0B0B] py-3 text-center text-[14px]/[20px] font-[600] text-[#ffffff]"
                onClick={() => {
                  setCheckoutPage((add) => add + 1);
                }}
              >
                go to {checkoutName[checkoutPage + 1]}{" "}
              </div>
            ) : (
              <div className="ml-auto mt-8  cursor-pointer bg-[#0B0B0B] py-3 text-center text-[14px]/[20px] font-[600] text-[#ffffff]">
                complete payment - 205,000ngn
              </div>
            )}
            </div>
          </div>
        </article>
        <article className="basis-[35%] ">
<CheckoutCart />
        </article>
      </section>
    </div>
    </form>
  );
};

export default Page;
