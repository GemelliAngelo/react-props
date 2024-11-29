export default function Navbar({ tags }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <span className="navbar-brand fw-bold bg-warning p-2">TAGS</span>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link" href="#">
              {tags[0][0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {tags[0][1]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {tags[1][0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              {tags[2][1]}
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
