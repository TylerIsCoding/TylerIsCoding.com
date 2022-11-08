const sneakerImage = document.querySelector('#silverpoint-img');
const paterrosImage = document.querySelector('#paterros-img');
const salonImage = document.querySelector('#salon-img');

sneakerImage.addEventListener('click', redirectSneakers);
paterrosImage.addEventListener('click', redirectRestaurant);
salonImage.addEventListener('click', redirectSalon);

function redirectSneakers() {
    window.location.href = '../shoe-store/index.html';
}

function redirectRestaurant() {
    window.location.href = '../restaurant/index.html';
}

function redirectSalon() {
    window.location.href = '../salon/index.html';
}
