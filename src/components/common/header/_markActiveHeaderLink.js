export function markActiveHeaderLink() {
  const links = document.querySelectorAll('.header__main-menu-item-link');

  if (window.location.pathname === '/') {
    links[0].classList.add('header__main-menu-item-link_this-page');
    return;
  }

  for (let i = 1; i <= links.length; i++) {
    if (window.location.pathname.includes(links[i]?.dataset?.pathname)) {
      links[i].classList.add('header__main-menu-item-link_this-page');
      break;
    }
  }
}
