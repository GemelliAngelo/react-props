import Card from "./Card/Card";
import postsData from "../data/postsData";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="row row-cols-2">
            <Card />
          </div>
        </div>
      </div>
    </main>
  );
}
