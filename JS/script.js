const placesList = document.querySelector('.places-list'); // Контейнер с карточками
const userInfoButton = document.querySelector('.user-info__button'); // Кнопка открытия попапа добавления карточки

// Элементы профиля пользователя
const editProfileButton = document.querySelector('.user-info__edit-profile');
const userName = document.querySelector('.user-info__name');
const userJob = document.querySelector('.user-info__job');

// Попап с увеличенной картинкой
const bigImageContent = document.querySelector('.big-image');
const bigImageClose = document.querySelector('.big-image__close');

// Попап добавления карточки
const popupClose = document.querySelector('.popup__close');
const popUp = document.querySelector('.popup');
const popupButton = document.querySelector('.popup__button');
const popupForm = document.forms.new;
const formCardName = popupForm.elements.name;
const formPictureLink = popupForm.elements.link;

// Попап редактирования профиля пользователя
const editProfileClose = document.querySelector('.edit-profile__close');
const editProfile = document.querySelector('.edit-profile');
const profileButton = document.querySelector('.edit-profile__button');
const editProfileForm = document.forms.profile;
const formUserName = editProfileForm.elements.name;
const formAboutUser = editProfileForm.elements.about;




// Увеличение картинки
function zoomImage(event) {
  const target = event.target;
  if (target.classList.contains('place-card__image')) {
  const target = event.target;
  const bigImageContent = document.querySelector('.big-image');
  const bigImageContainer = document.querySelector('.big-image__container');
  const imgUrl = target.style.backgroundImage.slice(5, (target.style.backgroundImage.length - 2));
  const bigImage = document.createElement('img');
  const bigImageClose = document.createElement('img');



  if (bigImageContainer.hasChildNodes()) {
    while (bigImageContainer.firstChild) {
      bigImageContainer.removeChild(bigImageContainer.firstChild);
    }
  };


  bigImage.classList.add('big-image__image');
  bigImageClose.classList.add('big-image__close');

  bigImageContainer.appendChild(bigImage);
  bigImageContainer.appendChild(bigImageClose);

  bigImage.setAttribute('src', `${imgUrl}`);
  bigImage.setAttribute('alt', '');

  bigImageClose.setAttribute('src', './images/close.svg');
  bigImageClose.setAttribute('alt', '');

  if (bigImageContent.classList.contains('big-image_is-closed')) {
    bigImageContent.classList.toggle('big-image_is-closed')
  }


  bigImageClose.addEventListener('click', () => {
    bigImageContent.classList.toggle('big-image_is-closed')
  });
 }
}


const newcard = (name, image) => new Card(name, image, placesList);
const zoom = new PopUp (document.querySelector('.popup'), document.querySelector('.user-info__button'), document.querySelector('.popup__close'));
const zoompro = new PopUp (document.querySelector('.edit-profile'), document.querySelector('.user-info__edit-profile'), document.querySelector('.edit-profile__close'));
const cardlist = new CardList(document.querySelector('.places-list'), initialCards, newcard);
const UserInf = new UserInfo ('Jaques Causteau', 'Sailor, Researcher');
const FormVal = new FormValidator (document.forms.profile);
const ValNew = new FormValidator (document.forms.new);

UserInf.setUserInfo(userName.textContent, userJob.textContent);

cardlist.container.addEventListener('click', (event) => zoomImage(event));

// Отправка данных формы добавления карточки
popupForm.addEventListener('submit', function(event) {
  event.preventDefault();
  cardlist.addCard(`${formCardName.value}`, `url(${formPictureLink.value})`);
  zoom.close();
});

zoom.openbt.addEventListener('click', function() {
  formCardName.value = '';
  formPictureLink.value = '';
  document.querySelector('.popup__button').setAttribute('disabled', true);
} )

zoompro.openbt.addEventListener('click', function() {
  formUserName.value = UserInf.name;
  formAboutUser.value = UserInf.job;
} )

// Отправка данных формы редактирования профиля пользователя
editProfileForm.addEventListener('submit', function(event) {
  event.preventDefault();
  UserInf.setUserInfo(`${formUserName.value}`, `${formAboutUser.value}`);
  UserInf.updateUserInfo(userName, userJob);
  editProfile.classList.toggle('popup_is-opened');
});




/*****************************************************************************************************************************************************
 *
 * REVIEW по заданию 8. Резюме.
 *
 *
 * Что случилось с проектом? Над 7-м заданием мы хорошо с Вами поработали и там всё функционировало - в форму профиля при её открытии
 * переносились данные о профиле из свойств textContent элементов страницы, форма профиля имела валидный вид при открытии, новая карточка
 * добавлялась, большое фото открывалось, сечас этого ничего нет.
 *
 * Это необходимо исправить.
 *
 * Даю следующие рекомендации, как это сделать.
 *
 * 1. Каким должен быть класс UserInfo.
 *
 * Параметры в конструктор этого класса можно не вводить. В классе должно быть два метода setUserInfo и updateUserInfo.
 *
 * У метода setUserInfo должно быть 2 параметра: setUserInfo(name, job). Задача этого метода получать актуальную информацию
 * о пользователе через свои параметры и сохранять её в свойствах класса, чтобы эту информацию можно было потом использовать
 * когда нужно и где нужно. То есть код этого метода в моём варианте должен быть таким:
 * setUserInfo(name, job) {
      this.name = name;
      this.job = job;
   }
 * И больше в этом методе ничего быть не должно.
   Откуда же setUserInfo должен брать эту информацию, то есть где его надо вызывать?
   а) setUserInfo надо вызывать при загрузке страницы и передать в его параметры значения из свойств
   textContent элементов страницы, где содержится информация о профиле.
   б)setUserInfo надо вызывать при сабмите формы профиля, чтобы передать в его параметры значения полей input
   формы профиля.


   У метода updateUserInfo также должно быть 2 параметра, например: updateUserInfo(nameElementContent, jobElementContent).
   Задача этого метода вводить актуальную информацию о пользователе, которая сохранена в свойствах класса, в содержимое элементов, которое ему
   передаётся в качестве параметров когда это нужно.
   То есть код этого метода в моём варианте должен быть таким:
 * updateUserInfo(nameElementContent, jobElementContent) {
      nameElementContent = this.name;
      jobElementContent = this.job;
   }
 * И больше в этом методе ничего быть не должно.
 * Где этот метод надо вызывать?
 * а) updateUserInfo надо вызывать при сабмите формы профиля после вызова setUserInfo и
 * передавать в его параметры как аргументы свойства textContent элементов страницы, где содержится информация о профиле.
   То есть вызов в этом случае должен выглядеть примерно так:
   updateUserInfo((элемент страницы, содержащий имя).textContent, (элемент страницы, содержащий деятельность).textContent)

   б) в слушателе открытия формы профиля и передавать в его параметры как аргументы свойства value полей ввода формы профиля.
   То есть вызов в этом случае должен выглядеть примерно так:
   updateUserInfo((поле ввода имени).value, (поле ввода деятельности).value).
 *
 *
 * 2. Обработчики событий добавляйте  на элементы в script.js.
 * То есть слушатели событий submit форм, открытия и закрытия форм, открытия и закрытия большого фото "навесьте" в script.js и вызывайте в
 * них нужные методы классов с экземплярами этих классов, аналогично тому, как подробно объяснена эта процедура в отношении методов класса UserInfo.
 * Для большого фото можно создать отдельный класс, где создать вспомогательные методы для этого фото.
 *
 * 3. Общие замечания по структуре классов.
 * Не обращайтесь в классах к глобальным константам, которые определены в script.js - передавайте их в классы как параметры,
 * когда это нужно.
 * Не осуществляйте в классах поиск элементов в  document с помощью querySelector, осуществляйте поиск этих элементов в script.js
 * и так же передавайте эти элементы в классы как параметры, когда это нужно.
 * Не создавайте экземпляры одних классов в других (Вы и не создаёте и это хорошо), все экземпляры классов создавайте в script.js.
 *
 *4. Все файлы с расширением js нужно поместить в отдельную папку в корне проекта.


  5. Необходимо отладить проект, чтобы работала вся функциональность, требуемая по проекту.

  5. Сделайте эти 5 пунктов, далее, возможно, будут ещё замечания, которые надо будет выполнить.


  ____________________________________________________________________________________________________________________________________________________

  REVIEW2 по заданию 8. Резюме2.

  Что сделано.
  Функционал большого фото стал работать.
  В форму профиля переносится информация со страницы при её открытии.
  Карточка добавляется.

  Что необходимо исправить.
  1. Не происходит никакой валидации при добавлении новой карточки - карточку можно добавить при пустых полях input формы.
  Сделайте, хотя бы минимальную валидацию формы ввода новой карточки: нужно сделать так, чтобы кнопка сабмита этой формы была заблокирована,
  если хотя бы одно из полей форм пустое, и была разблокирована, если в обоих полях есть какая-то информация, то есть оба поля непустые.

  2.Устранить зависимость класса Card от существующей размётки и убрать лишние инструкции (подробные комментарии в модуле класса Card).



*/