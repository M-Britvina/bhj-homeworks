let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.responseType = "json";
xhr.onload = () => {
    if (xhr.status != 200) {
        alert("Загрузка вопроса не удалась");
    } else {
        viewPoll(xhr.response);
    }
}

xhr.send();

function viewPoll(poll) {
    document.getElementById("poll__title").textContent = poll.data.title;
    const answers = poll.data.answers;
    const buttonPanel = document.getElementById("poll__answers");
    for (let i = 0 ; i < answers.length; i++) {
        buttonPanel.insertAdjacentHTML("beforeend", `<button class="poll__answer">
            ${answers[i]}
        </button>`);
        buttonPanel.lastElementChild.onclick = () => vote(poll.id, i)
    }
}

function vote(pollId, answerId) {
    alert("Спасибо, ваш голос засчитан!")
    let xhr = new XMLHttpRequest();
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/poll");
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.responseType = "json";
    xhr.onload = () => {
        if (xhr.status != 201) {
            alert("Не удалось проголосовать");
        } else {
            viewResult(xhr.response.stat);
        }
    }
    
    xhr.send(`vote=${pollId}&answer=${answerId}`);
}

function viewResult(stats) {
    const resultPanel = document.getElementById("poll__answers");
    resultPanel.innerHTML = '';

    let total = 0;

    stats.forEach(stat => { total += stat.votes; });

    stats.forEach(stat => resultPanel.insertAdjacentHTML("beforeend", `<div>
            ${stat.answer}: ${(stat.votes / total * 100).toFixed(2)} %
        </div>`)
    );
}