import "./bikePreview.scss";

export const BikePreview = (props) => {
  const { video, title, span } = props.data;
  return (
    <div className="bike4">
        <video src={video} autoPlay muted></video>
      <div className="bike4-title">
        <span>{span}</span>
        <h2>{title}</h2>
      </div>
    </div>
  );
};
