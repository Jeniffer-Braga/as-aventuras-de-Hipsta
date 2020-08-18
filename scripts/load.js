function preload() {
    imagemTelaInicial = loadImage('imagens/cenario/telainicial.jpg');
    fonteTelaInicial = loadFont('imagens/assets/fonteTelaInicial.otf');
    imagemCenario = loadImage('imagens/cenario/floresta.jpg'); 
    imagemObjetoCenario = loadImage('imagens/cenario/passaro.png');
    imagemPersonagem = loadImage('imagens/personagens/correndo.png');
    imagemInimigo = loadImage('imagens/inimigos/gotinha.png');
    imagemInimigoGrande = loadImage('imagens/inimigos/troll.png');
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    imagemVida = loadImage('imagens/assets/coracao.png');
    fita = loadJSON('fita/fita.json');
    somJogo = loadSound('sons/trilha_jogo.mp3'); 
    somPulo = loadSound('sons/somPulo.mp3');
    somGameOver = loadSound('sons/Game_Over.mp3');
  }