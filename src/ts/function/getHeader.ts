export const getHeader = () => {
  const header = document.getElementById("header");
  if (header != null) {
    header.innerHTML = `
    <div class="header-inner">
  <h1 class="header__logo">
    <a href="">LOGO</a>
  </h1>
  <nav class="g-nav">
    <ul class="g-nav__list">
      <li class="g-nav__item">
        <a href="">Home</a>
      </li>
      <li class="g-nav__item">
        <a href="">About</a>
      </li>
      <li class="g-nav__item">
        <a href="">Service</a>
      </li>
      <li class="g-nav__item">
        <a href="">Contact</a>
      </li>
    </ul>
  </nav>
</div>`;
  }
};
