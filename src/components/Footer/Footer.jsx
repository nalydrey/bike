import "./footer.scss";
import { Link } from "react-router-dom";

export const Footer = (props) => {
  const { links } = props.data;
  return (
    <footer>
      <h2>COWBOY*</h2>
      <nav>
        {links.map((item) => (
          <Link key={item.name} to={item.to}>{item.name}</Link>
        ))}
      </nav>

    </footer>
  );
};
