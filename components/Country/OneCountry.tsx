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
    <div className="flex justify-start items-start gap-10">
      <div className="flex-1">
        <Image src={flags?.svg} alt={flags?.alt} />
      </div>
      <div className="flex-1">
        <Title level={1}>{name}</Title>
        <Flex justify="space-between" align="center">
          <Col>
            <Paragraph>
              <b>Capital City: </b>
              {city}
            </Paragraph>
            <Paragraph>
              <b>Coordinates: </b>
              {coordinates}
            </Paragraph>
            <Paragraph>
              <b>Area: </b>
              {area}
            </Paragraph>
          </Col>
          <Col>
            <Paragraph>
              <b>Top Level Domain: </b>
              {domain}
            </Paragraph>
            <Paragraph>
              <b>Currencies: </b>
              {currencyNames}
            </Paragraph>
            <Paragraph>
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
