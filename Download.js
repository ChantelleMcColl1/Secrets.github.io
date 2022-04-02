
var doc = new jsPDF (window.jsPDF = window.jspdf.jsPDF) ;
var specialElementHandlers = {
    '#print-btn': function (element, renderer) {
        return true;
    }
};

$('#submit').click(function () {
    doc.fromHTML($('#print').html(), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('pdf-version.pdf');
});