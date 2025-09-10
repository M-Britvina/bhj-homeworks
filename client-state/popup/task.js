    const modal = document.getElementById("subscribe-modal");
const closeButton = document.querySelector(".modal__close");

document.addEventListener("DOMContentLoaded",
    () => {
        if (!isSetCookie("SubscribeModalClosed")) {
            modal.classList.add("modal_active");
        }
    },
    false
);

function isSetCookie(name) {
    return document.cookie.indexOf(name) >= 0;
}

closeButton.addEventListener("click",
    () => {
        modal.classList.remove("modal_active");
        document.cookie = "SubscribeModalClosed=true";
    },
    false
);
