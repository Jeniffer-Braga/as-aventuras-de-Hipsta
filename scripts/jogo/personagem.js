class Personagem extends Animacao {
    constructor(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite){
      super(matriz, imagem, x, variacaoY, largura, altura, larguraSprite, alturaSprite)
      
      this.variacaoY = variacaoY;
      this.yInicial = height - this.variacaoY; 
      this.y = this.yInicial;
      this.gravidade = 3;
      this.velocidadePulo = 0; 
      this.alturaPulo = -22; 
      this.pulos = 0; 
      this.imune = false;
  }
    
    pula(){
      if(this.pulos < 3){
        this.velocidadePulo = this.alturaPulo;
        this.pulos++;
      }
  }
    
    andaAtras(){
      this.x = this.x - 25;
    }
    
    andaFrente(){
      this.x = this.x + 25;
    }
    
    aplicaGravidade(){
      this.y = this.y + this.velocidadePulo;
      this.velocidadePulo = this.velocidadePulo + this.gravidade; 
      
      if(this.y > this.yInicial){
        this.y = this.yInicial; 
        this.pulos = 0;
      }
    }
    
    ficaImune(){
      this.imune = true;
      setTimeout(() => {
        this.imune = false
      }, 1000); 
    }
    
    colide(inimigo){
      if(this.imune){
        return false;
      }
        const precisao = .7
        const colisao = collideRectRect(
        this.x, 
        this.y, 
        this.largura * precisao,
        this.altura * precisao,
        inimigo.x,
        inimigo.y,
        inimigo.largura * precisao,
        inimigo.altura * precisao
        )
        return colisao;
      }
  }
  