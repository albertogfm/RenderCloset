$('#print').click(function(){
  
  html2canvas(document.querySelector(".contenedor-canva")).then(canvas => {
    //document.body.appendChild(canvas)
    return Canvas2Image.saveAsPNG(canvas);
  });

})