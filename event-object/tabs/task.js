const tabs = Array.from(document.querySelectorAll(".tabs"));

for (let i = 0; i < tabs.length; i++) {
    const tab = tabs[i];
    const tabHeaders = Array.from(tab.querySelectorAll(".tab"));
    const tabContents = Array.from(tab.querySelectorAll(".tab__content"));

    for (let i = 0; i < tabHeaders.length; i++) {
        tabHeaders[i].addEventListener("click", 
            (event) => {
                const currentActiveIndex = tabHeaders.indexOf(tab.querySelector(".tab_active"));

                tabHeaders[currentActiveIndex].classList.toggle("tab_active");
                tabHeaders[i].classList.toggle("tab_active");
                tabContents[currentActiveIndex].classList.toggle("tab__content_active");
                tabContents[i].classList.toggle("tab__content_active");
            }, false
        )
    }
}