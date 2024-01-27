import { SearchOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import React from "react";

function Search(props) {
  return (
    <div>
      <Space.Compact size="large">
        <Input addonBefore={<SearchOutlined />} placeholder="Search countries..." />
      </Space.Compact>
    </div>
  );
}

export default Search;
