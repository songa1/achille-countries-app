"use client";

import CountryCard from "@/components/Country/CountryCard";
import Filter from "@/components/Search/Filter";
import Search from "@/components/Search/Search";
import { useGetCountriesQuery } from "@/lib/features/countries/countriesSlice";
import { Col, Flex, Pagination, Row, Spin } from "antd";
import React, { useState } from "react";
import Loading from "../loading";

function Countries() {
  const { data } = useGetCountriesQuery("");
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [searchedData, setSearchedData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  let dataToUse =
    searchedData.length !== 0
      ? searchedData
      : filteredData.length !== 0
      ? filteredData
      : data;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCountries = dataToUse?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <div className="main">
          <div className="pt-10 pb-5 flex justify-between items-center">
            <Search setSearchedData={setSearchedData} />
            <Filter setFilteredData={setFilteredData} />
          </div>
          <Flex
            wrap="wrap"
            gap="small"
            justify="space-between"
            align="start"
            className="py-5"
          >
            {data &&
              currentCountries?.map((country: any, index: number) => {
                return (
                  <Col key={index}>
                    <CountryCard
                      capital={country?.capital}
                      name={country?.name?.common}
                      region={country?.region}
                      population={country?.population}
                      flags={country?.flags}
                      code={country?.cca3}
                    />
                  </Col>
                );
              })}
          </Flex>
          <div className="flex items-center justify-center py-5">
            <Pagination
              defaultCurrent={1}
              current={currentPage}
              pageSize={itemsPerPage}
              onChange={handlePageChange}
              total={data?.length}
              className="dark:text-white"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
