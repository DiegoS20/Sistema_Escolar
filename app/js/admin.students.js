"use strict";

var students;

window.onload = function (e) {
  students = getTableInfo();
};

function getTableInfo() {
  var data = [];
  var adminStudentsTable = document.querySelector('.admin-students-table');
  var adminStudentsTableChildren = adminStudentsTable.children;
  var adminStudentsTableRows = adminStudentsTableChildren[1].rows;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = adminStudentsTableRows[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var row = _step.value;
      var cells = row.cells;
      data.push({
        id_student: cells[0].innerText,
        name: cells[1].innerText,
        grade__section: cells[2].innerText,
        email: cells[3].innerText
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return data;
}

function fillTable(data, tableIdentifier) {
  var tableBody = document.querySelector(tableIdentifier).children[1];
  tableBody.innerHTML = "";
  data.forEach(function (element) {
    var tr = document.createElement('tr');
    var element_keys = Object.keys(element);
    var element_values = Object.values(element);

    for (var i = 0; i < element_values.length; i++) {
      var _data = element_values[i];
      var _data_key = element_keys[i];
      var tag_name = i === 0 ? 'th' : 'td';
      var tag = document.createElement(tag_name);

      if (i === 0) {
        tag.scope = 'row';
      }

      tag.classList.add(_data_key);
      tag.innerHTML = _data;
      tr.appendChild(tag);
    }

    tableBody.appendChild(tr);
  });
}