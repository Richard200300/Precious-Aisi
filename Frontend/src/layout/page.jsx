import React, { useState,useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Cart from "../components/cart";

const Page = () => {
  const [hideCart, setHideCart] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  return (
    <div className=" bg-[url('./assets/images/bg_img.png')] px-7  max-md:px-3 ">
      <section className="w-full flex justify-center items-start">
      <div className="max-w-7xl">
        <Header setHideCart={setHideCart} />
        {hideCart && <Cart setHideCart={setHideCart}/>}
        <Outlet />
        <Footer />
      </div>
      </section>
      
    </div>
  );
};

export default Page;
