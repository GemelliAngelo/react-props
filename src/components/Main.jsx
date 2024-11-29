import Card from "./Card/Card";
import postsData from "../data/postsData";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row row-cols-2 g-3">
          {postsData
            .filter((post) => post.published === true)
            .map((post) => (
              <Card
                key={post.id}
                title={post.title}
                image={post.image}
                description={post.content}
              />
            ))}
        </div>
      </div>
    </main>
  );
}
