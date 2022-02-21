class FormValidator {
    constructor(form) {
      this.checkInputValidity = this.checkInputValidity.bind(this);
      this.setSubmitButtonState =this.setSubmitButtonState.bind(this);
      this.form = form;
      this.setEventListeners(this.form);

     }



    checkInputValidity(element, errorElement) {
      if (!element.checkValidity()) {
        if (element.validity.valueMissing) {
          errorElement.textContent = 'Это обязательное поле';
          errorElement.classList.add('error-message_active');
          return;
        }
        if (element.validity.tooShort) {
          errorElement.textContent = 'Должно быть от 2 до 30 символов';
          errorElement.classList.add('error-message_active');
          return;
        }
      }
        errorElement.textContent = '';
    }


    setSubmitButtonState(inputs, element) {
      let buttonState = true;

      inputs.forEach((element) => {
    if (element.id !== submit.id) {

      if (!element.checkValidity()){
        buttonState = false;        
       };}
      });


       if (buttonState === true) {
        element.removeAttribute('disabled');}
        else {
          element.setAttribute('disabled', true);
        }

       }


    setEventListeners(form) {

      const inputs = Array.from(form.elements);

     inputs.forEach((element) => {
    if (!element.classList.contains('button')) {
      element.addEventListener('input', (event) => {this.checkInputValidity(event.target, document.querySelector(`#error-${event.target.id}`));});
    }
    else {
    form.addEventListener('input', () => {this.setSubmitButtonState(inputs, element)});
    }
  });
    }


}






