import React from "react";
import collection_img from "../../assets/images/collection_img.png";
import img_border from "../../assets/icons/img_border.svg";
import collection_arrow from "../../assets/icons/collection_arrow.svg";
import collection_small_arrow from "../../assets/icons/collection_small_arrow.svg";
import collection_ball from "../../assets/icons/collection_ball.svg";
import collection_img_2 from "../../assets/images/collection_img_2.png";
import left_button from "../../assets/icons/left_button.svg";
import right_button from "../../assets/icons/right_button.svg";


const Collection = () => {
  const fashionData = [
    {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, Feburary, 2023",
    },  {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, Feburary, 2023",
    },  {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, Feburary, 2023",
    },  {
      title: "ASIS HIGH FASHION ALTE HOODIE",
      description:
        "Introducing the Aisi High Fashion Alte Hoodie: A striking blend of contemporary style and bold expression. Crafted with meticulous a...",
      releaseDate: "13th, Feburary, 2023",
    }, 
    
  ];
const align = fashionData.length < 4 ? "items-start mt-10" : "items-center"

  return (

    <section className="flex items-start  border-b border-[#0B0B0B] max-xl:block ">
      <section className="basis-[47%] border-r border-[#0B0B0B] pb-9 max-xl:border-r-0 ">
        <article className="mt-7 w-96 text-5xl uppercase   text-[#0B0B0B] max-md:w-[100%]">
          <p>
            /n<em>e</em>w 2<em>0</em>23
          </p>
          <p className="text-right">
            s<em>u</em>mm<em>e</em>r{" "}
          </p>
          <p>
            c<em>o</em>llection{" "}
          </p>
        </article>
        <article>
          <p className="ml-[auto] mr-5 mt-7 w-[25rem] text-sm font-semibold max-xl:w-full">
            Asis offers a carefully curated collection of stylish and versatile
            clothing pieces that are designed to elevate everyday looks. From
            comfortable essentials to trendy statement pieces, Aisi aims to
            empower individuals to express their unique sense of style with
            confidence.
          </p>
        </article>
        <article className="relative m-[auto] flex justify-center items-center mt-7 h-72 w-[30rem] max-md:w-full max-md:h-full">
          <div className="flex h-56 w-[28rem] mb-10  items-center justify-center max-md:w-[100%] max-md:h-full">
            <img
              src={collection_img}
              alt="collection_img"
              className=" mt-2 h-full w-full object-cover object-top"
            />
          </div>
          <img
            src={img_border}
            alt="img_border"
            className="absolute bottom-8 right-0"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute top-0 rotate-180 left-0"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute right-0 top-0 rotate-[270deg]"
          />
          <img
            src={img_border}
            alt="img_border"
            className="absolute bottom-8 rotate-90 left-0"
          />
          <p className="absolute bottom-0 left-0 text-xs font-semibold uppercase">
            <em>[asis x nike]</em>
          </p>
        </article>
        <article className="ml-auto mr-5 flex w-40  cursor-pointer items-center justify-center gap-2 border border-[#0B0B0B] py-2">
          <p className="text-base font-medium uppercase text-[#0B0B0B]">
            shop now
          </p>
          <img src={collection_arrow} alt="collection_arrow" />
        </article>
      </section>
      <section className={`flex basis-[53%]  justify-between max-md:flex-col-reverse ${align}`}>
        <div className="">
          {fashionData.map((item, index) => (
            <section
              key={index}
              className="w-72 border-b border-[#0B0B0B] px-9 py-7 max-md:my-10 max-md:px-0"
            >
              <div className="w-[15rem]">
                <p className="w-11/12 border-b border-[#0B0B0B] pb-1 text-xs font-semibold">
                  <span className="mr-1">/</span> {item.title}
                </p>
                <p className="py-2 text-[10px]/[10.5px] ">{item.description}</p>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <p className="text-[7px]/[7px] font-medium">- Released on</p>
                    <img src={collection_ball} alt="collection_ball" />
                    <p></p>
                    <p className="text-[7px]/[7px] font-medium text-[#00000080]">
                      <em>{item.releaseDate}</em>
                    </p>
                  </div>
                  <div className="">
                    <img
                      src={collection_small_arrow}
                      alt="collection_small_arrow"
                    />
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
        <div className="relative ">
          <div className="h-[26rem] w-80">
            <img
              src={collection_img_2}
              alt="collection_img_2"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="absolute mt-5 flex w-full items-center justify-between">
            <img
              src={left_button}
              alt="left_button"
              className="cursor-pointer"
            />

            <div className="flex items-center gap-2">
              <p className="text-base font-medium text-[#000000]">
                1
              </p>
              <div className="h-1 w-20 rounded-sm bg-[#B0B0B0]"></div>
              <p className="text-base font-medium text-[#000000]">
                4
              </p>
            </div>
            <img
              src={right_button}
              alt="right_button"
              className="cursor-pointer"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Collection;
