import "./mainPart4.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { VerticalSlider } from "../../Main/VerticalSlide/VerticalSlide";

export const MainPart4 = (props) => {
  const [index, setIndex] = useState(0);

  const { title, videos, bikeImg, descriptions, vertical, footer } = props.data;

  return (
    <div className="section-bike4">
      <h3>{title}</h3>
      <Link to="/">Book a free test ride</Link>
      <div className="videos-list">
        {videos.map((item, i) => {
          return (
            <video
              src={item}
              muted
              autoPlay
              key={i}
              loop
              className={`video-${i + 1}`}
            ></video>
          );
        })}
      </div>

      <div className="color_select">
        <h3>{bikeImg.title}</h3>
        <div className="color_select-bike">
          <img src={bikeImg.img[index]} alt="bikes" />
          <div className="dots">
            {bikeImg.img.map((_, i) => (
              <div
                key={i}
                className={`dot-${i + 1} ${i === index ? "active" : ""}`}
                onClick={() => setIndex(i)}
              ></div>
            ))}
          </div>
        </div>
      </div>

      <div className="images_description">
        <h3>{descriptions.title}</h3>
        <div className="images_description-item">
          {descriptions.images.map((item, i) => (
            <img
              src={item}
              alt="bike"
              key={item}
              className={`image_item-${i + 1}`}
            />
          ))}
        </div>
      </div>
      <VerticalSlider images={vertical} />

      <div className="bike4_footer" >
        <div>
          <h3>{footer.title}</h3>
          <Link to="/">Book a free ride</Link>
        </div>
        <img src={footer.img} alt="" />
      </div>
    </div>
  );
};
