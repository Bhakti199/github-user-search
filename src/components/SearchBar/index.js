import React from "react";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";

const SearchBar = ({ searchInput, handleKeyPress, handleInputChange }) => {
  return (
    <Input
      placeholder="Search GitHub User"
      value={searchInput}
      onChange={handleInputChange}
      onKeyDown={handleKeyPress}
      suffix={
        <Button
          type="primary"
          icon={<SearchOutlined />}
          onClick={() =>
            handleSearchUser({ page: 1, limit: 10, userName: searchInput })
          }
        />
      }
      allowClear
    />
  );
};

export default SearchBar;
