import React, { useState, useEffect } from "react";
import Axios from "axios";
import Banner from "../components/banner";
import Search from "./component/search";
import backToTop from "../assets/icons/back_to_top.svg";
import Shop_products from "./component/shop_products";
import Filter from "./component/filter";

const Page = () => {
  const [hide_filter, setHide_filter] = useState(true);
  const [all_products, set_all_products] = useState([]);
  useEffect(() => {
    fetchData("products/?limit=30");
  }, []);
  console.log(all_products)

  async function fetchData(product_data = "products/?limit=30") {
    try {
      const url =
        product_data === "products/?limit=30"
          ? "http://localhost:5000/api/products/?limit=30"
          : `http://localhost:5000/api/products/${product_data}`;

      const response = await Axios.get(url);
      set_all_products(response.data);
    } catch (error) {
      console.error(
        `Error fetching data${
          product_data === "all"
            ? " for all countries"
            : ` for product_data ${product_data}`
        }:`,
        error,
      );
    }
  }
  const align = all_products?.products?.length <= 3 ? "items-start" : "";

  return (
    <div className="h-full p-0">
      <Banner />
      <Search setHide_filter={setHide_filter} fetchData={fetchData} />

      <section className={`flex flex-row-reverse justify-between ${align} `}>
        <div
          className={
            hide_filter
              ? "flex items-center justify-center"
              : "m-auto flex items-center justify-center"
          }
        >
          <div className="relative">
          <Shop_products
                hide_filter={hide_filter}
                allProducts={all_products}
                set_all_products={set_all_products}
              />
          </div>
        </div>
        <div>
          {hide_filter && (
            <div className="sticky top-10">
              <Filter fetchData={fetchData}/>
            </div>
          )}
          <div>
            <div className="sticky top-0"></div>

            <div className="relative mt-[100px]"></div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="relative mt-[100px] border-t-[1.5px] border-[#0B0B0B]">
          <img
            src={backToTop}
            alt="back_to_top"
            className="absolute right-[10%] top-[-25px] cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default Page;
