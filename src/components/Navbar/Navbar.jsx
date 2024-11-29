export default function Navbar({ tags }) {
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          {tags.map((tag) => tag)}
        </a>
      </div>
    </nav>
  );
}
