import React from "react";
import Header from "../../components/header/Header";
import Hero from "../../components/hero/Hero";
import Card from "../../components/cards/Card";
import Footer from "../../components/footer/Footer";
import Categories from "../../components/categories/Categories";
import Shimmer from "../../components/shimmer/Shimmer";

const Home = () => {
  return (
    <div className=" bg-[#f0ecd5]">
      <Hero />
      <Categories/>
      <Card />
    </div>
  );
};

export default Home;
