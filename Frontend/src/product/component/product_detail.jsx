import React, { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";

const Product_detail = ({ data }) => {
  // States
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Effect to set initial selected image
  useEffect(() => {
    if (data.images && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  // Handle adding to cart
  const handleAddToCart = () => {
    if (selectedSize) {
      setErrorMessage("Item has been added to cart successfully.");
      console.log("Item has been added to cart successfully.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("Please select a size before adding to cart.");
      console.log("Please select a size before adding to cart.");

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <section className="product_container mb-20 mt-10 h-full border-y border-[#0B0B0B]">
      {/* Product details */}
      {data ? (
        <section className="flex items-start gap-5">
          {/* Thumbnail images */}
          <section className="gap flex basis-7 flex-col justify-center py-5">
            {data.images?.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(img)}
                className={` mb-5 flex h-20 w-24 cursor-pointer items-center justify-center bg-contain bg-no-repeat ${
                  img === selectedImage
                    ? `bg-[url('./assets/images/frames.png')]`
                    : ""
                }`}
              >
                <img
                  src={`https://asis.blob.core.windows.net/asisimages/${img}`}
                  alt="collection_img"
                  className="mr-5 h-16 w-14 object-cover object-top "
                />
              </div>
            ))}
          </section>

          {/* Selected image */}
          <section className="items-cent  flex basis-[45%] justify-center overflow-hidden border-x border-[#0B0B0B] px-3 py-5">
            {selectedImage && (
              <img
                src={`https://asis.blob.core.windows.net/asisimages/${selectedImage}`}
                className="h-[31rem] w-[32rem]   overflow-hidden object-cover object-top"
              />
            )}
          </section>

          {/* Product information */}

          <section className="basis-[40%] py-5">
            <p className="mb-9 text-3xl font-medium text-[#0B0B0B]">
              /{data.name}
            </p>
            {/* Sizes */}
            <section className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
              {data.countInStock?.map((sizeData, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedSize(sizeData.size)}
                  className={`flex h-10 w-24 items-center justify-center border text-xs font-medium uppercase ${
                    selectedSize === sizeData.size
                      ? "cursor-pointer border-[#0B0B0B] text-[#0b0b0b]"
                      : " border-[#C4C4C4] text-[#C4C4C4]"
                  }`}
                >
                  {sizeData.size}
                </div>
              ))}
            </section>

            {/* Additional details */}
            <section className="">
              {/* Time */}
              <article className="flex items-center justify-between text-base font-semibold">
                <p className="uppercase text-[#0B0B0B]">time</p>
                <p className="text-[#17A500]">12:01:43:20</p>
              </article>

              {/* Description */}
              <p className="my-9 text-sm font-medium text-[#0B0B0B]">
                {data.description}
              </p>

              {/* Add to cart */}

              <button
                className={`my-3 w-full  bg-[#0B0B0B] py-4 text-center text-xs font-semibold uppercase ${
                  selectedSize
                    ? "cursor-pointer text-[#FFFFFF]"
                    : " cursor-default text-[#C4C4C4]"
                }`}
                onClick={() => {
                  handleAddToCart();
                }}
              >
                Add to cart -{data.price?.toLocaleString()} NGN
              </button>

              {/* Add to wishlist */}
              <button className="mb-3 w-full cursor-pointer border border-[#0B0B0B] py-4 text-center text-xs font-semibold uppercase text-[#0B0B0B]">
                add to wishlist
              </button>

              {/* Accordion */}
              <section className="border-y border-[#0B0B0B] text-sm uppercase text-[#0B0B0B] ">
                <article className="flex cursor-pointer items-center justify-between border-b border-[#0B0B0B] py-2">
                  <p>product details</p>
                  <img src={down} alt="down" />
                </article>

                <article className="flex cursor-pointer items-center justify-between py-2">
                  <p>size guild</p>
                  <img src={down} alt="down" />
                </article>
              </section>
            </section>
          </section>
        </section>
      ) : (
        <section>product not found</section>
      )}
    </section>
  );
};

export default Product_detail;
