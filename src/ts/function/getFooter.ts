export const getFooter = () => {
  const footer = document.getElementById("footer");
  const pageHierarchy = document.querySelector("body");
  if (footer != null && pageHierarchy?.classList.contains("first")) {
    footer.innerHTML = `
      <div class="footer-inner">
  <a href="./index.html">LOGO</a>
  <ul class="footer__list">
    <li class="footer__item">
      <a href="./index.html">Home</a>
    </li>
    <li class="footer__item">
      <a href="../about/">About</a>
    </li>
    <li class="footer__item">
      <a href="../service/">Service</a>
    </li>
    <li class="footer__item">
      <a href="../contact/">Contact</a>
    </li>
  </ul>
</div>`;
  } else if (footer != null && pageHierarchy?.classList.contains("second")) {
    footer.innerHTML = `
      <div class="footer-inner">
  <a href="../index.html">LOGO</a>
  <ul class="footer__list">
    <li class="footer__item">
      <a href="../index.html">Home</a>
    </li>
    <li class="footer__item">
      <a href="../about/">About</a>
    </li>
    <li class="footer__item">
      <a href="../service/">Service</a>
    </li>
    <li class="footer__item">
      <a href="../contact/">Contact</a>
    </li>
  </ul>
</div>`;
  } else if (footer != null && pageHierarchy?.classList.contains("third")) {
    footer.innerHTML = `
      <div class="footer-inner">
  <a href="../../index.html">LOGO</a>
  <ul class="footer__list">
    <li class="footer__item">
      <a href="../../index.html">Home</a>
    </li>
    <li class="footer__item">
      <a href="../../about/">About</a>
    </li>
    <li class="footer__item">
      <a href="../../service/">Service</a>
    </li>
    <li class="footer__item">
      <a href="../../contact/">Contact</a>
    </li>
  </ul>
</div>`;
  }
};
