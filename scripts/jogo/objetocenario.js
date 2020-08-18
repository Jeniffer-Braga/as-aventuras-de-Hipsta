class ObjetoCenario extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade, delay){
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite, velocidade);
      
      this.velocidade = velocidade;
      this.delay = delay; 
      this.x = width + this.delay;
    }
    
    move(){
       this.x = this.x - this.velocidade;
       
       if(this.x < -this.largura - this.delay){
         this.x = width;
       }
     }
  }