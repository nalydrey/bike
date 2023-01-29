import "./4work.scss";
import { Link } from "react-router-dom";

export const ForWork = (props) => {
  const { title, img, span } = props.data;
  return (
    <div className="for_work">
      <div className="for_work-img">
        <img src={img} alt="for work" />
      </div>
      <div className="for_work-info">
        <h2>{title}</h2>
        <span>{span}</span>
        <Link to={'/work'}>Learn more</Link>
      </div>
    </div>
  );
};
