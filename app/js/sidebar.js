"use strict";

// --------------------------------------- Events ---------------------------------------
var menu_icon = document.getElementById('ham-icon');
menu_icon.addEventListener('click', toggleSidebar);
var sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.addEventListener('click', function (e) {
  if (sidebar.classList.contains('hidden')) {
    toggleSidebar();
  }
}); // --------------------------------------- Functions ---------------------------------------

function toggleSidebar(e) {
  var sidebar = document.getElementsByClassName('sidebar')[0];
  var alternatingEvent = new Event('alternating');
  sidebar.classList.toggle('hidden');
  sidebar.dispatchEvent(alternatingEvent);
}