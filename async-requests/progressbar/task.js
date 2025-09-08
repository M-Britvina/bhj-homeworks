const form = document.getElementById("form");
const progress = document.getElementById("progress");

form.addEventListener("submit", event => {
    event.preventDefault();
    
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");
    
    xhr.upload.onprogress = function(event) {
        progress.value = event.loaded / event.total;
    };

    xhr.upload.onload = function() {
        alert("Данные полностью загружены на сервер!");
    }

    xhr.upload.onerror = function() {
        alert("Произошла ошибка при загрузке данных на сервер!");
    }

    xhr.send(new FormData(form));    
});
