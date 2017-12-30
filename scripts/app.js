$(function() {
	$.ajax({
		type: 'GET',
		url: 'data/test.csv',
		dataType: 'text',
		success: function(data) {
			processCSVData(data);
		}
	});
});

function getFAQTemplate(index, question, answer) {
	return "<div class='panel panel-default'>" +
		"<div class='panel-heading' role='tab' id='heading" + index + "'>" +
		"<h4 class='panel-title'>" +
		"<a role='button' data-toggle='collapse' data-parent='#faq-accordion' href='#collapse" + index + "' aria-expanded='true' aria-controls='collapse" + index + "'>" +
		question +
		"</a>" +
		"</h4>" +
		"</div>" +
		"<div id='collapse" + index + "' class='panel-collapse collapse' role='tabpanel' aria-labelledby='heading" + index + "'>" +
		"<div class='panel-body'>" +
		answer +
		"</div>" +
		"</div>" +
		"</div>"
}

function printData(objData, arrayData) {
	console.log(objData);
	console.log(arrayData);

	arrayData.forEach(function(faqArray, index) {
		var template = getFAQTemplate(index, faqArray[0], faqArray[1]);
		$('#faq-accordion').append(template);
	});

}

function processCSVData(csvData) {
	var resultObject = $.csv.toObjects(csvData, {
		headers: false
	});

	var resultArray = $.csv.toArrays(csvData, {
		headers: false
	});

	printData(resultObject, resultArray);
}
