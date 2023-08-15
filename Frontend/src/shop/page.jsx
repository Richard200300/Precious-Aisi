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
const [real, setReal] = useState()
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  const align = data?.products?.length <= 3 ? "items-start" : ""
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
          <div className="flex justify-start">
            <section className={`flex flex-row-reverse ${align}  gap-10 justify-start`}>
            <div className=""></div>

              <div className="flex justify-start">
                <div className="relative flex items-center justify-start">
                 
                  {data && <ShopProducts hideFilter={hideFilter} data={data} /> }
                </div>
              </div>
              <div>

                {hideFilter && (
                  <div className="sticky top-10 ">
                    <Filter setDynamicUrl={setDynamicUrl} />
                  </div>
                )}
                <div>
                  <div className="sticky top-0"></div>
                  <div className="relative mt-28"></div>
                </div>
              </div>
            </section>
          
          </div>
          <section className="">
              <div className="relative mt-16 border-t border-[#0B0B0B]">
                <img
                  src={backToTop}
                  alt="back_to_top"
                  className="absolute right-10 -top-7 cursor-pointer"
                  onClick={()=> {
                    handleScrollToTop()
                  }}
                />
              </div>
            </section>
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
