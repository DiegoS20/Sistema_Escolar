"use strict";

// --------------------------------------- Events ---------------------------------------
var menu_icon = document.getElementById('ham-icon');
menu_icon.addEventListener('click', toggleSidebar);
var sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.addEventListener('click', function (e) {
  if (sidebar.classList.contains('hidden')) {
    toggleSidebar();
  }
});
var sidebarElements = document.querySelectorAll('.sidebar-element');
sidebarElements.forEach(function (element) {
  element.addEventListener('click', function (e) {
    if (!element.classList.contains('focused')) {
      var elementFocused = document.getElementsByClassName('focused')[0];
      elementFocused.classList.remove('focused');
      element.classList.add('focused');
    }
  });
}); // --------------------------------------- Functions ---------------------------------------

function toggleSidebar(e) {
  var sidebar = document.getElementsByClassName('sidebar')[0];
  var alternatingEvent = new Event('alternating');
  sidebar.classList.toggle('hidden');
  sidebar.dispatchEvent(alternatingEvent);
}