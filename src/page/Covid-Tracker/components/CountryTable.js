import React from 'react';
import numeral from "numeral";

const CountryTable = ({ countries }) => {

  return (
    <div className="country-table">
      {countries.map(({ country, cases }) => (
        <tr key={country}>
          <td>{country}</td>
          <td><strong>{numeral(cases).format("0,0")}</strong></td>
        </tr>
      ))}
    </div>

  );
}

export default CountryTable;