class Pontuacao {
    constructor (){
      
      this.pontos = 0;
    }
    
    exibe(){
      fill('rgb(13,22,49)');
      textSize(50);
      text(parseInt(this.pontos), width -55, 60); 
    }
    
    pontuar(){
      this.pontos = this.pontos + 0.2;
    }
  }