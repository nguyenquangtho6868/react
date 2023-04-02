import React from "react";
import Navbar from "../../UI/Navbar/Navbar";
import Footer from "../../UI/Footer/Footer";
import Banner from "../../UI/Banner/Banner";
import LiveChat from "../../UI/LiveChat/LiveChat";
import Messinger from "../../UI/LiveChat/Messinger";
import ListCategories from "../../copponents/ListCategories/ListCategories";
import ListPoducts from "../../copponents/ListProducts/ListPoducts";

import Information from "../../UI/Information/Information";

import { useState } from "react";
import "./Home.css";

function Home() {
  const [liveChat, setLiveChat] = useState(false);
  //sự kiện ẩn hiện live chat
  const handleLiveChat = () => {
    setLiveChat(!liveChat);
  };

  return (
    <div>
      <Navbar />

      <Banner />

      <h6 className="ca">CAREFULY CREATED COLLECTIOND</h6>
      <ListCategories />
      <ListPoducts />
      <Information />

      <Footer />
      <div className="livechat" onClick={() => handleLiveChat()}>
        <LiveChat />
      </div>
      {liveChat && (
        <div className="live">
          <Messinger />
        </div>
      )}
    </div>
  );
}

export default Home;
