"use strict";

var sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('alternating', changeContentPadding);
var sections = document.querySelectorAll('.dashboard-section');
sections.forEach(function (sec) {
  sec.addEventListener('mousedown', function (e) {
    if (e.which == 1) {
      sec.classList.add('clicked');
    }
  }, false);
  sec.addEventListener('mouseup', function (e) {
    if (e.which == 1) {
      sec.classList.remove('clicked');
    }
  });
});
var dashboardSections = document.querySelectorAll('.dashboard-section');
dashboardSections.forEach(function (sec) {
  sec.addEventListener('click', function (e) {
    var target = e.target.dataset.href;

    if (target) {
      location.href += "/".concat(target);
    }
  });
}); // -------------------- Functions --------------------

function changeContentPadding(e) {
  var content = document.getElementsByClassName('content')[0];
  content.classList.toggle('fluid');
}