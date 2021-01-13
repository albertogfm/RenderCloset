import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
// function generatePDF() {
//     console.log("hola");
//     const doc = new jsPDF();
//     alert("holit");
//     doc.text(20,20,'hOLI');
//     doc.save('closte.pdf');
// }