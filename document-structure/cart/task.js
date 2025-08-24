const quantityControls = document.querySelectorAll(".product__quantity-controls");

quantityControls.forEach(control => {
    control.addEventListener("click",
        event => {
            let valueElement = control.querySelector(".product__quantity-value");
            if (event.target.matches(".product__quantity-control_dec")) {
                valueElement.textContent = Math.max(1, parseInt(valueElement.textContent) - 1);
            } else if (event.target.matches(".product__quantity-control_inc")) {
                valueElement.textContent = parseInt(valueElement.textContent) + 1;
            }
        },
        false
    );
});

const productAddButtons = document.querySelectorAll(".product__add")

productAddButtons.forEach(button => {
    button.addEventListener("click",
        event => {
            const product = button.closest(".product");
            const id = product.dataset.id;
            const count = product.querySelector(".product__quantity-value").textContent;
            let cartProduct = findCart(id);

            if (cartProduct) {
                const countElement = cartProduct.querySelector(".cart__product-count");
                countElement.textContent = parseInt(countElement.textContent) + parseInt(count);
            } else {
                const imgSrc = product.querySelector(".product__image").getAttribute("src");
                document.querySelector(".cart__products").insertAdjacentHTML("beforeend", `<div class="cart__product" data-id="${id}">
                    <img class="cart__product-image" src="${imgSrc}">
                    <div class="cart__product-count">${count}</div>
                </div>`);
            }
        },
        false
    );
});

function findCart(id) {
    return Array.from(document.querySelectorAll(".cart__product")).find(product => product.dataset.id == id);
}
