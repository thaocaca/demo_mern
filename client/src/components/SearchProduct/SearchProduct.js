import {
  Input,
} from "antd";
import { useState } from "react";
import "./style.scss";
const {Search} = Input;

const SearchProduct = (props) => {
  const [searchText, setSearchText] = useState("");
  const onSearch = (value) => {
    setSearchText(value)
  };

  return (
    
    <Search
      placeholder="Input search text ...."
      allowClear
      enterButton="Search"
      size="default"
      onSearch={onSearch}
      style={{ width: "300px" }}
    />
  );
};

export default SearchProduct;
