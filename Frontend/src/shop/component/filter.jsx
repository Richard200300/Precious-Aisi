import React, { useState, useEffect } from "react";
const FilterItem = ({ item, activeItem, setActiveItem }) => {
  const isActive = activeItem === item;

  const handleItemClick = () => {
    setActiveItem(isActive ? null : item);
  };

  return (
    <label className="my-2 flex cursor-pointer items-center gap-2" htmlFor={`checkbox-${item}`}>
    <input
      type="checkbox"
      className="cursor-pointer checkbox"
      checked={isActive}
      onChange={handleItemClick}
      id={`checkbox-${item}`}
    />
    <p
      className={`w-48 text-xs font-medium text-[#0B0B0B] ${
        isActive ? "cursor-pointer" : ""
      }`}
    >
      {item}
    </p>
  </label>
  );
};

const Filter = ({ setDynamicUrl }) => {
  const [activeItem, setActiveItem] = useState(null); 
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

  useEffect(() => {
    if (activeItem) {
      const query = `category=${activeItem}`;
      setDynamicUrl(`products/?${query}`);
    }
  }, [activeItem, setDynamicUrl]);

  return (
    <section className="filter_component mt-5 left-0 overflow-y-scroll filter w-72 border border-[#0B0B0B] px-5 pb-5 pt-10">
      <div>
        <p className="text-sm px-1 font-semibold uppercase text-[#000000]">
          <em
            onClick={() => {
              setDynamicUrl("products");
              setActiveItem(null);
            }}
            className="cursor-pointer"
          >
            Shop all
          </em>
        </p>
        <ul className="border-b border-[#878787] pb-5 text-sm font-semibold uppercase text-[#878787]">
          {miniData.map((data) => (
            <li
              key={data}
              className={`my-2 p-1 rounded cursor-pointer ${
                activeItem === data ? "text-[#000000] italic" : ""
              }`}
            >
              <span
                onClick={() =>
                  setActiveItem(activeItem === data ? null : data)
                }
              >
                {data}
              </span>
            </li>
          ))}
        </ul>
      </div>
      {filterData.map(({ type, items }) => (
        <div key={type} className="border-b border-[#878787] pb-5 uppercase">
          <p className="mt-5 text-sm font-semibold uppercase text-[#000000]">
            {type}
          </p>
          {items.map((item, index) => (
            <FilterItem
              key={index}
              item={item}
              activeItem={activeItem}
              setActiveItem={setActiveItem}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Filter;
