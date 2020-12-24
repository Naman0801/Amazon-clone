import React from "react";
import "./Home.css";
import Product from "./Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonMusic/2020/Events/Holiday/Gateway/US-EN_100220_3monthsfree_ACQ_GW_Hero_D_1500x600_CV59._CB403490035_.jpg"
          alt="home__ads"
        />

        <div className="home__row">
          <Product
            id="8723476t"
            title="The lean startup"
            price="29.99"
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            ratings={3}
          />
          <Product
            id="jelr47y58"
            title="Apple Watch Series 6 (GPS, 44mm) - Silver Aluminium Case with Sport Band"
            price="9999"
            image="https://images-na.ssl-images-amazon.com/images/I/81WqPA2ealL._SL1500_.jpg"
            ratings={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="2983ioru"
            title="Echo Dot (3rd Gen) – Smart speaker with Alexa (Black)"
            price="299.99"
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            ratings={4}
          />
          <Product
            id="983473h"
            title="Apple AirPods Pro"
            price="499"
            image="https://images-na.ssl-images-amazon.com/images/I/71bhWgQK-cL._SL1500_.jpg"
            ratings={5}
          />
          <Product
            id="thfkrje48"
            title="Gaming Monitor Curved"
            price="999"
            image="https://images-na.ssl-images-amazon.com/images/I/812WXALePlL._SL1500_.jpg"
            ratings={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="cklsnd59054"
            title="iPad Air 10.5 inch Wi-Fi Only  256 GB Gold+Apple Pencil (1st Generation)"
            price="5999"
            image="https://images-na.ssl-images-amazon.com/images/I/51iJDRqboML._SL1024_.jpg"
            ratings={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
