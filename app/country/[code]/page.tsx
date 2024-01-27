"use client";

import Loading from "@/app/loading";
import OneCountry from "@/components/Country/OneCountry";
import { useGetOneCountryQuery } from "@/lib/features/countries/countriesSlice";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Button, Spin } from "antd";
import { useParams, useRouter } from "next/navigation";
import React from "react";

function Country() {
  const router = useRouter();
  const { code } = useParams();
  const { data } = useGetOneCountryQuery(code);
  const country = data ? data[0] : [];
  if (!data) {
    return <Loading />;
  } else {
    return (
      <div className="container">
        <div className="main">
          <div className="pt-10 pb-5">
            <Button onClick={(e) => router.back()} icon={<ArrowLeftOutlined />}>
              Back
            </Button>
          </div>
          <div className="py-5">
            <OneCountry
              flags={country?.flags}
              name={country?.name?.official}
              languages={country?.languages}
              currencies={country?.currencies}
              domain={country?.tld}
              capital={country?.capital[0]}
              area={country?.area}
              latlang={country?.latlng}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Country;
