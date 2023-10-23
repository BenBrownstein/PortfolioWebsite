function promptForSecretCode() {
    var secretCode = prompt("Please enter the secret code:");
    if (secretCode === "rstlne") { // Replace with your actual secret code
        window.location.href = "./bc4150d023d3255136db671d61ac93f2/1d74fbc52e1db8c23d4dba04a0becc9f.html"; // Redirect to the secret page
    } else {
        alert("Incorrect secret code. Please try again.");
        // Change the stylesheet dynamically
        changeStylesheet("bc4150d023d3255136db671d61ac93f2/1d74fbc52e1db8c23d4dba04a0becc9f.css"); // Replace "incorrect.css" with the path to your stylesheet
        invertColors();
    }
}

function changeStylesheet(stylesheetPath) {
    // Create a new link element for the new stylesheet
    var newStylesheet = document.createElement("link");
    newStylesheet.rel = "stylesheet";
    newStylesheet.href = stylesheetPath;

    // Find the existing stylesheet link element in the document head
    var head = document.head;
    var existingStylesheet = head.querySelector("link[rel='stylesheet']");

    // Replace the existing stylesheet with the new one
    if (existingStylesheet) {
        head.replaceChild(newStylesheet, existingStylesheet);
    } else {
        head.appendChild(newStylesheet);
    }
}

function invertColors() {
    // Add a class to the body element to invert colors
    document.body.classList.add("invert-colors");
}