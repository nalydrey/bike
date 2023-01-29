import "./sell.scss";
import main from "../../assets/sell/sell.webp";
import { useState } from "react";

export const Sell = (props) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState({});

  const onItemSelect = (item) => {
    setOpen(true);
    setItem(item);
  };

  const onSetClose = (e) => {
    if (e.target.className === "full-item-wrapper") setOpen(false);
    return;
  };

  return (
    <div className="sell">
      <div className="preview-sell">
        <div className="sell-info">
          <span>Accessories</span>
          <h2>Gear up for the road</h2>
        </div>
        <img src={main} alt="main" />
      </div>

      <div className="shop-items">
        {props.data.map((item) => (
          <div
            className="shop-item"
            key={item.name}
            onClick={() => onItemSelect(item)}
          >
            <img src={item.img} alt="shop item" />
            <div className="item-descr">
              <h6>{item.name}</h6>
              <span>{item.price}</span>
            </div>
          </div>
        ))}
      </div>

      {open ? <ItemView data={item} onClick={(e) => onSetClose(e)} /> : null}
    </div>
  );
};

const ItemView = (props) => {
  const { img, name, descr, price } = props.data;

  return (
    <div className="full-item-wrapper" onClick={props.onClick}>
      <div className="full-item">
        <img src={img} alt="item" />
        <div className="item-view">
          <h4>{name}</h4>
          <p>{descr}</p>
          <span>Price: {price}</span>
          <button>Order</button>
        </div>
      </div>
    </div>
  );
};
