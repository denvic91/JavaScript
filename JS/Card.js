class Card {
  constructor(name, image) {
      this.place = 'place';
      this.placeCard = this.create(name, image);
      this.placeCard.querySelector('.place-card__like-icon').addEventListener('click', (event) => {this.like(event)});
      this.placeCard.querySelector('.place-card__delete-icon').addEventListener('click', (event) => {this.remove(event)});
    }


    create(name, image) {
      const placeCard = document.createElement('div');
      const placeCardImage = document.createElement('div');
      const placeCardDeleteIcon = document.createElement('button');
      const placeCardDescription = document.createElement('div');
      const placeCardName = document.createElement('h4');
      const placeCardLikeIcon = document.createElement('button');

    /**REVIEW2 по заданию 8. Надо исправить. Уберите инструкцию const placesList = document.querySelector('.places-list'). В соответствии с двумя
     * требованиями, приведёнными ниже, которые Вы должны будете выполнить, эта инструкция не будет нужна.
     *
    */
     
      placeCard.classList.add('place-card');
      placeCardImage.classList.add('place-card__image');
      placeCardDeleteIcon.classList.add('place-card__delete-icon');
      placeCardDescription.classList.add('place-card__description');
      placeCardName.classList.add('place-card__name');
      placeCardLikeIcon.classList.add('place-card__like-icon');

      placeCardName.textContent = name;
      placeCardImage.style.backgroundImage = image;

    /**REVIEW2 по заданию 8. Надо исправить. Уберите инструкцию placesList.appendChild(placeCard). В классе Card создаётся только шаблон карточки placeCard,
     * который Вы и возвращаете из этого метода, реальная карточка добавляется методами  класса CardList.
    */
      
      placeCard.appendChild(placeCardImage);
      placeCard.appendChild(placeCardDescription);
      placeCardImage.appendChild(placeCardDeleteIcon);
      placeCardDescription.appendChild(placeCardName);
      placeCardDescription.appendChild(placeCardLikeIcon);

      return placeCard;
      // Лайк карточки

  }

    remove(event) {
      /**REVIEW2 по заданию 8. Надо исправить. Недопустимо, чтобы класс Card, который ответственен всего лишь за создание шаблона карточки и за
       * объявление кода методов карточки, зависел от существующей на странице размётки, так как то, что создаёт класс Card должно иметь возможность
       * быть применимым к любой размётке и в любом проекте. Поэтому замените инструкцию
       * document.querySelector('.places-list').removeChild(event.target.closest('.place-card')) на event.target.closest('.place-card').remove() */

      event.target.closest('.place-card').remove();

    }

    /**REVIEW2 по заданию 8. Надо лучше. Если Вы используете объект event в коде метода, его надо ввести в качестве параметра, иначе в некоторых случаях
     * интерпретатор js может принять event за свойство глобального объекта window, а не за объект рассматриваемого события. Это же относится и к методу
     * remove.
    */
    like(event) {
      const target = event.target;
      console.log(target);
      target.classList.toggle('place-card__like-icon_liked');
    }


}

