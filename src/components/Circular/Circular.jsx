import "./circular.scss";
import { Link } from "react-router-dom";
export const Circular = (props) => {
  const { preview, items } = props.data;

  console.log(props);

  return (
    <div className="circular-wrapper">
      <div>
        <div className="circular-preview">
          <div className="circular-preview-items">
            {preview.map((item) => (
              <div key={item.title} className="circular-preview-items-item">
                <h3>{item.title}</h3>
                <span>{item.span}</span>
              </div>
            ))}
          </div>
          <div className="image-circular"></div>
        </div>
      </div>

        <h2>Circular C4</h2>
      <div className="bikes-list">
        {items.c4.map((item) => (
          <div key={item.name} className={"bike-item"}>
            <div className="bike-descr">
              <h3>{item.name}</h3>
              <h5>{item.price}</h5>
              <Link to={item.to}>Order</Link>
            </div>
            <div className="bike-img">

            <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
      <h2>Circular C4 ST</h2>
      <div className="bikes-list">
        {items.c4st.map((item) => (
          <div key={item.name} className={"bike-item"}>
            <div className="bike-descr">
              <h3>{item.name}</h3>
              <h5>{item.price}</h5>
              <Link to={item.to}>Order</Link>
            </div>
            <div className="bike-img">

            <img src={item.img} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
