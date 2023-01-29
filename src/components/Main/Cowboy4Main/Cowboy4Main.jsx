import "./cowboy4main.scss";
import { Link } from "react-router-dom";

export const Cowboy4Main = (props) => {
  console.log(props);
  const { img, title, span } = props.data;

  return (
    <div className="cow4" id='cow4'>
      <img src={img} alt="bike" />
      <div className="cow4-info">
        <h2>{title}</h2>
        <span>{span}</span>
        <Link to={'/bike4'}>Explore</Link>
      </div>
    </div>
  );
};
