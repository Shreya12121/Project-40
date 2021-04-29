class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.button2 = createButton('reset');
    this.greeting = createElement('h2');
  }
  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()
  }

  display(){
    this.input.position(width/2-100,height/2-100)
    this.input.style('font-size', '30px');
    this.input.style('color','pink')
    this.button.position(width/2,height/2)
    this.button.style('font-size', '20px');
    this.button.style('color','green')
    this.button2.position(width-200,50)
    this.button2.style('font-size', '50px');
    this.button2.style('color','orange')


    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(130, 100);
    });
    this.button2.mousePressed(()=>{
    player.updateCount(0);
    game.update(0);
    var ref = database.ref("/").update(
     { players : null }
    )
    })
  }
}