const form = document.getElementById("studentForm");
const card = document.getElementById("registrationCard");
const message = document.getElementById("message");

const fields = [
    "fullname",
    "email",
    "studentid",
    "course",
    "year",
    "password"
];

function validateForm() {
    let valid = true;

    fields.forEach(id => {
        const field = document.getElementById(id);

        const isValid =
            field.checkValidity() &&
            field.value.trim() !== "";

        field.classList.toggle("is-valid", isValid);
        field.classList.toggle("is-invalid", !isValid);

        if (!isValid) {
            valid = false;
        }
    });

    card.classList.toggle("correct", valid);
    card.classList.toggle("incorrect", !valid);

    return valid;
}

fields.forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
        validateForm();
        message.textContent = "";
    });

    document.getElementById(id).addEventListener("change", () => {
        validateForm();
        message.textContent = "";
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    if (validateForm()) {
        message.className = "alert alert-success mt-2";
        message.textContent =
            "Registration successful! All information is correct.";

        form.reset();

        fields.forEach(id => {
            document.getElementById(id).classList.remove("is-valid");
        });

        card.classList.remove("correct", "incorrect");

    } else {
        message.className = "alert alert-danger mt-2";
        message.textContent =
            "Please correct the highlighted fields.";
    }
});
