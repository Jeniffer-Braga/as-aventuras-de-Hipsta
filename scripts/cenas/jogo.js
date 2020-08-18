class Jogo {
    constructor(){
      this.indice = 0;
      this.mapa = fita.mapa; 
    }
    
    setup(){
      cenario = new Cenario(imagemCenario, 3);
      objetoCenario = new ObjetoCenario(matrizObjetoCenario, imagemObjetoCenario, 0, 470, 55, 55, 104, 104, 6, 3000);
      pontuacao = new Pontuacao ();
      vida = new Vida (fita.configuracoes.vidaMaxima, fita.configuracoes.vidaInicial); 
    
      personagem = new Personagem(matrizPersonagem, imagemPersonagem, 205, 205, 110, 135, 220, 270);
      const inimigo = new Inimigo(matrizInimigo, imagemInimigo, width -52, 115, 40, 45, 104, 104, 5);
      const inimigoGrande = new Inimigo(matrizInimigoGrande, imagemInimigoGrande, width -92, 230, 190, 190, 400, 400, 5);
      const inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width -52, 200, 75, 65, 200, 150, 5);
    
      inimigos.push(inimigo);
      inimigos.push(inimigoGrande);
      inimigos.push(inimigoVoador);
    }
    
    comandos(key){
      if(key === 'ArrowUp'){
        personagem.pula();
        somPulo.play();
      }
      if(key === 'ArrowLeft'){
        personagem.andaAtras();
      }
      if(key === 'ArrowRight'){
        personagem.andaFrente();
      }
    }
    
    draw(){
      cenario.exibe();
      cenario.move();
      objetoCenario.exibe();
      objetoCenario.move();
      vida.draw();
      pontuacao.exibe();
      pontuacao.pontuar();
  
      personagem.exibe();
      personagem.aplicaGravidade();
  
      const linhaAtual = this.mapa[this.indice];
      const inimigo = inimigos[linhaAtual.inimigo];
      const inimigoVisivel = inimigo.x < -inimigo.largura;
      inimigo.velocidade = linhaAtual.velocidade;
  
      inimigo.exibe();
      inimigo.move();
    
      if(inimigoVisivel){
        this.indice++;
        inimigo.aparece();
  
        if(this.indice > this.mapa.length - 1){
          this.indice = 0;
        }
      }
  
      if(personagem.colide(inimigo)){
        vida.perdeVida();
        personagem.ficaImune();
        
        if(vida.vidas === 0){
          image(imagemGameOver, width/2 - 200, height/2);
          somGameOver.play();
          somJogo.stop();
          noLoop();
        } 
      }
    }
  }