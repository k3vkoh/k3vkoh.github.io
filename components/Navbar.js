export default function renderNavbar() {
  const navbar = document.querySelector("nav");
  navbar.innerHTML = `<ul>
        <li><a href="#about">About</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>`;
}