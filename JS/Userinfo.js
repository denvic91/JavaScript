class UserInfo {
    constructor(name, job) {
      this.name = name;
      this.job = job;      
    }


    setUserInfo(nameo, jobo) {  
      this.name = nameo;
      this.job = jobo;          
    }


    // Добавления данных в профиль пользователя
    updateUserInfo(namecon, jobcontent){      
      namecon.textContent = this.name;
      jobcontent.textContent = this.job;
     
    }
  
  } 





  

  // Показать/спрятать попап редактирования профиля пользователя
   /* function toggleEditProfile() {
  
    formUserName.value = userName.textContent;
    formAboutUser.value = userJob.textContent;
  
    const errorName = document.querySelector('#error-name');
    const errorJob = document.querySelector('#error-about');
  
    errorName.textContent = '';
    errorJob.textContent = '';
    profileButton.removeAttribute('disabled');
  /* REVIEW. Надо исправить. Вы совершенно правильно вносите в поля формы информацию со страницы в
  слушателе события 'click'.
  И, поскольку эта информация всегда валидна, при открытии формы профиля пользователю, на форме не должны присутствовать сообщения об ошибках
  и кнопка "Сохранить" должна быть доступна. Сейчас это не выполняется. Например, если удалить всю информацию в
  полях и выйти из формы, нажав на крестик, а затем опять зайти в форму, будут видны сообщения об ошибках и кнопка "Сохранить"
  будет недоступна. Проделайте, пожалуйста, эти действия и убедитесь сами.
  Поэтому, прежде, чем показывать форму пользователю, надо убрать из неё все сообщения об ошибках и сделать доступной
  кнопку "Сохранить". Чтобы это сделать, рекомендация (только рекомендация, Вам нодо будет отладить программу в соответствии с поставленной выше целью):
  1. В месте данного ревью определить элементы показа сообщений об ошибках для формы профиля, например так:
     const errorName = document.querySelector('#error-name');
     const errorJob = document.querySelector('#error-about');
  2. Внести в свойство textContent этих элементов пустую строку:
     errorName.textContent = '';
     errorJob.textContent = '';
  3. Сделать кнопку "Сохранить" доступной, например, так:
     profileButton.removeAttribute('disabled');
  
  4. Инструкцию editProfile.classList.toggle('edit-profile_is-opened'); сделайте последней в коде функции toggleEditProfile.
  
  (отладьте программу).*/
  
/*    setEventListeners(editProfileForm);
    editProfile.classList.toggle('edit-profile_is-opened');
  } 
*/