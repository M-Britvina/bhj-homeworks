const book = document.getElementById("book");
const fontControl = document.querySelectorAll(".font-size");
const fontControlArr = Array.from(fontControl);

for (let i = 0; i < fontControlArr.length; i++) {
    const linkEl = fontControlArr[i];

    linkEl.addEventListener("click", (e) => {
        e.preventDefault();

        const currentActive = document.querySelector(".font-size_active");

        linkEl.classList.add("font-size_active");
        currentActive.classList.remove("font-size_active");

        switch (linkEl.dataset.size) {
            case "small":
                book.classList.remove("book_fs-big");
                book.classList.add("book_fs-small");
                break;
            case "big":
                book.classList.remove("book_fs-small");
                book.classList.add("book_fs-big");
                break;
            default:
                book.classList.remove("book_fs-big");
                book.classList.remove("book_fs-small");
        }
    }, false);
}


const textColor = document.querySelector(".book__control_color");
const bgColor = document.querySelector(".book__control_background");
const textColorLinks = Array.from(textColor.querySelectorAll(".color"));
const bgColorLinks = Array.from(bgColor.querySelectorAll(".color"));

function removeBookColorClass(prefix) {
    for (let i = 0; i < book.classList.length; i++) {
        const className = book.classList[i];
        if (className.startsWith(prefix)) {
            book.classList.remove(className);
            return;
        }
    }
}

for (let i = 0; i < textColorLinks.length; i++) {
    const linkElement = textColorLinks[i];

    linkElement.addEventListener("click", (e) => {
        e.preventDefault();

        const currentActiveLink = textColor.querySelector(".color_active");

        linkElement.classList.add("color_active");
        currentActiveLink.classList.remove("color_active");

        removeBookColorClass("book_color-");

        book.classList.add("book_color-" + linkElement.dataset.textColor);

    }, false);


}

for (let i = 0; i < bgColorLinks.length; i++) {
    const linkElement = bgColorLinks[i];

    linkElement.addEventListener("click", (e) => {
        e.preventDefault();

        const currentActiveLink = bgColor.querySelector(".color_active");

        linkElement.classList.add("color_active");
        currentActiveLink.classList.remove("color_active");

        removeBookColorClass("book_bg-");

        book.classList.add("book_bg-" + linkElement.dataset.bgColor);

    }, false);
}