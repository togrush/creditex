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




const pageBody = document.querySelector('.page__body');
const mobileMenu = document.querySelector('.mobile-header__menu');

// Создаем наблюдатель за изменениями атрибутов
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      // Проверяем, изменился ли display на block
      if (mobileMenu.style.display === 'flex') {
        pageBody.style.overflow = 'hidden';
      } else {
        pageBody.style.overflow = ''; // Возвращаем значение по умолчанию
      }
    }
  }
});

// Начинаем наблюдение за изменениями атрибута style
observer.observe(mobileMenu, {
  attributes: true, // отслеживаем изменения атрибутов
});
