import Card from "./Card/Card";
import postsData from "../data/postsData";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="row row-cols-2 g-3">
            {postsData
              .filter((post) => post.published == true)
              .map((post) => {
                <Card
                  title={post.title}
                  image={post.image}
                  description={post.content}
                  tags={post.tags}
                  published={post.published}
                />;
              })}
          </div>
        </div>
      </div>
    </main>
  );
}
