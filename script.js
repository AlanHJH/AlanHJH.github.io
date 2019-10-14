/*                                             _
                                            | |              _
  _ __     ___   __      __   ___   _ __    | |__    _   _  (_)
 | '_ \   / _ \  \ \ /\ / /  / _ \ | '__|   | '_ \  | | | |
 | |_) | | (_) |  \ V  V /  |  __/ | |      | |_) | | |_| |  _
 | .__/   \___/    \_/\_/    \___| |_|      |_.__/   \__, | (_)
 | |                                                  __/ |
 |_|                                                 |___/
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |   ______     | || |   _______    | || |      _       | || |              | || |     _____    | || |    _______   | |
| |  |_   __ \   | || |  |  _____|   | || |   /\| |/\    | || |              | || |    |_   _|   | || |   /  ___  |  | |
| |    | |__) |  | || |  | |____     | || |   \     /    | || |              | || |      | |     | || |  |  (__ \_|  | |
| |    |  ___/   | || |  '_.____''.  | || |  |_     _|   | || |              | || |   _  | |     | || |   '.___`-.   | |
| |   _| |_      | || |  | \____) |  | || |   /     \    | || |      _       | || |  | |_' |     | || |  |`\____) |  | |
| |  |_____|     | || |   \______.'  | || |   \/|_|\/    | || |     (_)      | || |  `.___.'     | || |  |_______.'  | |
| |              | || |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------'  '----------------'
*/
canArea = document.getElementById("canArea");


class ItemLista{
  constructor(value){
    this.value = value;
    this.color = color(255,255,255);
  }
}

class Lista{
  constructor(){
    this.list = [];
  }

  desenhaLista(larguraBarra,maxAltura,espaco){
    background(0);
    for(var i = 0; i < size; i++){
      var espacamentoSuperior = canArea.offsetHeight - maxAltura - 10;
      var espacamento = larguraBarra * i;
      var espacamentoEntre = espaco * i;
      var c = this.list[i].color; // Create a color for 'c'
      fill(c); // Use color variable 'c' as fill color
      rect(espacamento+espacamentoEntre+5, (maxAltura - ((maxAltura/max)*this.list[i].value))+espacamentoSuperior , larguraBarra,((maxAltura/max)*this.list[i].value)); // Draw left rect
    }
  }

  geraLista(size,min, max){
    for(var i = 0; i < size; i++){
      this.list.push(new ItemLista(random(min, max)));
    }
  }

  mudaCor(item, cor){
    this.list[item].color = cor;
  }

  move(inicio, fim){
    let valInicio = this.list[inicio].value;
    let valFim = this.list[fim].value;

    this.list[inicio].value = valFim;
    this.list[fim].value = valInicio;
  }

  getValue(n){
    return this.list[n].value;
  }

  setBranco(){
    for(var i = 0; i < this.list.length; i++){
      this.list[i].color = color(255, 255,255)
    }
  }

  resetList(){
    this.list.length = 0;
  }

}

var list = new Lista;


function setup() {
  //varivaies do setup
  min = 0;
  max = 500;
  maxAltura = 100;
  larguraBarra = 3;
  espaco = 1;
  size = 300;
  menorCounter = 0;
  menorPosition = 0;
  inicio = 0;
  fim = size;
  isOpen = true;
  isRunning = false;
  //funções do setup
  function findMenor(){
    if(isRunning){
    if(menorCounter < fim){
      //code here//////////////////////////
      if(menorCounter > inicio){
        list.mudaCor(menorCounter-1, color(255,255,255));
      }
      list.mudaCor(menorCounter, color(0,255,0));
      if(list.getValue(menorCounter) < list.getValue(menorPosition)){
          menorPosition = menorCounter;
      }
      /////////////////////////////////////
      menorCounter++;
      setTimeout(findMenor, 1);

    }else{
      if(menorCounter == fim){
        list.mudaCor(size-1, color(255, 255, 255));
        list.mudaCor(inicio, color(255,0,0));
        list.move(menorPosition, inicio);


        inicio = inicio + 1;
        menorPosition = inicio;
        menorCounter = inicio;
        fim = size;
        setTimeout(findMenor,1);

      }
    }
  }else {
    setTimeout(findMenor,1);
  }
  }


  //setup confsEsquerda
  var confsEsquerda = select('#confsEsquerda');
  lblTamanhoLista = createElement('label', 'Tamanho da Lista:');
  inputTamanhoLista = createInput('','number');
  lblValorMinimo = createElement('label', 'Valor Minimo:');
  inputValorMinimo = createInput('','number');
  lblValorMaximo = createElement('label', 'Valor Maximo:');
  inputValorMaximo = createInput('','number');

  lblTamanhoLista.parent(confsEsquerda);
  inputTamanhoLista.parent(confsEsquerda);
  createElement('br').parent(confsEsquerda);
  lblValorMinimo.parent(confsEsquerda);
  inputValorMinimo.parent(confsEsquerda);
  createElement('br').parent(confsEsquerda);
  lblValorMaximo.parent(confsEsquerda);
  inputValorMaximo.parent(confsEsquerda);

  //setup confsDireita
  var confsEsquerda = select('#confsDireita');
  lblAlturaMaxima = createElement('label', 'Altura Maxima (px):');
  inputAlturaMaxima = createInput('', 'number');
  lblLarguraBarra = createElement('label', 'Largura das Barras (px):');
  inputLarguraBarra = createInput('','number');
  lblEspacoBarra = createElement('label', 'Espaçamento das Barras (px):');
  inputEspacoBarra = createInput('','number');

  lblAlturaMaxima.parent(confsDireita);
  inputAlturaMaxima.parent(confsDireita);
  createElement('br').parent(confsDireita);
  lblLarguraBarra.parent(confsDireita);
  inputLarguraBarra.parent(confsDireita);
  createElement('br').parent(confsDireita);
  lblEspacoBarra.parent(confsDireita);
  inputEspacoBarra.parent(confsDireita);

  inputTamanhoLista.input(function (){
    size = this.value();
  });

  inputValorMinimo.input(function (){
    min = this.value();
  });

  inputValorMaximo.input(function (){
    max = this.value();
  });

  inputAlturaMaxima.input(function (){
    maxAltura = this.value();
  });

  inputLarguraBarra.input(function (){
    larguraBarra = this.value();
  });

  inputEspacoBarra.input(function (){
    espaco = this.value();
  });


  //setup controls
  controles = select('#controls');

  //btn Play
  btnPlay = createButton("Iniciar");
  btnPlay.mousePressed(function(){
    isRunning = true;
    findMenor();
  });
  btnPlay.parent(controles);

  //btnGenerateList
  btnGenerateList = createButton("Gerar Lista");
  btnGenerateList.mousePressed(function(){
    list.geraLista(size, min, max);
  });
  btnGenerateList.parent(controles);

  //btnReset
  btnReset = createButton("Resetar");
  btnReset.mousePressed(function(){
    menorCounter = 0;
    menorPosition = 0;
    inicio = 0;
    list.resetList();
    list.geraLista(size, min, max);
  });
  btnReset.parent(controles);

  //btnPouse
  btnPause = createButton("Pausar");
  btnPause.mousePressed(function(){
    if(isRunning){
      isRunning = false;
    }
  });
  btnPause.parent(controles);


  canvasWidth = canArea.offsetWidth;
  canvasHeight = canArea.offsetHeight;


  createCanvas(canvasWidth, canvasHeight);
  //configura o canvas
  background(0);

  list.geraLista(size, min, max);

}


function doClose() {
  console.log('close')

  if(isOpen == true){
    confs.style.visibility = 'hidden';
    isOpen = false;
  }else {
    confs.style.visibility = 'visible';
    isOpen = true;
  }

}

function draw(){
  list.desenhaLista(larguraBarra,maxAltura,espaco);
}
