import React,{useEffect} from "react";
import Collection from "./components/collection";
import Banner from "../components/banner";
import Loading from "../components/loading";
import Limited_collection from "./components/limited_collection";
import Shop from "./components/shop";
import Discover from "./components/discover";
import Membership from "./components/membership";
import Exclusive from "./components/exclusive";
import SpecialCategory from "../components/specialCategory";
import back_to_top from "../assets/icons/back_to_top.svg";
import useFetch from "../components/useFetch";
const Page = () => {
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);
const {data} = useFetch("http://localhost:5000/api/products/?limit=10")
  const name = "new arrival"
  return (
    <div className=" h-full p-0 ">
{data ? <section>
<Collection />
      <Banner />
      <SpecialCategory name={name}/>
      <Limited_collection />
      <Shop />
      <Discover />
      <Membership />
      <Exclusive />
      <section>
        <div className="relative my-20  border-t-[1.5px]  border-[#0B0B0B]">
          <img
            src={back_to_top}
            alt="back_to_top"
            className="absolute right-[10%] -top-5 cursor-pointer"
          />
        </div>
      </section>
</section> :<>
<Loading />
</>}
      
    </div>
  );
};

export default Page;
