export const Work = (props) => {
  const { title, img, span } = props.data;
  return (
    <div className="work">
      <h2>{title}</h2>
      <span>{span}</span>
      <img src={img} alt="work" />
    </div>
  );
};
