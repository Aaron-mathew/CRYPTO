document.addEventListener('DOMContentLoaded', function() {
    var lcen = document.getElementById('lcen');
    var h1 = lcen.querySelector('h1');
    var h2 = lcen.querySelector('h2');
    var p = lcen.querySelector('p');

    setTimeout(function() {
        h1.classList.add('fade-in');
    }, 500);

    setTimeout(function() {
        h2.classList.add('fade-in');
    }, 1000);

    setTimeout(function() {
        p.classList.add('fade-in');
    }, 1500);
});