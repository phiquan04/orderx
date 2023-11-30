
function showInfor(id) {
    var form = document.getElementById(id);
    if (form) {
        form.style.display = 'block';
    }
}

function closeForm(id) {
    document.getElementById(id).style.display = 'none';
}
