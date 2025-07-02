const deadMolesCount = document.getElementById("dead");
const blunderCount = document.getElementById("lost");

let deadMolesValue = 0;
let blunderValue = 0;

const getHole = index => document.getElementById(`hole${index}`);
const cleanStatus = () => {
    deadMolesValue = 0;
    blunderValue = 0;
}
const printStatus = () => {
    deadMolesCount.textContent = deadMolesValue;
    blunderCount.textContent = blunderValue;
}

for (let i = 1; i < 10; i++) {
    let hole = getHole(i);
    hole.onclick = () => {
        if (hole.classList.contains('hole_has-mole')) {
            deadMolesValue += 1;
            if (deadMolesValue == 10) {
                alert("Победа!");
                cleanStatus();
            }
        } else {
            blunderValue += 1;
            if (blunderValue == 5) {
                alert("Вы проиграли!");
                cleanStatus();
            }
        }
        printStatus();
    }
}