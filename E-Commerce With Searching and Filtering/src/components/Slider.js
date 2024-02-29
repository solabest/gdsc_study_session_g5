import React from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import data from "../db/data";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];
console.log(data);
function Slider() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Available Products</h1>
      <div className="slider">
        <Carousel breakPoints={breakPoints}>
          {data.map(function (data) {
            return (
              <Item>
                <img
                  src={data.img}
                  key={Math.random}
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </Item>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Slider;
