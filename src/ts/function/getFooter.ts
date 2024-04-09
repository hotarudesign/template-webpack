export const getFooter = () => {
  const footer = document.getElementById("footer");
  if (footer != null) {
    footer.innerHTML = `
      <div class="footer-inner">
  <a href="">LOGO</a>
  <ul class="footer__list">
    <li class="footer__item">
      <a href="">Home</a>
    </li>
    <li class="footer__item">
      <a href="">About</a>
    </li>
    <li class="footer__item">
      <a href="">Service</a>
    </li>
    <li class="footer__item">
      <a href="">Contact</a>
    </li>
  </ul>
</div>`;
  }
};
