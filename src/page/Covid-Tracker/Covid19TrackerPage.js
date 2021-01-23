import React, { useEffect, useState } from 'react';
import { Row, Col, message, Typography, Select, Tabs } from 'antd';
import axios from 'axios';
import InfoBox from './components/InfoBox';
import MapCovid from './components/MapCovid';
import CountryTable from './components/CountryTable';
import './styles/covid-19.less'
import sortData from '../../utils/sortData';
import LineGraph from './components/LineGraph';
import DynamiChart from './components/DynamiChart';


const Covid19TrackerPage = () => {
  const [countries, setCountries] = useState([])
  const [countryCode, setCountryCode] = useState('WordWide')
  const [countryInfo, setCountryInfo] = useState({})
  const [tableData, setTableData] = useState([])
  // eslint-disable-next-line
  const [mapCountriesData, setMapCountriesData] = useState([]);
  const [casesType, setCasesType] = useState("cases");
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);


  useEffect(() => {
    getCountriesDataDropDrown()
    getContriesInfo()
    // eslint-disable-next-line
  }, [])

  const getCountriesDataDropDrown = async () => {
    try {
      const { data } = await axios.get('https://disease.sh/v3/covid-19/countries')
      const mappedContries = data.map((country) => {
        return {
          name: country.country,
          value: country.countryInfo.iso2
        }
      })
      const sortedData = sortData(data)
      setMapCountriesData(data)
      setTableData(sortedData)
      setCountries(mappedContries)
    } catch (error) {
      console.log(error)
      debugger
      const result = error.response
        ? error.response.data.error.message
        : error.message
      message.error(result)
    }
  }

  const getContriesInfo = async () => {
    const { data } = await axios.get(`https://disease.sh/v3/covid-19/all`)
    setCountryInfo(data)
  }

  const handleChangeSelectCountry = async (value) => {
    try {
      const url = value === 'worldwide'
        ? 'https://disease.sh/v3/covid-19/all'
        : `https://disease.sh/v3/covid-19/countries/${value}`
      const { data } = await axios.get(url)
      setCountryCode(value)
      setCountryInfo(data)
      if (value === 'worldwide') {
        setMapCenter({ lat: 34.80746, lng: -40.4796 })
        setMapZoom(3);
        return
      }
      setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long })
      setMapZoom(4);
    } catch (error) {
      const result = error.response
        ? error.response.data.message
        : error.message
      message.error(result)
    }

  }
  return (
    <Row gutter={[24, 24]} style={{ height: "100%" }}>
      <Col xs={24} lg={14}>
        <Row align="middle" justify="space-between">
          <Typography.Title level={3}>COVID-19 TRACKER</Typography.Title>
          <Select
            value={countryCode}
            showSearch
            style={{ width: 200, boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)" }}
            placeholder="Search to Select country"
            onChange={handleChangeSelectCountry}
          >
            <Select.Option value='worldwide'>WordWide</Select.Option>
            {countries.map(country => <Select.Option key={country.value} value={country.value}>{country.name}</Select.Option>)}
          </Select>
        </Row>

        <Row gutter={[24, 24]} justify='space-between'>
          <Col xs={8}>
            <InfoBox
              isRed
              active={casesType === "cases"}
              onClick={() => setCasesType("cases")}
              color="black" title="Conranvirus cases"
              cases={countryInfo.todayCases}
              total={countryInfo.cases} />
          </Col>
          <Col xs={8}>
            <InfoBox
              isRed
              active={casesType === "recovered"}
              onClick={() => setCasesType("recovered")}
              color="green"
              title="Recovered"
              cases={countryInfo.todayRecovered}
              total={countryInfo.recovered} />
          </Col>
          <Col xs={8}>
            <InfoBox
              isRed
              active={casesType === "deaths"}
              onClick={() => setCasesType("deaths")}
              color="red"
              title="Deaths"
              cases={countryInfo.todayDeaths}
              total={countryInfo.deaths} /></Col>
        </Row>

        <MapCovid
          casesType={casesType}
          mapCountriesData={mapCountriesData}
          center={mapCenter}
          zoom={mapZoom} />
      </Col>
      <Col xs={24} lg={10}>

        <Tabs
          defaultActiveKey="2"
          type="card"
          style={{
            height: "678px",
            width: "100%",
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.1)",
            backgroundColor: "white",
            padding: "0px 0.5rem",

          }}>
          <Tabs.TabPane tab="Live Cases by Country" key="Live Cases by Country">
            <div >
              <CountryTable countries={tableData} />
              <h1>Worldwide new cases</h1>
              <LineGraph casesType={casesType} />
            </div>
          </Tabs.TabPane>
          <Tabs.TabPane tab="HISTORY CASES" key="2">
            <DynamiChart />
          </Tabs.TabPane>
        </Tabs>
      </Col>
    </Row >
  );
}

export default Covid19TrackerPage;