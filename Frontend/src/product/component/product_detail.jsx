import React, { useState, useEffect } from "react";
import ProductInformation from "./productInformation";
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

  // Handle thumbnail click
  const handleThumbnailClick = (img) => {
    setSelectedImage(img);
  };

  // Handle size selection
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  // Handle adding to cart
  const handleAddToCart = () => {
    if (selectedSize) {
      setErrorMessage("Item has been added to cart successfully.");
      console.log("Item has been added to cart successfully.")
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    } else {
      setErrorMessage("Please select a size before adding to cart.");
      console.log("Please select a size before adding to cart.")

      setTimeout(() => {
        setErrorMessage("");
      }, 2000);
    }
  };

  return (
    <section className="product_container mb-20 mt-10 h-full border-y border-[#0B0B0B]">
      {/* Error message */}
      <section className="sticky top-10 z-50">
        {/* i have removed the alert system */}
      </section>

      {/* Product details */}
      {data ? (
        <section className="flex items-start gap-5">
          {/* Thumbnail images */}
          <section className="gap flex basis-7 flex-col justify-center py-5">
            {data.images?.map((img, index) => (
              <article
                className="bg relative m-[auto] my-3 flex h-20 items-center justify-center max-md:h-full max-md:w-full"
                key={index}
                onClick={() => handleThumbnailClick(img)}
              >
                <div
                  className={` flex h-20 w-24 cursor-pointer items-center justify-center bg-contain bg-no-repeat  ${
                    img === selectedImage
                      ? `bg-[url('./assets/images/frames.png')]`
                      : ""
                  }`}
                >
                  <div className="mr-5 h-16 w-14 overflow-hidden ">
                    <img
                      src={`https://asis.blob.core.windows.net/asisimages/${img}`}
                      alt="collection_img"
                      className="h-full w-full object-cover object-top "
                    />
                  </div>
                </div>
              </article>
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
          <ProductInformation
            data={data}
            handleSizeSelect={handleSizeSelect}
            handleAddToCart={handleAddToCart}
            selectedSize={selectedSize}
          />
        </section>
      ) : (
        <section>product not found</section>
      )}
    </section>
  );
};

export default Product_detail;
