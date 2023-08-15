import React, { useState } from "react";
import down from "../../assets/icons/down.svg";
import hidden_filter from "../../assets/icons/hidden_filter.svg";
import search from "../../assets/icons/search.svg";

const Search = ({ setHideFilter,hideFilter, setDynamicUrl }) => {
  const [name, setName] = useState("");

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      setDynamicUrl(`products/?name=${name}`);
    }
  }

  return (
    <section className="mt-8 flex items-center border-y border-[#000000]">
      <div className="flex h-10 px-5 max-md:px-3  cursor-pointer items-center justify-center border-r border-[#000000] uppercase text-[#0B0B0B]">
        <div
          className="flex justify-center gap-1 "
          onClick={() => setHideFilter((prevFilter) => !prevFilter)}
        >
          <p className="text-sm max-md:text-xs max-md:font-bold font-medium">{hideFilter ? "hide filter": "show filter"}</p>
          <img src={hidden_filter} alt="hidden_filter" />
        </div>
      </div>
      <div className="relative max-lg:basis-[69%] max-xl:basis-[70%] max-md:basis-[60] basis-[79%] items-center gap-3 uppercase text-[#0B0B0B]">
        <input
          type="text"
          placeholder="SEARCH"
          onKeyPress={handleKeyPress}
          onChange={(event) => setName(event.target.value)}
          className="w-full bg-transparent px-5 text-sm font-medium text-[#B0B0B0] outline-0"
        />
        <img
          src={search}
          alt="search"
          className="absolute bottom-1 right-5 cursor-pointer"
        />
      </div>{" "}
      <div className="flex h-10 px-5 cursor-pointer items-center justify-center border-l border-[#000000] uppercase text-[#0B0B0B]">
        <div className="flex justify-center gap-1">
          <p className="text-sm font-medium">sort by</p>
          <img src={down} alt="down" />
        </div>
      </div>
    </section>
  );
};

export default Search;
