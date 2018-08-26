import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import MainBody from "./components/MainBody";

export default class App extends Component {
  render() {
    return (
      
        <div>
          <Header />
          <MainBody />
          <Footer />
        </div>
    );
  }
}