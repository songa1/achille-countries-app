import { Col, Flex, Image, Row, Typography } from "antd";
import React from "react";

const { Paragraph, Title } = Typography;

function OneCountry(props: any) {
  const { flags, name, domain, languages, currencies, city, latlang, area } =
    props;
  const languageNames = languages
    ? Object.values(languages).join(", ")
    : "No data";
  const currencyNames = currencies
    ? Object.values(currencies)
        .map((currency: any) => currency.name)
        .join(", ")
    : "No data";
  const coordinates = latlang ? latlang.join() : "No data";
  return (
    <div className="flex justify-start items-start gap-10 flex-wrap sm:flex-col xs:flex-col md:flex-row">
      <div className="md:flex-1 w-full">
        <Image src={flags?.svg} alt={flags?.alt} />
      </div>
      <div className="md:flex-1 w-full">
        <Title level={1} className="dark:text-white">
          {name}
        </Title>
        <Flex justify="space-between" align="center" wrap="wrap">
          <Col>
            <Paragraph className="dark:text-white">
              <b>Capital City: </b>
              {city}
            </Paragraph>
            <Paragraph className="dark:text-white">
              <b>Coordinates: </b>
              {coordinates}
            </Paragraph>
            <Paragraph className="dark:text-white">
              <b>Area: </b>
              {area}
            </Paragraph>
          </Col>
          <Col>
            <Paragraph className="dark:text-white">
              <b>Top Level Domain: </b>
              {domain}
            </Paragraph>
            <Paragraph className="dark:text-white">
              <b>Currencies: </b>
              {currencyNames}
            </Paragraph>
            <Paragraph className="dark:text-white">
              <b>Languages: </b>
              {languageNames}
            </Paragraph>
          </Col>
        </Flex>
      </div>
    </div>
  );
}

export default OneCountry;
