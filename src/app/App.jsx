import { useState } from "react";
import "./styles/global.scss";
import { Header } from "../components/Header";
import { Banner } from "../components/Banner/Banner";
import { Footer } from "../components/Footer/Footer";
import "../App.css";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
