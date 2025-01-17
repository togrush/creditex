const mobileHeaderMenuIcon = document.querySelector('.mobile-header__menu-icon');
const mobileHeader = document.querySelector('.mobile-header__menu');

function isClickInsideElement(event, element) {
  let container = event.target;
  while (container != null) {
    if (container === element) {
      return true;
    }
    container = container.parentNode;
  }
  return false;
}

document.addEventListener('click', (event) => {
  if (!isClickInsideElement(event, mobileHeader) && mobileHeaderMenuIcon.style.transform !== '') {
    mobileHeaderMenuIcon.style.transform = '';
    mobileHeader.style.display = 'none';
  }
}, false);

mobileHeaderMenuIcon.addEventListener('click', (event) => {
  event.stopPropagation();
  if (mobileHeaderMenuIcon.style.transform === '') {
    mobileHeaderMenuIcon.style.transform = 'rotate(90deg)';
    mobileHeader.style.display = 'flex';
  } else {
    mobileHeaderMenuIcon.style.transform = '';
    mobileHeader.style.display = 'none';
  }
});

export function markActiveHeaderLink() {
  const links = document.querySelectorAll('.mobile-header__main-menu-item-link');
  const headerTitle = document.querySelector('.mobile-header h4');

  if (window.location.pathname === '/') {
    links[0].classList.add('header__main-menu-item-link_this-page');
    headerTitle.textContent = 'Creditex.Broker';
    return;
  }

  if (window.location.pathname === '/economicActivity.html') {
    links[0].classList.add('header__main-menu-item-link_this-page');
    headerTitle.textContent = 'ВЭД';
    return;
  }

  for (let i = 1; i < links.length; i++) {
    if (window.location.pathname.includes(links[i].dataset.pathname)) {
      links[i].classList.add('header__main-menu-item-link_this-page');
      headerTitle.textContent = links[i].textContent.trim();
      break;
    }
  }
}

markActiveHeaderLink();
