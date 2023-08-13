import React, { useState } from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
import left_button from "../assets/icons/left_button.svg";
import right_button from "../assets/icons/right_button.svg";
import up_arrow from "../assets/icons/up_arrow.svg";
import Loading from "./loading.jsx";

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
    <section>

   
    {data ?<section className="my-14 flex w-full items-start justify-between border-t border-[#0B0B0B] pt-12 uppercase relative">
      <article className="w-56 text-4xl font-semibold text-right">
        <p> / {name}</p>
        <div className="mt-5 w-56 ">
          <div className="ml-auto flex w-24  items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer w-8"
              onClick={() => handleScroll(-305)}
            />
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer w-8"
              onClick={() => handleScroll(305)}
            />
          </div>
        </div>
        <div className="w-56 absolute bottom-0">
        <Link to={`/shop`}>
          <div className=" flex h-8 ml-auto w-32 px-5 cursor-pointer items-center justify-center gap-2 border border-[#000000] uppercase">
            <p className="text-xs font-medium">view all</p>
            <img src={up_arrow} alt="up_arrow" />
          </div>
          </Link>
        </div>
      </article>
      <article className="scroll-container scroll-smooth scroll-snap-x mandatory transition-all duration-300 scrollbar-width-thin scrollbar-thumb-gray-500 w-[70%] overflow-x-scroll pb-5">
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
      </section>: <Loading />}
    </section>
  );
};

export default SpecialCategory;
