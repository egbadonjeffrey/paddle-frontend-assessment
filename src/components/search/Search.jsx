import "./search.css";

import React from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
  return (
    <>
      <div className="search__input">
        <input
          placeholder="Search here"
          type="text"
          name="search"
          className="search__field"
        />
        <BiSearch className="search__icon" />
      </div>
    </>
  );
};

export default Search;
