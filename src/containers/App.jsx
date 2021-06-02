import React from "react";
import "../assets/styles/App.scss";

import Header from "../components/Header";
import Search from "../components/Search";
import Categories from "../components/categories";
import Carousel from "../components/Carousel";
import CarouselItem from "../components/CarouselItem";
import Footer from "../components/Footer";

const App = () => (
  <div className='App'>
    <Header />
    <Search />
    <Categories title='Uno'>
      <Carousel>
        <CarouselItem />
        <CarouselItem />
      </Carousel>
    </Categories>
    <Footer />
  </div>
);

export default App;
