import React, { useState, useEffect } from "react";
import Banner from "../components/banner";
import backToTop from "../assets/icons/back_to_top.svg";
import ShopProducts from "./component/shop_products";
import Filter from "./component/filter";
import Search from "./component/search";
import useFetch from "../components/useFetch";
import Loading from "../components/loading";

const Page = () => {
  // States
  const [dynamicUrl, setDynamicUrl] = useState("products");
  const [hideFilter, setHideFilter] = useState(true);

  // API URL
  const apiUrl = `http://localhost:5000/api/${dynamicUrl}`;
  const { data } = useFetch(apiUrl);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Handle scroll to top
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Determine alignment based on product count
  const align = data?.products?.length <= 3 ? "items-start" : "";

  return (
    <div className="h-full p-0">
      {data ? (
        <section>
          {/* Banner */}
          <Banner />

          {/* Search */}
          <Search
            setDynamicUrl={setDynamicUrl}
            setHideFilter={setHideFilter}
            hideFilter={hideFilter}
          />

          {/* Main content */}
            <section className="flex justify-start">
              <div className={`flex flex-row-reverse ${align} gap-10 justify-start`}>

                {/* Shop products */}
                    {data && <ShopProducts hideFilter={hideFilter} data={data} />}

                {/* Filter */}
                <div>
                  {hideFilter && (
                    <div className="sticky top-10 ">
                      <Filter setDynamicUrl={setDynamicUrl} />
                    </div>
                  )}
                </div>
              </div>
            </section>

          {/* Back to top */}
            <div className="relative mt-16 border-t border-[#0B0B0B]">
              <img
                src={backToTop}
                alt="back_to_top"
                className="absolute right-10 -top-7 cursor-pointer"
                onClick={() => {
                  handleScrollToTop();
                }}
              />
            </div>
        </section>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Page;
