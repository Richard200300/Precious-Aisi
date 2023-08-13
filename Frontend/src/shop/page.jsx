import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import backToTop from "../assets/icons/back_to_top.svg";
import ShopProducts from "./component/shop_products";
import Filter from "./component/filter";
import Search from "./component/search";
import useFetch from "../components/useFetch";
import Loading from "../components/loading";

const Page = () => {
  const [dynamicUrl, setDynamicUrl] = useState("products");
  const [hideFilter, setHideFilter] = useState(true);
  const apiUrl = `http://localhost:5000/api/${dynamicUrl}`;
  const { data } = useFetch(apiUrl);
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
  
  const align = data.product < 3 ? "items-start" : ""
  
  return (
    <div className="h-full p-0">
      {data ? (
        <section>
          <Banner />
          <Search
            setDynamicUrl={setDynamicUrl}
            setHideFilter={setHideFilter}
            hideFilter={hideFilter}
          />
          <div className="flex items-start  ">
            <section className="`flex flex-row-reverse ${align} gap-10`">
              <div className="flex items-center justify-center">
                <div className="relative flex items-center justify-center">
                  {data && (
                    <ShopProducts hideFilter={hideFilter} data={data} />
                  )}
                </div>
              </div>
              <div>
                {hideFilter && (
                  <div className="sticky top-10">
                    <Filter setDynamicUrl={setDynamicUrl} />
                  </div>
                )}
                <div>
                  <div className="sticky top-0"></div>
                  <div className="relative mt-[100px]"></div>
                </div>
              </div>
            </section>
            <section className=`products/?name=${name}`>
              <div className="relative mt-[100px] border-t-[1.5px] border-[#0B0B0B]">
                <img
                  src={backToTop}
                  alt="back_to_top"
                  className="absolute right-[10%] top-[-25px] cursor-pointer"
                />
              </div>
            </section>
          </div>
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
