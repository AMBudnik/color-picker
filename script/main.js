var box = document.querySelector('.box');
var hot = new Handsontable(box, {
  colHeaders: true,
  data: Handsontable.helper.createSpreadsheetData(20, 5)
})
