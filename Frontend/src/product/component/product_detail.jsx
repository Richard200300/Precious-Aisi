import React,{useState, useEffect} from "react";
import down from "../../assets/icons/down.svg";
import up_button from "../../assets/icons/up_button.svg";
import down_button from "../../assets/icons/down_button.svg";
import img_border from "../../assets/icons/img_border.svg";
import Axios from "axios";
const Product_detail = ({ data, ShowCart, }) => {
  function handleSubmit() {
    const cartItem = {
        productId: data._id,
        size: "lg",
        quantity: 3
    };

    Axios.put(`http://localhost:5000/api/carts/`, cartItem)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}


  
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
      if (data.images && data.images.length > 0) {
        setSelectedImage(data.images[0]);
      }
    }, [data]);


    const handleThumbnailClick = (img) => {
        setSelectedImage(img);
      };
    return (
    <div className="mt-10 mb-20  h-full border-y product_container  border-[#0B0B0B]">

      {data ? (
        <div className="flex items-start gap-5">
          <div className="gap flex basis-7 justify-center py-5">
            <div className="relative ">
              <img
                src={up_button}
                alt="up_button"
                className="absolute top-5 ml-4  cursor-pointer"
              />
              <img
                src={down_button}
                alt="down_button"
                className="absolute bottom-0 ml-4  cursor-pointer"
              />

              <div className="mt-20 cursor-pointer">
                {data.images?.map((img, index) => {
                  return (
                    <article className="relative m-[auto]  flex justify-center items-start mt-7 h-20 bg-red-200 max-md:h-full max-md:w-full" key={index}>
                      <div className=" h-[84.96px] w-[82px]  overflow-hidden max-md:h-full max-md:w-full"  onClick={() => handleThumbnailClick(img)}>
                        <img
                          src={`https://asis.blob.core.windows.net/asisimages/${img}`}
                          alt="collection_img"
                          className="h-full w-full object-cover object-top"
                        />
                      </div>
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute bottom-0 right-0 w-4"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute top-0 w-4 rotate-180"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute right-0 top-0 w-4 rotate-[270deg]"
                      />
                      <img
                        src={img_border}
                        alt="img_border"
                        className="absolute bottom-0 w-4 rotate-90"
                      />
                    </article>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex  basis-[45%] items-cent justify-center border-x border-[#0B0B0B] px-3 py-5 overflow-hidden">
            {selectedImage && (
              <div className="product_img w-[511px]">
                <img
                  src={`https://asis.blob.core.windows.net/asisimages/${selectedImage}`}
                  className="h-full w-full object-cover object-top overflow-hidden"
                 
                />
              </div>
            )}
          </div>
          <div className="basis-[40%] py-5">
            <p className="mb-9 text-3xl	 font-medium	 text-[#0B0B0B]">
              /{data.name}
            </p>

            <div className="mb-5 flex flex-wrap gap-x-5 gap-y-3">
              {data.countInStock?.map((data) => {
                return (
                  <div key={data.size}>
                    <p className="flex h-[37px] w-[96px] cursor-pointer items-center justify-center border border-[#0B0B0B] text-xs font-medium	 uppercase text-[#0b0b0b]">
                      {" "}
                      {data.size}
                    </p>
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
              <p className="my-3 w-full cursor-pointer bg-[#0B0B0B] py-4 text-center text-xs font-semibold	 uppercase text-[#FFFFFF]" onClick={()=> {
                handleSubmit()
                
              }}>
                add to cart- {data.price?.toLocaleString()} NGN
              </p>
              <p className="mb-3 w-full cursor-pointer border border-[#0B0B0B] py-4 text-center text-xs font-semibold	 uppercase text-[#0B0B0B]" onClick={()=> {
                ShowCart(true)

              }}>
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
