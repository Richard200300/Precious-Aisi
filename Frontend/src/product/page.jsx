import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Product_detail from "./component/product_detail";
import Banner from "../components/banner";
import Cart from "../components/cart";
import useFetch from "../components/useFetch";
import SpecialCategory from "../components/specialCategory";
import Loading from "../components/loading";

const Page = () => {
  const { id } = useParams();
  const [hideCart, ShowCart] = useState(false);

  const apiUrl = `http://localhost:5000/api/products/${id}`;
  const { data} = useFetch(apiUrl);

   const name = 'you may also like'

  return (
    <div className=" h-full p-0">
     {data ? <div>

      

      
      <Banner />

      {hideCart && <Cart data={data} hideCart={hideCart} ShowCart={ShowCart} />}
      <div className="my-4 text-center text-[20px] font-[600] text-[red]">
    
      </div>
      {data && (
        <div className="">

        <Product_detail id={id} data={data} ShowCart={ShowCart} />
        <SpecialCategory name={name} />
        </div>

      )}

</div> : <Loading />}
    </div>
  );
};

export default Page;
