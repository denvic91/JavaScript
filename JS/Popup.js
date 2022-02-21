class PopUp {
    constructor(element, openbtn, closebtn) {
    this.container = element;
    this.openbt = openbtn;
    this.closebt = closebtn;
    this.open  = this.open.bind(this);
    this.close  = this.close.bind(this);
    this.openbt.addEventListener('click', this.open);
    this.closebt .addEventListener('click', this.close);
  }


  open() {
    this.container.classList.add('popup_is-opened');
  }


  close() {
    this.container.classList.remove('popup_is-opened');
  }

}























  