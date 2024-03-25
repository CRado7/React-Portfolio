export default function Nav({ links }) {
  return (
    <nav class="navbar">
      <ul class="dropdown-list">
        {links.map((link) => link)}
      </ul>
    </nav>
  );
}
