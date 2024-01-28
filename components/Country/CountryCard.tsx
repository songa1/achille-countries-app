import { Image, Typography } from "antd";
import Link from "next/link";
import React from "react";

const { Paragraph, Title } = Typography;

function CountryCard(props: any) {
  const { flags, name, population, region, capital, code } = props;
  return (
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-md md:w-full">
      <Image
        src={flags.png}
        alt={flags.alt}
        className="rounded-t-md"
        style={{ width: "100%" }}
        placeholder={<Image src={flags.png} alt="loading" preview={false} />}
      />
      <div className="p-3">
        <Link href={`/country/${code}`} className="hover:text-blue">
          <Title
            level={3}
            className="dark:text-gray-50 word-wrap w-[300px] hover:underline"
          >
            {name}
          </Title>
        </Link>
        <Paragraph className="dark:text-gray-50">
          <b>Population: </b>
          {population}
        </Paragraph>
        <Paragraph className="dark:text-gray-50">
          <b>Region: </b>
          {region}
        </Paragraph>
        <Paragraph className="dark:text-gray-50">
          <b>Capital: </b>
          {capital}
        </Paragraph>
      </div>
    </div>
  );
}

export default CountryCard;
