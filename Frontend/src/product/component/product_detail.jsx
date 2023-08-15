import React, { useState, useEffect } from "react";
import down from "../../assets/icons/down.svg";

const Product_detail = ({ data, ShowCart }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  useEffect(() => {
    if (data.images && data.images.length > 0) {
      setSelectedImage(data.images[0]);
    }
  }, [data]);

  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setErrorMessage("Item has been added to cart successfully.");
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("Please select a size before adding to cart.");
      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };
  return (
    <div className="product_container mb-20 mt-10 h-full border-y border-[#0B0B0B]">
      <div className="sticky top-10 z-50">
        {errorMessage && (
          <div
            className={`${
              selectedSize ? "bg-[#17A500]" : "bg-red-600"
            } top-10 z-50 w-full p-2 text-center  text-sm font-semibold text-white`}
          >
            {errorMessage}
          </div>
        )}
      </div>

      {data ? (
        <div className="flex items-start gap-5">
          <div className="gap flex basis-7 flex-col justify-center py-5">
            {data.images?.map((img, index) => (
              <article
                className="bg relative m-[auto] my-3 flex h-20 items-center justify-center max-md:h-full max-md:w-full"
                key={index}
                onClick={() => handleThumbnailClick(img)}
              >
                <div
                  className={` flex h-[90px] w-[100px] cursor-pointer items-center justify-center bg-contain bg-no-repeat  ${
                    img === selectedImage
                      ? `bg-[url('./assets/images/frames.png')]`
                      : ""
                  }`}
                >
                  <div className="mr-4 h-[70px] w-[65px] overflow-hidden max-md:h-full max-md:w-full">
                    <img
                      src={`https://asis.blob.core.windows.net/asisimages/${img}`}
                      alt="collection_img"
                      className="h-full w-full object-cover object-top "
                    />
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="items-cent  flex basis-[45%] justify-center overflow-hidden border-x border-[#0B0B0B] px-3 py-5">
            {selectedImage && (
              <div className="product_img w-[511px]">
                <img
                  src={`https://asis.blob.core.windows.net/asisimages/${selectedImage}`}
                  className="h-full w-full overflow-hidden object-cover object-top"
                />
              </div>
            )}
          </div>
          <div className="basis-[40%] py-5">
            <p className="mb-9 text-3xl	 font-medium	 text-[#0B0B0B]">
              /{data.name}
            </p>

            <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
              {data.countInStock?.map((sizeData, index) => {
                return (
                  <div key={index}>
                    <div
                      className=""
                      onClick={() => handleSizeSelect(sizeData.size)}
                    >
                      <p
                        className={`flex h-[37px] w-[96px]  items-center justify-center border text-xs font-medium uppercase ${
                          selectedSize === sizeData.size
                            ? "cursor-pointer border-[#0B0B0B] text-[#0b0b0b]"
                            : "pointer-events-none border-[#C4C4C4] text-[#C4C4C4]"
                        }`}
                      >
                        {sizeData.size}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="flex items-center justify-between  text-base font-semibold	">
                <p className=" uppercase text-[#0B0B0B]">time</p>
                <p className="text-[#17A500]">12:01:43:20</p>
              </div>
              <p className="my-9 text-sm font-medium	 text-[#0B0B0B]">
                {data.description}
              </p>
              <div
                className=""
                onClick={() => {
                  handleAddToCart();
                }}
              >
                <button
                  className={`my-3 w-full cursor-pointer bg-[#0B0B0B] py-4 text-center text-xs font-semibold uppercase ${
                    selectedSize
                      ? "text-[#FFFFFF]"
                      : "pointer-events-none text-[#C4C4C4]"
                  }`}
                  onClick={() => {}}
                >
                  Add to cart -{data.price?.toLocaleString()} NGN
                </button>
              </div>

              <p
                className="mb-3 w-full cursor-pointer border border-[#0B0B0B] py-4 text-center text-xs font-semibold	 uppercase text-[#0B0B0B]"
               
              >
                add to wishlist
              </p>
              <div className="border-y border-[#0B0B0B] text-sm uppercase text-[#0B0B0B] ">
                <div className="flex cursor-pointer items-center justify-between border-b border-[#0B0B0B] py-2">
                  <p>product details</p>
                  <img src={down} alt="down" />
                </div>
                <div className="flex cursor-pointer items-center justify-between py-2">
                  <p>size guild</p>
                  <img src={down} alt="down" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default Product_detail;
