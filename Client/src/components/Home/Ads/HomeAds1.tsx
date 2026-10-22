import React from "react";
import ChairsImg from "../../../assets/img/home-ads/chairs.jpeg";
import ChargerImg from "../../../assets/img/home-ads/charger.jpeg";
import SpeakerImg from "../../../assets/img/home-ads/speaker.jpeg";
import { Link } from "react-router-dom";
import { IAdsData1 } from "../../../types/types";

const HomeAds1: React.FC = () => {
  const AdsData1: IAdsData1[] = [
    { id: 1, img: "https://noithatmanhhe.vn/media/27034/12-ke-tivi-phong-cach-tan-co-dien.jpg" },
    { id: 2, img: "https://lingdecor.com/wp-content/uploads/2020/09/mua-do-trang-tri-nha-o-dau16.jpg" },
    { id: 3, img: "https://static-images.vnncdn.net/files/publish/2022/8/12/can-ho-658.jpg" },
  ];

  return (
    <section id="ads-1">
      <div className="container">
        <div className="row">
          {AdsData1.map((item) => (
            <div key={item.id} className="col-lg-4">
              <div className="ads-img">
                <Link to="/shop">
                  <img
                    src={item.img}
                    alt="ads-img"
                    style={{
                      width: "416px",
                      height: "224px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeAds1;
