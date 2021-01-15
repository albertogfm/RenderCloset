function getPDF() {
    console.log("hola");
    const doc = new jsPDF();
    var quotes = document.getElementById('container-fluid');
    doc.text("Hello world!", 10, 10);
    doc.save("a4.pdf");
}