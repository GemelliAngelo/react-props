import placeHolder from "../../assets/img/placeholder.png";

export default function Card({ title, image, description }) {
  return (
    <div className="col">
      <div className="card">
        <img src={image || placeHolder} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title h4 py-2">{title}</h2>
          <p className="card-text">{description}</p>
          <button type="button" className="btn btn-warning py-2 px-3 mt-3">
            LEGGI DI PIÙ
          </button>
        </div>
      </div>
    </div>
  );
}
