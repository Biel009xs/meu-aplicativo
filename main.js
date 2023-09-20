function tocaSomPom (seletorAudio) {
  document.querySelector(seletorAudio).play();
}

if (elemento && elemento.localName === 'audio' {
    elemento.play();
}
 
  else  {
      //alert('Elemento não encontrado');
    console.logg('Elemento não encontrado ou seletor inválido')
 
  }

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
  for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]
    const idAudio = `#Som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom (idAudio0;
    }
tecla.onkeydown = function (evento) {

  if (evento.code === "Space" || evento.code === 'Enter') {
    tecla.classList.add('ativa');
  }

}
tecla.onkeyup = function () {
  tecla.classList.remove('ativa');
    }

  }
