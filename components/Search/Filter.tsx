import { useGetCountriesByRegionQuery } from "@/lib/features/countries/countriesSlice";
import { Select } from "antd";
import React, { useState } from "react";

function Filter(props: any) {
  const [filterRegion, setFilterRegion] = useState("");

  const { setFilteredData } = props;
  const { data } = useGetCountriesByRegionQuery(filterRegion);
  if (data) setFilteredData(data);
  const handleChange = (value: any) => {
    setFilterRegion(value);
  };
  return (
    <div>
      <Select
        defaultValue="All"
        onChange={handleChange}
        className="w-[200px]"
        options={[
          { value: "Africa", label: "Africa" },
          { value: "Americas", label: "Americas" },
          { value: "Antarctic", label: "Antarctic" },
          { value: "Asia", label: "Asia" },
          { value: "Europe", label: "Europe" },
          { value: "Oceania", label: "Oceania" },
        ]}
      />
    </div>
  );
}

export default Filter;
