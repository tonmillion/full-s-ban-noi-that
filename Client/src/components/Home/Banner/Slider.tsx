import React, { useState } from "react";
import { VscChevronLeft, VscChevronRight } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { ISliderDataTypes } from "../../../types/types";

const Slider: React.FC = () => {
  const SliderData: ISliderDataTypes[] = [
    {
      id: 1,
      img: "https://lingdecor.com/wp-content/uploads/2020/09/mua-do-trang-tri-nha-o-dau16.jpg",
    },
    {
      id: 2,
      img: "https://noithatmanhhe.vn/media/27034/12-ke-tivi-phong-cach-tan-co-dien.jpg",
    },
    {
      id: 3,
      img: "https://static-images.vnncdn.net/files/publish/2022/8/12/can-ho-658.jpg",
    },
  ];

  const [tabIndex, setTabIndex] = useState<number>(1);

  const handleRightBtnClick = (): void => {
    setTabIndex(tabIndex + 1);
    if (tabIndex >= 3) setTabIndex(1);
  };

  const handleLeftBtnClick = (): void => {
    setTabIndex(tabIndex - 1);
    if (tabIndex <= 1) setTabIndex(3);
  };

  return (
    <div className="banner-slider">
      {/* ======= Slide item ======= */}
      {SliderData.map((item) => (
        <div
          key={item.id}
          className={item.id === tabIndex ? "slide-item" : "d-none"}
        >
          <Link to="/shop">
            <img
              src={item.img}
              alt="slide-img"
              style={{
                width: "876px",
                height: "415px",
                objectFit: "cover",
              }}
            />
          </Link>
        </div>
      ))}
      {/* ======= Slider buttons ======= */}
      <div className="slider-btns">
        <button onClick={handleLeftBtnClick} className="left-btn">
          <VscChevronLeft />
        </button>
        <button onClick={handleRightBtnClick} className="right-btn">
          <VscChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Slider;
