import "./cowboyST.scss";
import { Link } from "react-router-dom";
export const CowboyST = (props) => {
  const { img, title, span } = props.data;

  return (
    <div className="cowst">
      <img src={img} alt="bike" />
      <div className="cowst-info">
        <h2>{title}</h2>
        <span>{span}</span>
        <Link to={'/bike4st'}>Explore</Link>
      </div>
    </div>
  );
};
