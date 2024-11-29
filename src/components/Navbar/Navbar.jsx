export default function Navbar({ tags }) {
  return (
    <nav class="navbar navbar-expand-lg bg-secondary">
      <div class="container-fluid">
        <span class="navbar-brand fw-bold bg-warning p-2">TAGS</span>

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link" href="#">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              Link
            </a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">
              Disabled
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
