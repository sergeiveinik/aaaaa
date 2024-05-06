let modalWrapper = document.querySelector("dialog")
let closeModalButton = document.querySelector(".a3>button")
let cards = document.querySelectorAll(".card")
let modalImg = document.querySelector(".a2")
let modalName = document.querySelector(".aa")
let modalDesc = document.querySelector(".aaa")

function closeModal() {
    modalWrapper.classList.add("hide")
}

function showModal(index) {
    return function () {
        modalWrapper.classList.remove("hide");
        let cardImg = cards[index].querySelector("img");
        let cardName = cards[index].querySelector("h2");
        let cardDesc = cards[index].querySelector("a");

        modalImg.src = cardImg.src;
        modalName.innerText = cardName.innerText;
        modalDesc.innerText = cardDesc.innerText;
    }
}

for (let i = 0; i < cards.length; i += 1) {
    cards[i].addEventListener("click", showModal(i))
}

closeModalButton.addEventListener("click", closeModal)