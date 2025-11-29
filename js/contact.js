function submitAlert() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function() {
        alert("Your comment has been submitted!");
    })
}

submitAlert();