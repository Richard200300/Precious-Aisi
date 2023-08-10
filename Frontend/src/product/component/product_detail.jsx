import React,{useState, useEffect} from "react";
import down from "../../assets/icons/down.svg";
import up_button from "../../assets/icons/up_button.svg";
import down_button from "../../assets/icons/down_button.svg";
import img_border from "../../assets/icons/img_border.svg";
const Product_detail = ({ product, ShowCart }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      if (product.images && product.images.length > 0) {
        setSelectedImage(product.images[0]);
      }
    }, [product]);


    const handleThumbnailClick = (img) => {
        setSelectedImage(img);
      };
    return (
    <div className="mt-10 border-y-[1.5px] border-[#0B0B0B]  ">
      {product ? (
        <div className="flex items-start gap-5">
          <div className="gap flex basis-[12%] justify-center py-5">
            <div className="relative h-[84vh]">
              <img
                src={up_button}
                alt="up_button"
                className="absolute top-[20px] ml-4  cursor-pointer"
              />
              <img
                src={down_button}
                alt="down_button"
                className="absolute bottom-[0px] ml-4  cursor-pointer"
              />

              <div className="mt-[100px] cursor-pointer">
                {product.images?.map((img) => {
                  return (
                    <article className="relative m-[auto]  mt-7 h-[100px] w-[88px] max-md:h-[100%] max-md:w-[100%]">
                      <div className="flex h-[84.96px] w-[82px] items-center justify-center overflow-hidden max-md:h-[100%] max-md:w-[100%]"  onClick={() => handleThumbnailClick(img)}>
                        <img
                          src={`https://asis.blob.core.windows.net/asisimages/${img}`}
                          alt="collection_img"
                          className=" ml-2 mt-[10px] h-[90%] w-[90%] object-cover object-top"
                        />
                      </div>
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute bottom-[0px] right-[0px] w-[17px]"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute top-[0px] w-[17px] rotate-[180deg]"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute right-[0px] top-[0px] w-[17px] rotate-[270deg]"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute bottom-[0px] w-[17px] rotate-[90deg]"
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex h-[100%] basis-[45%] items-center   justify-center border-x-[1.5px] border-[#0B0B0B] px-3 py-5 overflow-hidden">
            {selectedImage && (
              <div className="h-[85vh] w-[511px]">
                <img
                  src={`https://asis.blob.core.windows.net/asisimages/${selectedImage}`}
                  className="h-[100%] w-[100%] object-cover object-top overflow-hidden"
                 
                />
              </div>
            )}
          </div>
          <div className="basis-[40%] py-5">
            <p className="mb-9 text-[32px]/[32px] font-[500] text-[#0B0B0B]">
              /{product.name}
            </p>

            <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
              {product.countInStock?.map((data) => {
                return (
                  <div key={data.size}>
                    <p className="flex h-[37px] w-[96px] cursor-pointer items-center justify-center border-[1.5px] border-[#0B0B0B] text-[12px]/[16px] font-[500] uppercase text-[#0b0b0b]">
                      {" "}
                      {data.size}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="">
              <div className="flex items-center justify-between  text-[16px]/[19.5px] font-[600]">
                <p className=" uppercase text-[#0B0B0B]">time</p>
                <p className="text-[#17A500]">12:01:43:20</p>
              </div>
              <p className="my-9 text-[14px]/[19.5px] font-[500] text-[#0B0B0B]">
                {product.description}
              </p>
              <p className="my-3 w-full cursor-pointer bg-[#0B0B0B] py-4 text-center text-[12px]/[12px] font-[600] uppercase text-[#FFFFFF]" onClick={()=> {
                ShowCart(prevCart => !prevCart)
                
              }}>
                add to cart- {product.price?.toLocaleString()} NGN
              </p>
              <p className="mb-3 w-full cursor-pointer border-[1.5px] border-[#0B0B0B] py-4 text-center text-[12px]/[12px] font-[600] uppercase text-[#0B0B0B]">
                add to wishlist
              </p>
              <div className="border-y-[1px] border-[#0B0B0B] text-[14px]/[24px] uppercase text-[#0B0B0B] ">
                <div className="flex cursor-pointer items-center justify-between border-b-[1px] border-[#0B0B0B] py-2">
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
