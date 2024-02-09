# Creditex

Сервис привлечения финансовых продуктов для бизнеса

Freelance project

---

1. [Список страниц](#a-page-list-список-страниц-a)
2. [Клонирование репозитория](#a-namerepo-clone-клонирование-репозитория-a)
3. [Версионность](#a-nameversions-версионность-a)
4. [Работа с npm](#a-namenpmcommands-работа-с-npm-a)
5. [Файловая структура](#a-namefile-structure-файловая-структура-a)
6. [Alias'ы](#a-namealias-aliasы-a)
7. [Советы и правила](#a-nametips-and-rules-советы-и-правила-a)

---

## <a name='page-list'>Список страниц</a>

Публикация из ветки gh-pages.

### Публичные страницы:

* Главная страница - https://hellsgor.github.io/creditex/;
* Предпринимателям - https://hellsgor.github.io/creditex/entrepreneur.html;
* Партнёрам - https://hellsgor.github.io/creditex/partners.html.

### Вход в ЛК:

* Авторизация - https://hellsgor.github.io/creditex/authorization.html;
* Регистрация - https://hellsgor.github.io/creditex/registration.html;
* Подтверждение по SMS - https://hellsgor.github.io/creditex/confirmation.html;
* Запрос восстановления
  пароля - https://hellsgor.github.io/creditex/restorePasswordPhoneNumberRequest.html;
* Восстановление
  пароля - https://hellsgor.github.io/creditex/recoveryPassword.html.

### Личный кабинет:

* Пустой ЛК - https://hellsgor.github.io/creditex/emptyLk.html;
* Брокер, сделки - https://hellsgor.github.io/creditex/brokerLk.html;
* Персональные данные
  пользователя - https://hellsgor.github.io/creditex/personalData.html;
* Новая заявка - https://hellsgor.github.io/creditex/newApplication.html;
* Новый пароль - https://hellsgor.github.io/creditex/newPassword.html.

### Служебные страницы:

* UI-kit - https://hellsgor.github.io/creditex/uiKit.html.

---

## <a name='repo-clone'>Клонирование репозитория</a>

    git clone -b main git@github.com:hellsgor/creditex.git

## <a name='versions'>Версионность</a>

- node js - v.18.7.0
- npm - 8.15.0

## <a name='npmcommands'>Работа с npm</a>

- установка пакетов - `npm i`;
- запуск dev-сервера - `npm start`;
- сборка билда dev - `npm run dev`;
- сборка билда prod - `npm run build`;
- predeploy - `npm run build`,
- deploy - `gh-pages -d build`;

## <a name='file-structure'>Файловая структура</a>

- src/
  - assets/
    - favicon/ - фавиконки;
    - fonts/ - шрифты;
    - icons/ - иконки;
    - image/ - изображения;
    - json/ - для json-файлов;
    - pug/
      - mixins - для pug-миксинов
    - styles/ - основные файлы стилей;
  - components/ - компоненты;
    - common/ - компоненты обязательные для всех страниц;
  - layouts/ - шаблоны страниц;
  - libs/ - для хранения библиотек;
  - pages/ - страницы;
    - main/ - файлы главной страницы;
    - ui-kit/ - файлы страницы UI-Kit;
  - ui-kit/ - микро-компоненты (кнопки, чек-боксы, инпуты и пр.);
  - utils/ - части js-кода используемые в проекте вынесены в отдельную папку,
    например, отправка или валидация полей формы и пр.

## <a name='alias'>Alias'ы</a>

- Img - './src/assets/image/';
- Icons - './src/assets/icons/';
- Fonts - './src/assets/fonts/';
- Components - './src/components/';
- Layouts - './src/layouts/';
- UIKit - './src/ui-kit/';
- Styles - './src/assets/styles/';
- Libs - './src/libs/' (на момент публикации не используется);
- NodeModules - './node_modules/';
- Utils - './src/utils/';

## <a name='tips-and-rules'>Советы и правила</a>

- файлы ".gitkeep" следует удалить если в папке-родителе появятся файлы проекта.
  Файлы ".gitkeep" требуются исключительно для сохранения файловой структуры в
  git;
- каждой новой странице после копирования кода pug и scss-файлов:
  - в pug изменить:
    - значение переменной `header` если это необходимо (хедер нужен /не нужен);
    - значение переменной `footer` если это необходимо (футер нужен /не нужен);
    - значение переменной `pageClassName` (назначить правильный класс
      тегу <main> для управления страницей);
