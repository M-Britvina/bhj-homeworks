const rotatorContainers = document.querySelectorAll(".rotator");

for (let i = 0; i < rotatorContainers.length; i++) {
    const rotatorCases = Array.from(rotatorContainers[i].querySelectorAll(".rotator__case"));

    setInterval(() => {
            const currentActive = rotatorCases.indexOf(rotatorContainers[i].querySelector(".rotator__case_active"));
            rotatorCases[currentActive].classList.remove("rotator__case_active");
            rotatorCases[(currentActive + 1) % rotatorCases.length].classList.add("rotator__case_active");

    }, 1000);
}