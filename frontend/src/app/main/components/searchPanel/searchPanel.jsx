import React, { useContext, useEffect, useState } from "react";
import { post } from "../../../../setup/requests";
import { Context } from "../../../../setup/store";
import "./searchPanel.css";

const pics = ["/assets/clock.png", "/assets/giftBox.png", "/assets/awning.png"];
function SearchPanel() {
  const [picNumber, setPicNumber] = useState(2);
  const [searchString, setSearchString] = useState("");
  const { dispatch, store } = useContext(Context);
  const { sort, selected_categories } = store;
  const search = () => {
    post("/product", {
      sort,
      selected_categories,
      searchString,
    })
      .then((res) => res.data)
      .then((products) => {
        dispatch({ type: "SET_PRODUCTS", payload: products });
        setSearchString("");
      });
  };
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
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
        placeholder="نام محصول خود را وارد کنید.."
        className="searchPanel-input"
      />
      <button onClick={() => search()} className="searchPanel-button">
        جستجو کنید
      </button>
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
