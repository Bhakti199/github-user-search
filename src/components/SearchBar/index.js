import React from "react";
import { Input } from "antd";

const SearchBar = ({ searchInput, handleKeyPress, handleInputChange }) => {
  return (
    <Input
      placeholder="Search GitHub User"
      value={searchInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      allowClear
    />
  );
};

export default SearchBar;
