const outputElement = document.getElementById("output");
const commandInput = document.getElementById("commandInput");

commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        handleCommand(commandInput.value);
        commandInput.value = "";
    }
});

function handleCommand(command) {
    command = command.toLowerCase(); // Convert the input to lowercase

    if (command === "help") {

        // Simulate a file download
        outputElement.innerHTML += "Available Commands:\n\n";
        outputElement.innerHTML += "CLS            Clear the terminal screen.\n";
        outputElement.innerHTML += "INFO           Display information about this terminal.\n";
        outputElement.innerHTML += "LIST           Display a list of files and subdirectories in a directory.\n";
        outputElement.innerHTML += "PING           Test the reachability of a host on an Internet Protocol (IP) network. [Disabled]\n";
        outputElement.innerHTML += "READ           Opens file in directory.\n";
        outputElement.innerHTML += "WGET           Download files or directory.\n\n";

    } else if (command === 'cls') {

        window.location.href = 'dfff0a7fa1a55c8c1a4966c19f6da452.html';

    } else if (command === 'info') {

        outputElement.innerHTML += "------------------------------------------------------------\n";
        outputElement.innerHTML += "RSTLNE OS v0.1\n";
        outputElement.innerHTML += "------------------------------------------------------------\n\n";
        outputElement.innerHTML += "There is 1 available file in this terminal.\n\n";
        outputElement.innerHTML += "Type HELP to list commands.\n\n";

    } else if (command === 'list') {

        outputElement.innerHTML += "10/17/2023  00:00    -DIR-        .\n";
        outputElement.innerHTML += "10/17/2023  00:00    -DIR-        ..\n";
        outputElement.innerHTML += "10/17/2023  11:22           5,328 hex.txt\n";
        outputElement.innerHTML += "              1 File(s)     5,328 bytes\n";
        outputElement.innerHTML += "              2 Dir(s)    994,672 bytes free\n\n";

    } else if (command === 'read hex.txt') {

        outputElement.innerHTML += "41 68 61 68 21 20 49 74 20 73 65 65 6D 73 20 79 6F 75 20 66 6F 75 6E 64 20 6D 79 20 73 65 63 72\n";
        outputElement.innerHTML += "65 74 20 70 61 67 65 2E 20 42 72 61 76 6F 21 20 42 75 74 2C 20 79 6F 75 27 72 65 20 6E 6F 74 20\n";
        outputElement.innerHTML += "71 75 69 74 65 20 64 6F 6E 65 20 79 65 74 2E 0A 0A 59 6F 75 20 73 65 65 2C 20 74 68 69 73 20 69\n";
        outputElement.innerHTML += "73 20 61 20 62 69 74 20 6F 66 20 61 6E 20 65 78 70 65 72 69 6D 65 6E 74 2E 20 49 27 76 65 20 61\n";
        outputElement.innerHTML += "6C 77 61 79 73 20 77 61 6E 74 65 64 20 74 6F 20 6D 61 6B 65 20 61 20 6D 69 6E 69 2D 41 52 47 20\n";
        outputElement.innerHTML += "74 68 61 74 20 68 61 73 20 61 20 6C 69 74 74 6C 65 20 74 6F 75 63 68 20 6F 66 20 61 6E 61 6C 6F\n";
        outputElement.innerHTML += "67 20 68 6F 72 72 6F 72 20 77 68 69 63 68 20 70 6F 69 6E 74 65 64 20 74 6F 20 6D 79 20 6F 6E 6C\n";
        outputElement.innerHTML += "69 6E 65 2D 70 65 72 73 6F 6E 61 27 73 20 44 69 73 63 6F 72 64 20 63 68 61 6E 6E 65 6C 2E 20 42\n";
        outputElement.innerHTML += "75 74 2C 20 49 20 64 69 67 72 65 73 73 2E 0A 0A 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D\n";
        outputElement.innerHTML += "3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D\n";
        outputElement.innerHTML += "3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 0A 0A 54 68 65 20 77 61 79 20 69 74 20 67 6F 65 73 20\n";
        outputElement.innerHTML += "69 73 20 74 68 61 74 20 49 20 68 61 76 65 20 61 20 73 74 6F 72 79 20 61 62 6F 75 74 20 61 20 72\n";
        outputElement.innerHTML += "65 73 65 61 72 63 68 65 72 20 6E 61 6D 65 64 20 4D 69 6B 27 72 61 20 77 68 6F 20 69 73 20 69 6E\n";
        outputElement.innerHTML += "20 73 65 61 72 63 68 20 6F 66 20 61 6E 6F 74 68 65 72 20 64 69 6D 65 6E 73 69 6F 6E 20 63 61 6C\n";
        outputElement.innerHTML += "6C 65 64 20 44 65 6C 74 61 53 63 61 70 65 20 76 35 2E 30 2E 20 41 66 74 65 72 20 73 74 75 6D 62\n";
        outputElement.innerHTML += "6C 69 6E 67 20 61 72 6F 75 6E 64 2C 20 68 65 20 66 6F 75 6E 64 20 65 6E 63 72 79 70 74 65 64 20\n";
        outputElement.innerHTML += "64 61 74 61 20 74 68 61 74 20 6D 69 67 68 74 20 70 6F 69 6E 74 20 74 6F 20 74 68 69 73 20 6E 65\n";
        outputElement.innerHTML += "77 20 64 69 6D 65 6E 73 69 6F 6E 2E 0A 0A 48 65 72 65 27 73 20 77 68 61 74 20 49 20 68 61 64 20\n";
        outputElement.innerHTML += "68 69 6D 20 73 61 79 3A 0A 0A 22 54 68 65 20 69 6E 69 74 69 61 6C 20 65 6E 63 72 79 70 74 69 6F\n";
        outputElement.innerHTML += "6E 20 6D 65 74 68 6F 64 20 69 73 20 66 61 69 72 6C 79 20 70 72 69 6D 69 74 69 76 65 20 74 68 61\n";
        outputElement.innerHTML += "74 20 65 76 65 6E 20 61 20 72 6F 74 74 65 6E 20 31 33 2D 79 65 61 72 2D 6F 6C 64 20 63 61 6E 20\n";
        outputElement.innerHTML += "64 65 63 72 79 70 74 20 69 74 2E 20 54 68 65 20 6E 65 78 74 20 65 6E 63 72 79 70 74 69 6F 6E 20\n";
        outputElement.innerHTML += "6D 65 74 68 6F 64 20 69 73 20 61 20 6C 69 74 74 6C 65 20 74 72 69 63 6B 69 65 72 2E 20 42 75 74\n";
        outputElement.innerHTML += "2C 20 69 66 20 79 6F 75 27 76 65 20 6D 61 64 65 20 69 74 20 74 68 69 73 20 66 61 72 2C 20 49 20\n";
        outputElement.innerHTML += "74 72 75 73 74 20 79 6F 75 20 6B 6E 6F 77 20 77 68 61 74 20 74 6F 20 64 6F 2E 20 54 68 65 20 63\n";
        outputElement.innerHTML += "6C 75 65 73 20 61 72 65 20 68 65 72 65 2E 0A 0A 34 35 34 6F 73 70 30 37 72 6E 72 73 73 71 36 70\n";
        outputElement.innerHTML += "35 39 31 73 72 31 35 39 33 38 6F 38 72 73 73 37 2E 7A 71 35 0A 0A 54 68 61 74 20 69 73 20 61 6C\n";
        outputElement.innerHTML += "6C 20 49 20 63 61 6E 20 73 61 79 2E 20 49 20 6D 75 73 74 20 66 6C 65 65 21 20 47 6F 6F 64 20 6C\n";
        outputElement.innerHTML += "75 63 6B 21 20 53 65 65 20 79 6F 75 20 6F 6E 20 74 68 65 20 6F 74 68 65 72 20 73 69 64 65 2C 20\n";
        outputElement.innerHTML += "6D 79 20 66 72 69 65 6E 64 21 22 0A 0A 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D\n";
        outputElement.innerHTML += "3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D\n";
        outputElement.innerHTML += "3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 3D 0A 0A 41 73 20 79 6F 75 20 63 61 6E 20 73 65 65 2C 20 74 68 65\n";
        outputElement.innerHTML += "72 65 20 61 72 65 20 6D 61 6E 79 20 64 69 66 66 65 72 65 6E 74 20 65 6E 63 72 79 70 74 69 6F 6E\n";
        outputElement.innerHTML += "20 6D 65 74 68 6F 64 73 2E 20 54 68 65 20 74 68 69 6E 67 20 74 68 61 74 20 68 65 6C 64 20 6D 65\n";
        outputElement.innerHTML += "20 75 70 20 77 61 73 20 74 68 61 74 20 49 20 77 61 73 20 74 72 79 69 6E 67 20 74 6F 20 6D 61 6B\n";
        outputElement.innerHTML += "65 20 61 6E 20 69 6D 70 72 65 73 73 69 76 65 2D 65 6E 6F 75 67 68 20 6D 61 69 6E 20 70 61 67 65\n";
        outputElement.innerHTML += "20 66 6F 72 20 74 68 65 20 70 6C 61 79 65 72 20 74 6F 20 6C 6F 6F 6B 20 61 74 20 77 69 74 68 20\n";
        outputElement.innerHTML += "61 20 62 75 6E 63 68 20 6F 66 20 70 69 63 74 75 72 65 73 20 61 6E 64 20 61 20 73 74 6F 72 79 20\n";
        outputElement.innerHTML += "61 62 6F 75 74 20 68 6F 77 20 49 20 77 61 73 20 61 20 62 65 74 61 2D 74 65 73 74 65 72 20 66 6F\n";
        outputElement.innerHTML += "72 20 61 20 6E 65 77 20 7A 6F 6E 65 20 69 6E 20 73 6F 6D 65 20 4D 4D 4F 20 49 20 70 6C 61 79 65\n";
        outputElement.innerHTML += "64 2C 20 62 75 74 20 49 20 61 6C 73 6F 20 64 69 64 6E 27 74 20 6B 6E 6F 77 20 69 66 20 74 68 61\n";
        outputElement.innerHTML += "74 20 64 65 6C 76 65 64 20 69 6E 74 6F 20 73 6F 6D 65 20 54 65 72 6D 73 20 6F 66 20 53 65 72 76\n";
        outputElement.innerHTML += "69 63 65 20 74 68 69 6E 67 2E 20 53 6F 2C 20 49 20 6B 65 70 74 20 74 68 69 73 20 6D 61 69 6E 20\n";
        outputElement.innerHTML += "62 69 74 20 75 6E 64 6F 6E 65 2E 0A 0A 49 20 68 61 64 20 62 75 6E 63 68 65 73 20 6F 66 20 69 64\n";
        outputElement.innerHTML += "65 61 73 20 66 6F 72 20 64 72 6F 70 70 69 6E 67 20 63 6C 75 65 73 20 62 61 73 65 64 20 6F 66 66\n";
        outputElement.innerHTML += "20 6F 66 20 61 6E 6F 74 68 65 72 20 77 65 62 73 69 74 65 20 41 52 47 20 49 27 76 65 20 73 65 65\n";
        outputElement.innerHTML += "6E 20 66 6C 6F 61 74 69 6E 67 20 61 72 6F 75 6E 64 20 69 6E 76 6F 6C 76 69 6E 67 20 77 6F 72 64\n";
        outputElement.innerHTML += "73 20 77 69 74 68 20 73 65 65 6D 69 6E 67 6C 79 20 6F 64 64 6C 79 20 66 6F 72 6D 61 74 74 65 64\n";
        outputElement.innerHTML += "20 6C 65 74 74 65 72 73 2E 0A 0A 4E 6F 77 2C 20 69 66 20 79 6F 75 20 68 61 70 70 65 6E 20 74 6F\n";
        outputElement.innerHTML += "20 73 6F 6C 76 65 20 69 74 2C 20 49 20 6A 75 73 74 20 68 6F 70 65 20 69 74 20 74 61 6B 65 73 20\n";
        outputElement.innerHTML += "79 6F 75 20 77 68 65 72 65 20 49 20 74 68 69 6E 6B 20 69 74 20 74 61 6B 65 73 20 79 6F 75 2E 20\n";
        outputElement.innerHTML += "41 6C 73 6F 2C 20 74 6F 20 6B 65 65 70 20 6D 79 20 6F 6E 6C 69 6E 65 2D 73 65 6C 66 20 73 65 70\n";
        outputElement.innerHTML += "61 72 61 74 65 20 66 72 6F 6D 20 6D 79 20 72 65 61 6C 20 6C 69 66 65 20 73 65 6C 66 2C 20 49 20\n";
        outputElement.innerHTML += "63 68 61 6E 67 65 64 20 74 68 69 6E 67 73 20 61 72 6F 75 6E 64 20 74 6F 20 70 6F 69 6E 74 20 65\n";
        outputElement.innerHTML += "6C 73 65 77 68 65 72 65 2E 0A 0A 41 6E 79 77 61 79 2C 20 74 68 61 74 27 73 20 61 6C 6C 21 0A 0A\n";
        outputElement.innerHTML += "2D 20 52 61 6E 64 61 6C 6C 20 44 69 7A 6F 6E 20\n\n";

    } else if (command === "wget 454bfc07eaeffd6c591fe15938b8eff7.md5") {

        // Simulate a file download
        outputElement.innerHTML += "Downloading file...\n\n";

        window.location.href = '454bfc07eaeffd6c591fe15938b8eff7.md5';

    } else if (command === "wget bytebanditsqrcode.md5") {

        // Simulate a file download
        outputElement.innerHTML += "Downloading file...\n\n";

        window.location.href = 'ByteBanditsQRCode.md5';

    } else {

        // Display an error message for an incorrect command
        outputElement.innerHTML += command + ` is not recognized as an internal or external command,\n` + `operable program or batch file.\n\n`;

    }
}