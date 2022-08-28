var userInput = document.querySelector(".description");
var saveBtn = document.querySelector(".saveBtn");

var saveTextDescription = function () {
    console.log("Saved");
    userInput.textContent = "Hello";
};

saveBtn.addEventListener("click", saveTextDescription);