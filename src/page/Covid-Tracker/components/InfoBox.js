import React from 'react';
import { Card, Typography } from 'antd';
import numeral from "numeral";

const InfoBox = ({ title, cases, total }) => {

  return (
    <Card style={{ width: "100%", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}>
      <h1>{title}</h1>
      <Typography.Title level={4}>{numeral(cases).format("0,0")}</Typography.Title>
      <p>{numeral(total).format("0,0")} total</p>
    </Card>
  );
}

export default InfoBox;