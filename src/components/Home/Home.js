import React from 'react';
import './Home.css';
import Product from './Product/Product';
const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="179458"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51zNIcZlILL._SL1000_.jpg"
            rating={5}
            title="Ring Peephole Cam - Smart video doorbell, HD video, 2-way talk, easy installation"
          />

          <Product
            id="158348"
            price={249.99}
            rating={4}
            title="J-ouuo Inflatable Pool Blow Up Full-Sized Pool for Family Rectangular Inflatable Thickened Square Swimming Pool for Toddlers, Kids, Family, Above Ground, Backyard, Outdoor"
            image="https://images-na.ssl-images-amazon.com/images/I/61J2JRoBz3L._AC_SL1002_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="135246"
            title="LG 27GL83A-B 27 Inch Ultragear QHD IPS 1ms NVIDIA G-SYNC Compatible Gaming Monitor, Black"
            image="https://images-na.ssl-images-amazon.com/images/I/91lS5yEDH-L._AC_SL1500_.jpg"
            price={379.99}
            rating={3}
          />
          <Product
            id="524219"
            image="https://images-na.ssl-images-amazon.com/images/I/71geJeG5e3L._AC_SL1500_.jpg"
            price={350.99}
            title="
            Fitness Reality 810XLT Super Max Power Cage with Optional Lat Pull-down Attachment and Adjustable Leg Hold-down"
            rating={3}
          />
          <Product
            id="115266"
            image="https://images-na.ssl-images-amazon.com/images/I/71T539VZ2cL._AC_SL1500_.jpg"
            title="Dell XPS 13 7390 2-in-1 Convertible 13.4-inch FHD InfinityEdge Touchscreen Laptop (Silver) Intel Core i7-1065G7 10th Gen, 32GB RAM, 512GB SSD, Windows 10 Home (XPS7390-7954SLV-PUS)"
            price={1689.98}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="145853"
            title="GoPro HERO5 Black Waterproof Digital Action Camera w/ 4K HD Video & 12MP Photo (Renewed)"
            image="https://images-na.ssl-images-amazon.com/images/I/71O0wQZLo9L._AC_SL1500_.jpg"
            price={149.99}
            rating={4}
          />
          <Product
            id="324261"
            image="https://images-na.ssl-images-amazon.com/images/I/A1dLsREPznL._AC_SL1500_.jpg"
            title="
          LG OLED65CXPUA Alexa Built-In CX 65 4K Smart OLED TV (2020)"
            price={2599.99}
            rating={3}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
