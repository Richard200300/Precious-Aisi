import React, { useState } from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
import left_button from "../assets/icons/left_button.svg";
import right_button from "../assets/icons/right_button.svg";
import up_arrow from "../assets/icons/up_arrow.svg";

const SpecialCategory = ({name}) => {
  const { data } = useFetch("http://localhost:5000/api/products/?limit=10");
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (increment) => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const newPosition = Math.max(0, Math.min(
        container.scrollWidth - container.clientWidth,
        scrollPosition + increment
      ));
      setScrollPosition(newPosition);
      container.scrollLeft = newPosition;
    }
  };

  return (
    <section className="my-14 flex w-full items-start justify-between border-t-[1.5px] border-[#0B0B0B] pt-12 uppercase relative">
      <article className="w-[227px] text-[40px]/[40px] font-[600] text-right">
        <p> / {name}</p>
        <div className="mt-[20px] w-[227px] ">
          <div className="ml-[auto] flex w-[96px] items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer w-[32px]"
              onClick={() => handleScroll(-310)}
            />
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer w-[32px]"
              onClick={() => handleScroll(310)}
            />
          </div>
        </div>
        <div className="w-[200px] 00 z-3 absolute bottom-0">
        <Link to={`/shop`}>
          <div className="ml-auto flex h-[32px] w-[104px] cursor-pointer items-center justify-center gap-2 border-[1.5px] border-[#000000] uppercase">
            <p className="text-[12px]/[16px] font-[500]">view all</p>
            <img src={up_arrow} alt="up_arrow" />
          </div>
          </Link>
        </div>
      </article>
      <article className="scroll-container scroll-smooth scroll-snap-x mandatory transition-all duration-300 scrollbar-width-thin scrollbar-thumb-gray-500 w-[68%] overflow-x-scroll pb-5">
        {data && (
          <div className="flex gap-10">
            {data.products.map((data) => (
              <div key={data._id}>
                <Link to={`/product/${data._id}`}>
                  <Products
                    name={data.name}
                    price={data.price}
                    collaborations={data.collaborations}
                    images={data.images}
                  />
                </Link>
              </div>
            ))}
          </div>
        )}
      </article>
    </section>
  );
};

export default SpecialCategory;
