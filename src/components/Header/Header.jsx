import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./header.scss";
export const Header = (props) => {
  const [open, setOpen] = useState(false);

  const onSetOpen = (e) => {
    if (open) {
      e.preventDefault();
      setOpen(false);
    } else if (e.target.innerHTML === "E-BIKES") {
      e.preventDefault();
      setOpen(true);
    }
  };

  return (
    <header className={`header_app`}>
      <nav
        className={`header_app-nav   ${open ? "header_app-nav active" : ""} `}
      >
        {props.route.map((item) => (
          <NavLink
            key={item.path}
            style={({ isActive }) =>
              isActive ? { color: "darkgrey", borderBottom: "darkgrey" } : {}
            }
            to={item.path}
            onClick={onSetOpen}
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className={`bike-select ${open ? `bike-select active_bike` : ""}`}>
        {props.data.map((item, i) => (
          <Link to={item.to} onClick={() => setOpen(false)} className={`single-bike bike-${i + 1}`} key={i}>
            <h3>{item.name}</h3>
            <span>{item.title}</span>
            <img src={item.img} alt="bike" />
          </Link>
        ))}
      </div>
    </header>
  );
};
