// Add a click event listener to each dropdown button
const dropdownButtons = document.querySelectorAll(".dropdown-btn");

dropdownButtons.forEach((button) => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        content.classList.toggle("active");
    });
});
