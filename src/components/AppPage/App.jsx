import "./appPage.scss";
import main from "../../assets/app/main.webp";
import app1 from "../../assets/app/app1.png";
import app2 from "../../assets/app/app2.webp";
import app3 from "../../assets/app/app3.webp";
import app4 from "../../assets/app/app4.webp";

import { Parallax } from "react-scroll-parallax";
export const App = (props) => {
  const { text, connect } = props.data;

  return (
    <div className="app_page">
      <div className="image-app">
        <Parallax className="preview" translateY={[-50, 150]}>
          <span>Cowboy App</span>
          <h2>Tune In</h2>
        </Parallax>
        <img src={main} alt="app" />
      </div>
      <div className="app-info">
        <p>{text}</p>
      </div>
      <div className="parallax">
        <Parallax translateY={[50, -50]} className="my-parallax">
          <img src={app1} alt="app" className="app1" />
        </Parallax>
        <Parallax translateY={[100, -100]} className="my-parallax">
          <img src={app2} alt="app" className="app1" />
        </Parallax>
        <Parallax translateY={[50, -50]} className="my-parallax">
          <img src={app3} alt="app" className="app1" />
        </Parallax>
        <Parallax translateY={[100, -100]} className="my-parallax">
          <img src={app4} alt="app" className="app1" />
        </Parallax>
      </div>

      <div className="app-video">
        <h2>{connect.title}</h2>
        <p>{connect.span}</p>

        <div className="box">
          <Parallax translateY={[100, -100]} className="app-info-img">
            <span>Events</span>
            <img src={app4} alt="app" className="app1" />
          </Parallax>
          <Parallax translateY={[200, -200]} className="app-info-img">
            <span>Total Distance</span>
            <img src={app3} alt="app" className="app1" />
          </Parallax>
          <Parallax translateY={[300, -300]} className="app-info-img">
            <span>Navigation</span>
            <img src={app2} alt="app" className="app1" />
          </Parallax>
          <Parallax translateY={[400, -400]} className="app-info-img">
            <span>Total Charge</span>
            <img src={app1} alt="app" className="app1" />
          </Parallax>
        </div>
      </div>
    </div>
  );
};
