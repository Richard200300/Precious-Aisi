import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import Cart from "../components/cart";
import Wishlist from "../components/wishlist";
import collection_img_2 from "../assets/images/collection_img_2.png";

const Page = () => {
  // State to control the visibility of the cart and wishlist
  const [hideCart, setHideCart] = useState(false);
  const [hideWish, setHideWish] = useState(false);

  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);

  // Sample cart data
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
      name: "ANOTHER ITEM",
      price: 90000,
      size: 2,
      color: "blue",
      qty: 2,
      img: collection_img_2,
    },
  ];

  // Sample wishlist data
  const wishData = [
    {
      name: "OVERGROWTH CONVERTIBLE PANTS",
      price: 135000,
      size: 1,
      color: "greenish brown",
      qty: 1,
      img: collection_img_2,
    },
    {
      name: "ANOTHER ITEM",
      price: 90000,
      size: 2,
      color: "blue",
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
    {
      name: "ANOTHER ITEM",
      price: 90000,
      size: 2,
      color: "blue",
      qty: 1,
      img: collection_img_2,
    },
  ];

  return (
    <main className="bg-[url('./assets/images/bg_img.png')] px-7 max-md:px-3">
      <section className="w-full flex justify-center items-start">
        <div className="max-w-7xl">
          {/* Render the header component and pass cart and wishlist data */}
          <Header setHideCart={setHideCart} setHideWish={setHideWish} cartData={cartData} wishlistData={wishData} />
          
          {/* Render the Cart component if hideCart is true */}
          {hideCart && <Cart setHideCart={setHideCart} cartData={cartData} />}
          
          {/* Render the Wishlist component if hideWish is true */}
          {hideWish && <Wishlist setHideWish={setHideWish} wishlistData={wishData} />}
          
          {/* Render the nested route components */}
          <Outlet />

          {/* Render the footer component */}
          <Footer />
        </div>
      </section>
    </main>
  );
};

export default Page;
