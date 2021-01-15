function getPDF() {
    // console.log("hola");
    // const doc = new jsPDF();
    // var quotes = document.getElementById('container-fluid');
    // doc.text("Hello world!", 10, 10);
    // doc.save("a4.pdf");

    var pdf = new jsPDF('p', 'pt', 'letter');
    source = $('#imprimir')[0];

    specialElementHandlers = {
        '#bypassme': function (element, renderer) {
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 522
    };

    pdf.fromHTML(
        source, 
        margins.left, // x coord
        margins.top, { // y coord
            'width': margins.width, 
            'elementHandlers': specialElementHandlers
        },

        function (dispose) {
            pdf.save('Prueba.pdf');
        }, margins
    );
}