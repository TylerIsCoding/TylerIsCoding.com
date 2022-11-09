const sneakerImage = document.querySelector('#silverpoint-img');
const paterrosImage = document.querySelector('#paterros-img');
const salonImage = document.querySelector('#salon-img');

sneakerImage.addEventListener('click', redirectSneakers);
paterrosImage.addEventListener('click', redirectRestaurant);
salonImage.addEventListener('click', redirectSalon);

function redirectSneakers() {
    window.open('../shoe-store/index.html', '_blank');
}

function redirectRestaurant() {
    window.open('../restaurant/index.html', '_blank');
}

function redirectSalon() {
    window.open('../salon/index.html', '_blank');
}
