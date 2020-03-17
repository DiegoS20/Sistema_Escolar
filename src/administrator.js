const sidebar = document.querySelector('.sidebar');
sidebar.addEventListener('alternating', changeContentPadding);

const sections = document.querySelectorAll('.dashboard-section');
sections.forEach(sec => {
    sec.addEventListener('mousedown', e => {
        if (e.which == 1) {
            sec.classList.add('clicked');
        }
    }, false);
    sec.addEventListener('mouseup', e => {
        if (e.which == 1) {
            sec.classList.remove('clicked');
        }
    });
});

// -------------------- Functions --------------------
function changeContentPadding(e) {
    const content = document.getElementsByClassName('content')[0];
    content.classList.toggle('fluid');
}
