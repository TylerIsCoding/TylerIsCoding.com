const sneakerImage = document.querySelector('#silverpoint-img');
const paterrosImage = document.querySelector('#paterros-img');
const salonImage = document.querySelector('#salon-img');
const moreButton = document.querySelector('.more');

sneakerImage.addEventListener('click', redirectSneakers);
paterrosImage.addEventListener('click', redirectRestaurant);
salonImage.addEventListener('click', redirectSalon);
moreButton.addEventListener('click', expandInfo);

function redirectSneakers() {
    window.open('../shoe-store/index.html', '_blank');
}

function redirectRestaurant() {
    window.open('../restaurant/index.html', '_blank');
}

function redirectSalon() {
    window.open('../salon/index.html', '_blank');
}

function expandInfo() {
    let content = document.querySelector('.content');
    let text = document.querySelector('.more-text');
    if (content.style.maxHeight) {
        text.innerHTML = 'More';
        content.style.maxHeight = null;
    } else {
        text.innerHTML = 'Less';
        content.style.maxHeight = content.scrollHeight + 'px';
    }
}
