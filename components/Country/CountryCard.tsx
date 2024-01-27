import { Image, Typography } from "antd";
import Link from "next/link";
import React from "react";

const { Paragraph, Title } = Typography;

function CountryCard(props: any) {
  const { flags, name, population, region, capital, code } = props;
  return (
    <div className="bg-white shadow-md rounded-md">
      <Image
        src={flags.png}
        alt={flags.alt}
        className="rounded-t-md"
        placeholder={<Image src={flags.png} alt="loading" preview={false} />}
      />
      <div className="p-3">
        <Link href={`/countries/${code}`} className="hover:text-blue">
          <Title level={3}>{name}</Title>
        </Link>
        <Paragraph>
          <b>Population: </b>
          {population}
        </Paragraph>
        <Paragraph>
          <b>Region: </b>
          {region}
        </Paragraph>
        <Paragraph>
          <b>Capital: </b>
          {capital}
        </Paragraph>
      </div>
    </div>
  );
}

export default CountryCard;
