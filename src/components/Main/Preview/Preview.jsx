import "./preview.scss";
import { HashLink } from "react-router-hash-link";
import arrow from "../../../assets/main-page/arrow.png";

export const Preview = (props) => {
  const {video, title} = props.video

  return (
    <div className="video_preview">
      <div className="video_preview-info">
        <h2>{title}</h2>
        <span className="arrow__down">
          <HashLink to="#cow4">
            <img src={arrow} alt="arrow" />
          </HashLink>
        </span>
      </div>
      <video src={video} autoPlay muted></video>
    </div>
  );
};
