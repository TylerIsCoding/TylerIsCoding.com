const sneakerImage = document.querySelector("#silverpoint-img");
const bartenderImage = document.querySelector("#bartender-img");
const salonImage = document.querySelector("#salon-img");
const jessiImage = document.querySelector("#jessinaff-img");
const questlogImage = document.querySelector("#questlog-img");
const moreButton = document.querySelector(".more");

sneakerImage.addEventListener("click", redirectSneakers);
bartenderImage.addEventListener("click", redirectBartender);
salonImage.addEventListener("click", redirectSalon);
jessiImage.addEventListener("click", redirectJessi);
questlogImage.addEventListener("click", redirectQuest);
moreButton.addEventListener("click", expandInfo);

function redirectSneakers() {
    window.open("../shoe-store/index.html", "_blank");
}

function redirectBartender() {
    window.open("../restaurant/index.html", "_blank");
}

function redirectSalon() {
    window.open("../salon/index.html", "_blank");
}

function redirectJessi() {
    window.open("https://www.jessinaff.com", "_blank");
}

function redirectQuest() {
    window.open("https://quest-log.cyclic.app/dashboard", "_blank");
}

function expandInfo() {
    let content = document.querySelector(".content");
    let text = document.querySelector(".more-text");
    if (content.style.maxHeight) {
        text.innerHTML = "More";
        content.style.maxHeight = null;
    } else {
        text.innerHTML = "Less";
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
