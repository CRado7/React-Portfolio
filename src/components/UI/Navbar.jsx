export default function Nav({ links }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar">
          <h1 id="nav-name">Chritopher Ferraro</h1>{links.map((link) => link)}
          </ul>
        </div>
    </nav>
  );
}
