export const getHeader = () => {
  const header = document.getElementById("header");
  const pageHierarchy = document.querySelector("body");
  if (header != null && pageHierarchy?.classList.contains("first")) {
    header.innerHTML = `
    <div class="header-inner">
  <h1 class="header__logo">
    <a href="./index.html">LOGO</a>
  </h1>
  <nav class="g-nav">
    <ul class="g-nav__list">
      <li class="g-nav__item">
        <a href="./">Home</a>
      </li>
      <li class="g-nav__item">
        <a href="./about/">About</a>
      </li>
      <li class="g-nav__item">
        <a href="./service/">Service</a>
      </li>
      <li class="g-nav__item">
        <a href="./contact/">Contact</a>
      </li>
    </ul>
  </nav>
</div>`;
  } else if (header != null && pageHierarchy?.classList.contains("second")) {
    header.innerHTML = `
    <div class="header-inner">
  <h1 class="header__logo">
    <a href="../index.html">LOGO</a>
  </h1>
  <nav class="g-nav">
    <ul class="g-nav__list">
      <li class="g-nav__item">
        <a href="../index.html">Home</a>
      </li>
      <li class="g-nav__item">
        <a href="../about/">About</a>
      </li>
      <li class="g-nav__item">
        <a href="../service/">Service</a>
      </li>
      <li class="g-nav__item">
        <a href="../contact/">Contact</a>
      </li>
    </ul>
  </nav>
</div>`;
  } else if (header != null && pageHierarchy?.classList.contains("third")) {
    header.innerHTML = `
    <div class="header-inner">
  <h1 class="header__logo">
    <a href="../../index.html">LOGO</a>
  </h1>
  <nav class="g-nav">
    <ul class="g-nav__list">
      <li class="g-nav__item">
        <a href="../../index.html">Home</a>
      </li>
      <li class="g-nav__item">
        <a href="../../about/">About</a>
      </li>
      <li class="g-nav__item">
        <a href="../../service/">Service</a>
      </li>
      <li class="g-nav__item">
        <a href="../../contact/">Contact</a>
      </li>
    </ul>
  </nav>
</div>`;
  }
};
