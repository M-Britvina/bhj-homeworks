const editor = document.getElementById("editor");
const clearButton = document.getElementById("clearButton");

document.addEventListener("DOMContentLoaded",
    () => {
        editor.value = localStorage.getItem("text");
    },
false);

editor.addEventListener("input",
    () => {
        localStorage.setItem("text", editor.value);
    }, false
);

clearButton.addEventListener("click",
    () => {
        editor.value = "";
        localStorage.removeItem("text");
    }, false
);
