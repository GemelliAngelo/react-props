import Navbar from "./Navbar/Navbar";
import postsData from "../data/postsData";

export default function Header() {
  return (
    <header className="text-center p-3">
      <div className="container">
        <h1>Il Mio Blog</h1>
      </div>
      {postsData.map((post) => (
        <Navbar tags={post.tags} />
      ))}
    </header>
  );
}
