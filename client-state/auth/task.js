const signinForm = document.getElementById("signin__form");
const welcomeBlock = document.getElementById("welcome");
const userIdBlock = document.getElementById("user_id");
const signinBlock = document.getElementById("signin");
const logoutButton = document.getElementById("logoutButton");

signinForm.addEventListener("submit",
    (event) => {
        event.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");
        xhr.responseType = "json";

        xhr.onload = function() {
            const response = xhr.response;
            if (!response.success) {
                alert("Неверный логин/пароль");
            } else {
                const userId = response.user_id;
                localStorage.setItem("user_id", userId);

                showWelcome(userId);
            }
        }

        xhr.onerror = function() {
            alert("Неизвестная ошибка при входе!");
        }

        xhr.send(new FormData(signinForm));
        signinForm.reset();
    },
    false
);

logoutButton.addEventListener("click",
    (event) => {
        event.preventDefault();

        localStorage.removeItem("user_id");
        welcomeBlock.classList.remove("welcome_active");
        signinBlock.classList.add("signin_active");
    },
    false
);

function showWelcome(userId) {
    userIdBlock.textContent = userId;
    welcomeBlock.classList.add("welcome_active");
    signinBlock.classList.remove("signin_active");
}


const userId = localStorage.getItem("user_id");
if (userId) {
    showWelcome(userId);
}
