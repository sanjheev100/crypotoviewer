import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Exchanges,
  Homepage,
  Cryptocurrencies,
  CryptoDetails,
  News,
} from "./components";
import "./App.css";
import {LinkedinOutlined,
    YoutubeOutlined  } from '@ant-design/icons'
const App = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage />
              </Route>
              <Route exact path="/exchanges">
                <Exchanges />
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies />
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>

        <div className="footer">
          <Typography.Title level={1} styles={{ color: "white", textAlign: "center" }}>
            CryptoViewer <br />
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/exchanges">Exchange</Link>
            <Link to="/news">News</Link>
            
          </Space>
          <Space>
          <p style={{color:"white"}}>Created By <Link to={{ pathname: "https://www.linkedin.com/in/sanjheev-r-505377198/" }} target="_blank" > <LinkedinOutlined /> </Link> Insipired from <Link to={{pathname:"https://www.youtube.com/channel/UCmXmlB4-HJytD7wek0Uo97A" }} target="_blank" > <YoutubeOutlined /></Link></p>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default App;
