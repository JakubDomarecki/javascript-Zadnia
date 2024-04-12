const deleteBtns = document.querySelectorAll(".deleteBtn");

deleteBtns.forEach(function (deleteBtn) {
    deleteBtn.addEventListener("click", function (e) {
        const tr = this.parentElement.parentElement;
        const tbody = tr.parentElement;
        tbody.removeChild(tr);
    });
});