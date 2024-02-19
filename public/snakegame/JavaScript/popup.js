function showPopup(title, text) {
    document.getElementById('popupTitle').textContent = title;
    document.getElementById('popupText').textContent = text;
    document.getElementById('popupContainer').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popupContainer').style.display = 'none';
}