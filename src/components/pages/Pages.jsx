import React from "react";
import { Header } from "../common/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "../home/Home";
import { Footer } from "../common/Footer";
import { Details } from "../home/details/Details";

export const Pages = ({ cartItems }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} />} />
        <Route path="/cart/:id" element={<Details />}></Route>
      </Routes>
      <Footer />
    </>
  );
};
