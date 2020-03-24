// --------------------------------------- Events ---------------------------------------
const menu_icon = document.getElementById('ham-icon');
menu_icon.addEventListener('click', toggleSidebar);

const sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.addEventListener('click', e => {
    if (sidebar.classList.contains('hidden')) {
        toggleSidebar();
    }
});

// --------------------------------------- Functions ---------------------------------------
function toggleSidebar(e) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const alternatingEvent = new Event('alternating');
    sidebar.classList.toggle('hidden');
    sidebar.dispatchEvent(alternatingEvent);
}