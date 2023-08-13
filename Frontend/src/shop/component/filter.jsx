import React, { useState } from "react";

const FilterItem = ({ item, activeItems, setActiveItems, lastItem }) => {
  const isActive = activeItems.includes(item);

  const handleItemClick = () => {
    if (isActive) {
      setActiveItems(activeItems.filter(activeItem => activeItem !== item));
    } else {
      setActiveItems([...activeItems, item]);
    }
  };

  return (
    <label
      className={`my-2 flex cursor-pointer items-center gap-2 ${
        isActive ? "bg-blue-500 text-white" : ""
      }`}
      onClick={handleItemClick}
    >
      <input type="checkbox" className="cursor-pointer" checked={isActive} readOnly />
      <p className="w-48 text-xs font-medium text-[#0B0B0B]">{item}</p>
    </label>
  );
};

const Filter = ({ setDynamicUrl }) => {
  const [activeItems, setActiveItems] = useState([]);
  const miniData = [
    "shoes & slides",
    "Pants",
    "Shirts",
    "bags",
    "wristwatches",
    "headset glasses",
  ];
  const filterData = [
    {
      type: "sales & offers",
      items: [
        "Members only free shipping for orders above 50,000 NGN",
        "LIMITED TIME SALES",
      ],
    },
    {
      type: "Gender",
      items: ["male", "female", "unisex"],
    },
    {
      type: "Collaborations",
      items: [
        "aisi X Nike",
        "aisi X oakley",
        "aisi X bluboy",
        "aisi X zara",
        "aisi X piece et patch",
      ],
    },
  ];

  const generateFilterQuery = () => {
    const filters = activeItems.map(item => `category=${item}`);
    return filters.join("&");
  };

  const applyFilters = () => {
    if (activeItems.length > 0) {
      const query = generateFilterQuery();
      setDynamicUrl(`products/?${query}`);
    }
  };

  return (
    <section className="filter_component mt-5 overflow-y-scroll filter w-72 border border-[#0B0B0B] px-5 pb-5 pt-10">
      <div>
        <p className="text-sm font-semibold uppercase text-[#000000]">
          <em>Shop all </em>
        </p>
        <ul className="border-b border-[#878787] pb-5 text-sm font-semibold uppercase text-[#878787]">
          {miniData.map((data) => (
            <li
              key={data}
              className={`my-2 p-1 rounded cursor-pointer ${activeItems.includes(data) ? "bg-[#cec9c9]" : ""}`}
              onClick={() => {
                const updatedItems = activeItems.includes(data)
                  ? activeItems.filter(item => item !== data)
                  : [...activeItems, data];
                setActiveItems(updatedItems);
                const query = generateFilterQuery();
                setDynamicUrl(`products/?${query}`);
              }}
            >
              {data}
            </li>
          ))}
        </ul>
      </div>
      {filterData.map(({ type, items }) => (
        <div key={type} className="border-b border-[#878787] pb-5 uppercase">
          <p className="mt-5 text-sm font-semibold uppercase text-[#000000]">{type}</p>
          {items.map((item, index) => (
            <FilterItem
              key={index}
              item={item}
              activeItems={activeItems}
              setActiveItems={setActiveItems}
              lastItem={type.toLowerCase()}
            />
          ))}
        </div>
      ))}
      {activeItems.length > 0 && (
        <div className="mt-5 text-sm font-semibold uppercase text-white bg-blue-500 py-2 px-4 rounded cursor-pointer" onClick={applyFilters}>
          Apply Filters
        </div>
      )}
    </section>
  );
};

export default Filter;
