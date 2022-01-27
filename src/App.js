import React from "react";
import Footer from "./core/components/custom/footer";
import Header from "./core/components/custom/header";
import Main from "./core/components/custom/main";
import GlogalStyles from "./core/styles";

export default function App() {
  return (
    <>
      <GlogalStyles />
      <Header />
      <Main />
      <Footer />
    </>
  );
}