import React from "react";
import { Link } from "react-router-dom";
import { IBannerRightDataTypes } from "../../../types/types";
import Slider from "./Slider";

const Banner: React.FC = () => {
  const BannerRightData: IBannerRightDataTypes[] = [
    {
      id: 1,
      img: "https://hoanmydecor.vn/wp-content/uploads/2022/09/banner-hoanmydecor-7.jpg",
    },
    {
      id: 2,
      img: "https://www.lanha.vn/wp-content/uploads/2023/10/decor-la-gi-10.jpg.webp",
    },
  ];

  return (
    <section id="home-banner">
      <div className="container">
        <div className="home-banner-content">
          <div className="banner-slider-wrapper banner-left">
            <Slider />
          </div>
          <div className="banner-right-imgs">
            {BannerRightData.map((item) => (
              <div key={item.id} className="banner-img-wrapper">
                <Link to="/shop">
                  <img
                    src={item.img}
                    alt="banner-img"
                    style={{
                      width: "390px",
                      height: "193px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
