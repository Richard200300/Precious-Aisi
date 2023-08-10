import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";
import Product_detail from "./component/product_detail";
import Banner from "../components/banner";
import Confirmation from "./component/confirmation";
import Cart from "../components/cart";
const Page = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [hideCart, ShowCart] = useState(false)

  useEffect(() => {
    fetchData();
  }, [id]);

  async function fetchData() {
    try {
      const url = `http://localhost:5000/api/products/${id}`;

      const response = await Axios.get(url);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className=" h-full p-0">
      <Banner />

      {hideCart && <Cart hideCart={hideCart} ShowCart={ShowCart}/>}

      {/* <Confirmation /> */}
      <Product_detail id={id} product={product}   ShowCart={ShowCart}/>
    </div>
  );
};

export default Page;
