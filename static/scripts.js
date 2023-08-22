document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", function(event) {
            let hasError = false;

            const inputs = form.querySelectorAll("input[type='text']");
            for (let input of inputs) {
                // Check if input is empty
                if (input.value.trim() === "") {
                    hasError = true;
                    const errorDiv = document.createElement("div");
                    errorDiv.className = "error";
                    errorDiv.innerText = "This field is required.";
                    if (!input.nextElementSibling || input.nextElementSibling.className !== "error") {
                        input.parentNode.insertBefore(errorDiv, input.nextSibling);
                    }
                } else {
                    if (input.nextElementSibling && input.nextElementSibling.className === "error") {
                        input.nextElementSibling.remove();
                    }
                }

            }

            if (hasError) {
                event.preventDefault();
            }
        });
    }
});

