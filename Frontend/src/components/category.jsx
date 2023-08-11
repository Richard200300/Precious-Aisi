import React from "react";
import useFetch from "./useFetch.jsx";
import Products from "./products.jsx";
import { Link } from "react-router-dom";
const Category = () => {
  const { data } = useFetch(
    "http://localhost:5000/api/products/?limit=3",
  );
  console.log(data);
  return (
    <section className=" border-t-[1.5px] border-[#0B0B0B] pt-12 flex w-full items-start justify-between uppercase">
      <article className="w-[200px] text-[40px]/[40px] font-[600] text-right">
        /masked scroll variants
      </article>
      <article>
        {data && (
          <div className="flex gap-10">
            {data.products.map((data) => {
              return (
                <div key={data._id}>
                    <Link to={`/product/${data._id}`}>
                  <Products
                    name={data.name}
                    price={data.price}
                    collaborations={data.collaborations}
                    images={data.images}
                  />
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </article>
    </section>
  );
};

export default Category;
