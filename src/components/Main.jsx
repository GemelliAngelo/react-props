import Card from "./Card/Card";
import postsData from "../data/postsData";

export default function Main() {
  return (
    <main>
      <div className="container">
        <div className="row g-5 mb-4 justify-content-center">
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
