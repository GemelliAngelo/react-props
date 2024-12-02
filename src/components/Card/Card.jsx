import placeHolder from "../../assets/img/placeholder.png";
import Button from "../Button/Button";

export default function Card({ title, image, description }) {
  return (
    <div className="col-7">
      <div className="card">
        <img src={image || placeHolder} className="card-img-top" />
        <div className="card-body">
          {title && <h2 className="card-title h4 py-2">{title}</h2>}
          {description && <p className="card-text">{description}</p>}
          <Button />
        </div>
      </div>
    </div>
  );
}
