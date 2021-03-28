var letra = "ABCDEFGHIJKLMNOPQRSTUVXWYZ"

function listarLetrasNaTela(letra){
   document.getElementById("imprimeLetra").innerHTML = "<h2> "+ letra + "</h2><p></p>"
  
  var listaLetras = document.querySelector('#jaFoi')
  var elementoLetra = "<font color=white>"+letra+" "+"</font>"
  listaLetras.innerHTML = listaLetras.innerHTML + elementoLetra
}

function sorteio(){
  caio = Math.floor(Math.random() * letra.length); 
  //document.write("<h2>"+letra[caio]+"</h2>");  
  listarLetrasNaTela(letra[caio])
}
