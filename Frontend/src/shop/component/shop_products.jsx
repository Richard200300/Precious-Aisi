import React from "react";
import Products from "../../components/products";

const ShopProducts = ({ allProducts, hide_filter }) => {
  const gridColumns = hide_filter ? "grid-cols-3" : "grid-cols-4";

  return (
    <section className="mt-5">
      <div className={`grid ${gridColumns} gap-10`}>
        {allProducts.products?.map((product) => (
          <div key={product.name}>
            <Products
              name={product.name}
              price={product.price}
              collaborations={product.collaborations}
              images={product.images}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShopProducts;
