document.addEventListener('DOMContentLoaded', function () {
    const btnJogar = document.getElementById('btnJogar');

    if (btnJogar) {
        btnJogar.addEventListener('click', function () {
            window.location.href = './scr/pages/game.html';
        });
    }
});