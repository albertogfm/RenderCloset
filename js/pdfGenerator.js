$('#print').click(function(){
  html2canvas(document.querySelector("#capture")).then(canvas => {
    //document.body.appendChild(canvas)
    return Canvas2Image.saveAsPNG(canvas);
  });

})