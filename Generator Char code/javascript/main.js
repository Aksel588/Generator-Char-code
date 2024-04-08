const nameInput = document.getElementById('name');
const submitButton = document.getElementById('submitButton');
const outputParagraph = document.getElementById('output');
const contener = document.getElementById("contener")
const body = document.getElementsByTagName("body")
submitButton.addEventListener('click', function () {
    let arr = [];
    const enteredName = nameInput.value;
    arr.push(enteredName);
    let outputText = "";
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            outputText += arr[i].charCodeAt(j) + ",";
        } outputText += String.fromCharCode(enteredName);
        outputText += "</br>";
    }
    outputParagraph.innerHTML = outputText;
});



nameInput.addEventListener('keypress', function (e) {
    if (e.keyCode === 13) {
        let arr = [];
        const enteredName = nameInput.value;
        arr.push(enteredName);
        let outputText = "";
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr[i].length; j++) {
                outputText += arr[i].charCodeAt(j) + ",";
            } outputText += String.fromCharCode(enteredName);
            outputText += "</br>";
        }
        outputParagraph.innerHTML = outputText;
    }
});


