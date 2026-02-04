// PDF Generation Logic

const PDFGenerator = {
  generateTicket: (booking, route) => {
    // Only load if jsPDF is available
    if (!window.jspdf) return;
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Header
    doc.setFillColor(5, 5, 5); // Dark BG
    doc.rect(0, 0, 210, 40, 'F');

    doc.setTextColor(255, 215, 0); // Gold
    doc.setFontSize(22);
    doc.text("GION BUS TRANSPORT", 20, 25);

    doc.setFontSize(12);
    doc.setTextColor(255, 255, 255);
    doc.text("E-Ticket Specification", 150, 25);

    // Body
    doc.setTextColor(0, 0, 0);
    doc.setFontSize(16);
    doc.text(`Ticket ID: #${booking.id}`, 20, 60);

    doc.setFontSize(12);
    doc.text(`Passenger: ${booking.passenger}`, 20, 80);
    doc.text(`Date: ${booking.travelDate}`, 20, 90);
    doc.text(`Route: ${booking.routeFrom} -> ${booking.routeTo}`, 20, 100);
    doc.text(`Price: ${booking.price} ETB`, 20, 110);

    // Footer message
    doc.setTextColor(100, 100, 100);
    doc.text("Please show this ticket on your phone when boarding.", 20, 150);
    doc.text("Thank you for choosing Gion Bus.", 20, 160);

    doc.save(`GionTicket_${booking.id}.pdf`);
  }
};
