let xhr = new XMLHttpRequest();

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
xhr.responseType = "json";
xhr.onload = () => {
    document.getElementById("loader").classList.remove("loader_active");
    if (xhr.status != 200) {
        alert("Загрузка не удалась");
    } else {
        printCurrency(xhr.response);
    }
}

xhr.send();

function printCurrency(currencyObj) {
    const items = document.getElementById("items");
    const valute = currencyObj.response.Valute;
    for (const key in valute) {
        const currency = valute[key];
        items.insertAdjacentHTML("beforeend", `<div class="item">
            <div class="item__code">
                    ${currency.CharCode}
                </div>
                <div class="item__value">
                    ${currency.Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>
          </div>`);
    }
}
