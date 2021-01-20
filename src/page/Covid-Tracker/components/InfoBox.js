import React from 'react';
import { Card, Typography } from 'antd';
import numeral from "numeral";

const prettyPrintStat = (stat) => stat ? `+${numeral(stat).format("0.0a")}` : "+0";

const InfoBox = ({ onClick, title, cases, total, color, active, isRed, }) => {

  return (
    <Card onClick={onClick}
      className={`${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}
      style={{ width: "100%", boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)", cursor: 'pointer' }}>
      <h1 style={{ color: color }}>{title}</h1>
      <Typography.Title level={4} style={{ color: color }}>{prettyPrintStat(cases)}</Typography.Title>
      <p style={{ color: color }}>{numeral(total).format("0.0a")} total</p>
    </Card>
  );
}

export default InfoBox;