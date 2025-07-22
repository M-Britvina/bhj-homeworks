const revealDiv = document.querySelectorAll(".reveal");

function isVisible(element) {
    const { top, bottom } = element.getBoundingClientRect();

    if (bottom < 0 || top > window.innerHeight) {
        return false;
    }

    return true;
}

window.addEventListener("scroll", () => {
    for (let i = 0 ; i < revealDiv.length; i++) {
        if (isVisible(revealDiv[i])) {
            revealDiv[i].classList.add("reveal_active");
        }
    }
});
