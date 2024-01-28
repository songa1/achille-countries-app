import Loading from "@/app/loading";
import { useGetCountriesBySearchingNameQuery } from "@/lib/features/countries/countriesSlice";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";

function Search(props: any) {
  const { setSearchedData } = props;
  const [searchTerm, setSearchTerm] = useState("");

  const { data, status, isLoading } =
    useGetCountriesBySearchingNameQuery(searchTerm);
  console.log(status);
  if (data) {
    setSearchedData(data);
  }

  const handleSearch = (e: any) => {
    setSearchTerm(e.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Input
        allowClear
        className="dark:bg-white dark:rounded"
        addonBefore={<SearchOutlined />}
        onChange={handleSearch}
        placeholder="Search countries..."
      />
    </div>
  );
}

export default Search;
