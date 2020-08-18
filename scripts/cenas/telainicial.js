class TelaInicial {
    constructor(){
    
    }
    
    draw(){
      this._imagemFundo();
      this._texto();
      this._botao();
    }
    
    _imagemFundo(){
      image(imagemTelaInicial, 0, 0, width, height);
    }
    
    _texto(){
      textFont(fonteTelaInicial);
      textAlign(RIGHT);
      textSize(60);
      text('As aventuras de', 570, 250);
      textSize(120);
      text('Hipsta', 570, 330);
    }
    
    _botao(){
      botao.y = 430;
      botao.draw();
    }
  }