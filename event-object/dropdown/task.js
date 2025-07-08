const dropdowns = Array.from(document.querySelectorAll(".dropdown"));

const turnList = (list) => {
    list.classList.toggle("dropdown__list_active");
}

for (let i = 0; i < dropdowns.length; i++) {
    const btn = dropdowns[i];
    const dropdownValue = btn.querySelector(".dropdown__value");
    const dropdownLinks = Array.from(btn.querySelectorAll(".dropdown__link"));
    const list = btn.querySelector("ul");

    btn.addEventListener("click", 
        () => {
            turnList(list);
        }, false
    );

    for (let i = 0; i < dropdownLinks.length; i++) {
        dropdownLinks[i].onclick = (event) => {
            event.preventDefault();
            dropdownValue.textContent = event.target.textContent;
        };
    }
}