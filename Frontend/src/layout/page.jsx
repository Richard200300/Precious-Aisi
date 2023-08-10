import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";

const Page = () => {
  return (
    <div className="bg-[url('./assets/images/bg_img.png')] px-7  max-md:px-3">
      <div>
        <Header/>
        <Outlet />

        <Footer />
        
      </div>
    </div>
  );
};

export default Page;
