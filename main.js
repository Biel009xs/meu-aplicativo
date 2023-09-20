function tocaSomPom (seletorAudio) {
  document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//para
 for (let contador = 0; contador < ListaDeTeclas.length; contador++) {
   
   const tecla = ListaDeTeclas[contador];
   const instrumento = tecla.classList[1];
   const idAudio = `#som_${instrumento}`; //template string

   tecla.onclick = function () {
     tocaSom(idAudio);
   }

 }
ListaDeTeclas[0].onclick = tocaSomPom;
