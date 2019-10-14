var isOpen = true;
var confs = document.getElementById("confs");
var canArea = document.getElementById("canArea");



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


function doSave() {
  var tamanhoLista = document.getElementById("tamanhoLista").value;
  var valorMinimo = document.getElementById("valorMinimo").value;
  var valorMaximo = document.getElementById("valorMaximo").value;
  var alturaMaxima = document.getElementById("alturaMaxima").value;
  var larguraBarra = document.getElementById("larguraBarra").value;
  var espacoBarra = document.getElementById("espacoBarra").value;
}
