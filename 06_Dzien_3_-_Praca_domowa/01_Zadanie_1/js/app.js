document.addEventListener("DOMContentLoaded", function () {

    const readMoreLinks = document.querySelector('.btn-primary');
    const bestTextLinks = document.querySelector('.btn-success');

    readMoreLinks.addEventListener('click', function(event) {
    const content = this.parentElement.querySelector('.content');
    content.classList.toggle('d-none');
});

    bestTextLinks.addEventListener('mouseenter', function (event) {
        const content = this.parentElement.querySelector('.content');
        content.classList.remove('d-none');
    });

    bestTextLinks.addEventListener('mouseleave', function (event) {
        const content = this.parentElement.querySelector('.content');
        content.classList.add('d-none');
    });


});