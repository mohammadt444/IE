import React, { useEffect, useState } from "react";
import "./searchPanel.css";

const pics = ["/assets/clock.png", "/assets/giftBox.png", "/assets/awning.png"];

function SearchPanel() {
  const [picNumber, setPicNumber] = useState(2);
  useEffect(() => {
    const interval = setInterval(() => {
      setPicNumber((picNumber + 1) % pics.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="searchPanel">
      <label className="searchPanel-header">در محصولات سایت جستجو کنید..</label>
      <input
        placeholder="نام محصول خود را وارد کنید.."
        className="searchPanel-input"
      />
      <button className="searchPanel-button">جستجو کنید</button>
      <img className="searchPanel-img" src={pics[picNumber]} alt="clock" />
      <div
        onClick={() =>
          setPicNumber(picNumber === 0 ? pics.length - 1 : picNumber - 1)
        }
        className="searchPanel-img_button searchPanel-img_button_previous"
      >
        <img
          className="searchPanel-img_button_previous_svg"
          src="/assets/svg/next.svg"
          alt=""
        />
      </div>
      <div
        onClick={() => setPicNumber((picNumber + 1) % pics.length)}
        className="searchPanel-img_button searchPanel-img_button_next"
      >
        <img src="/assets/svg/next.svg" alt="" />
      </div>
    </div>
  );
}

export default SearchPanel;
