import "./appParallax.scss";
import { Link } from "react-router-dom";
import { Parallax } from "react-scroll-parallax";

import i1 from "../../../assets/main-page/main1.webp";
import i2 from "../../../assets/main-page/main2.webp";
import i3 from "../../../assets/main-page/main3.webp";
import i4 from "../../../assets/main-page/main4.webp";
import i5 from "../../../assets/main-page/main5.webp";
import i6 from "../../../assets/main-page/main6.webp";
import i7 from "../../../assets/main-page/main7.webp";
import i8 from "../../../assets/main-page/main8.webp";
import i9 from "../../../assets/main-page/main9.webp";
import i10 from "../../../assets/main-page/main10.webp";
import i11 from "../../../assets/main-page/main11.webp";
import i12 from "../../../assets/main-page/main12.webp";
import i13 from "../../../assets/main-page/main13.webp";
import i14 from "../../../assets/main-page/main14.webp";
import i15 from "../../../assets/main-page/main15.webp";

export const AppParallax = (props) => {
  const { title, span } = props.data;

  return (
    <>
      <div className="app_parallax">
        <h2>{title}</h2>
        <span>{span}</span>
        <Link to="/app">Discover the app</Link>
      </div>
      <div className="parallax_items">
        <div className="line1">
          <img src={i1} alt="item" />
          <img src={i2} alt="item" />
        </div>
        <Parallax className="line2" translateY={[50, -50]}>
          <img src={i3} alt="item" />
          <img src={i4} alt="item" />
          <img src={i5} alt="item" />
        </Parallax>
        <Parallax className="line3" translateY={[100, -80]}>
          <img src={i6} alt="item" />
          <img src={i7} alt="item" />
        </Parallax>
        <Parallax className="line4" translateY={[200, -180]}>
          <img src={i8} alt="item" />
        </Parallax>
        <Parallax className="line5" translateY={[100, -80]}>
          <img src={i9} alt="item" />
          <img src={i10} alt="item" />
        </Parallax>
        <Parallax className="line6" translateY={[50, -50]}>
          <img src={i11} alt="item" />
          <img src={i12} alt="item" />
          <img src={i13} alt="item" />
        </Parallax>
        <div className="line7">
          <img src={i14} alt="item" />
          <img src={i15} alt="item" />
        </div>
      </div>
    </>
  );
};
