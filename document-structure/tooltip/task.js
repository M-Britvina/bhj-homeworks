const hasTooltipsElements = document.querySelectorAll(".has-tooltip");

hasTooltipsElements.forEach(item => {
    item.addEventListener("click",
        event => {
            event.preventDefault();

            let tooltip = document.querySelector(".tooltip_active");
            if (tooltip) {
                tooltip.remove();
                if (tooltip.textContent === item.getAttribute("title")) {
                    return;
                }
            }

            tooltip = document.createElement("div");
            tooltip.classList.add("tooltip");
            tooltip.classList.add("tooltip_active");
            tooltip.textContent = item.getAttribute("title");

            let coords = item.getBoundingClientRect();
            tooltip.style.top = coords.top + item.offsetHeight + "px";
            tooltip.style.left = coords.left + "px";

            item.insertAdjacentElement("afterEnd", tooltip);
        },
        false
    )
});