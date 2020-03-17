// --------------------------------------- Events ---------------------------------------
const menu_icon = document.getElementById('ham-icon');
menu_icon.addEventListener('click', toggleSidebar);

const sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.addEventListener('click', e => {
    if (sidebar.classList.contains('hidden')) {
        toggleSidebar();
    }
});

const sidebarElements = document.querySelectorAll('.sidebar-element');
sidebarElements.forEach(element => {
    element.addEventListener('click', e => {
        if (!element.classList.contains('focused')) {
            const elementFocused = document.getElementsByClassName('focused')[0];
            elementFocused.classList.remove('focused');
            element.classList.add('focused');
        }
    });
});

// --------------------------------------- Functions ---------------------------------------
function toggleSidebar(e) {
    const sidebar = document.getElementsByClassName('sidebar')[0];
    const alternatingEvent = new Event('alternating');
    sidebar.classList.toggle('hidden');
    sidebar.dispatchEvent(alternatingEvent);
}