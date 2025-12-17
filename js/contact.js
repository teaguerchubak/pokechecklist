function formSubmit() {
    const form = document.querySelector(".form");

    form.addEventListener("submit", function (x) {
        x.preventDefault();

        swal.fire({
            title: "Success!",
            text: "Your comment has been submitted!",
            icon: "success"
        });
    });
}

formSubmit();