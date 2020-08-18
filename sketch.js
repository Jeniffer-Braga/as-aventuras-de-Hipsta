function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40);
    somJogo.loop();
    jogo = new Jogo();
    telaInicial = new TelaInicial();
    jogo.setup();
    cenas = {
      jogo,
      telaInicial
    }
    botao = new Botao('Iniciar', width/2, height/2);    
  }
  
  function keyPressed(){
    jogo.comandos(key);
  }
  
  function draw() {
    cenas[cenaAtual].draw();  
  }
  
   