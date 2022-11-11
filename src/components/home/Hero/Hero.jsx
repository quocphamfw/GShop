import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { products } from "../../assets/data/data";
import { SearchItems } from "./SearchItems";

export const Hero = () => {
  // search
  const [value, setValue] = useState("");
  const onChanage = (e) => {
    setValue(e.target.value);
  };

  const onSearch = (key) => {
    setValue(key);
  };
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>
            <label>
              Over <span>1000</span> instruments, services
            </label>
            <br />
            <label>and accessories for you</label>
          </h1>
          <p>High-quality Products. Best choice for you</p>
          <div className="search">
            <span>All Categories</span>
            <hr />
            <input
              type="text"
              placeholder="Search ..."
              onChange={onChanage}
              value={value}
            />
            <button onClick={() => onSearch(value)}>
              <BiSearch className="serachIcon heIcon" />
            </button>
          </div>
          <SearchItems products={products} value={value} onSearch={onSearch} />
          <p>Examples: Guitar, Piano, Keyboard, Drum ... </p>
        </div>
      </section>
    </>
  );
};
