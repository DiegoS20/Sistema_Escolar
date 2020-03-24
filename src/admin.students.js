let students;
window.onload = e => {
    students = getTableInfo();
}

function getTableInfo() {
    let data = [];
    const adminStudentsTable = document.querySelector('.admin-students-table');
    const adminStudentsTableChildren = adminStudentsTable.children;
    const adminStudentsTableRows = adminStudentsTableChildren[1].rows;
    for (const row of adminStudentsTableRows) {
        const cells = row.cells;
        data.push({
            id_student: cells[0].innerText,
            name: cells[1].innerText,
            grade__section: cells[2].innerText,
            email: cells[3].innerText,
        });
    }
    return data;
}

function fillTable(data, tableIdentifier) {
    let tableBody = document.querySelector(tableIdentifier).children[1];
    tableBody.innerHTML = "";
    data.forEach(element => {
        let tr = document.createElement('tr');
        const element_keys = Object.keys(element);
        const element_values = Object.values(element);
        for (let i = 0; i < element_values.length; i++) {
            const _data = element_values[i];
            const _data_key = element_keys[i];

            const tag_name = i === 0 ? 'th' : 'td';
            let tag = document.createElement(tag_name);
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
