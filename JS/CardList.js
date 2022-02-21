class CardList {
    constructor(container, initCards, newcard) {
      this.container = container;
      this.cards = initCards;
      this.newcard = newcard;
      this.render(this.cards);
      
      
    }
  
    addCard(name, image) {
      
      const cardElem = this.newcard(name, image);
      console.log(cardElem.placeCard);
      console.log(image);
      console.log(name);
      
      this.container.appendChild(cardElem.placeCard);
      
    }
    

      // Стартовый набор карточек
    render(cards) {
      
      for (let i = 1; i <= cards.length; i++) {
        console.log(i);
     this.addCard (cards[i - 1].name, `url(${cards[i - 1].link})`);
     
     


  }
}




  }

 
