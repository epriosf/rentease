// Obtenemos los flats desde el Local Storage
let flatsFromLocalStorage = JSON.parse(localStorage.getItem('flats')) || [];

let flatsContainer = document.getElementById('flats');

const activeButton = (sortBy) => {
    let buttons = document.querySelectorAll(".buttons-container button");
    buttons.forEach(button => {
        const buttonText = button.querySelector('span').textContent.trim().toLowerCase();
        if (sortBy.toLowerCase() === buttonText) {
            button.classList.add("active");
        }
        else {
            button.classList.remove("active");
        }
    });
}
// Creamos una función para renderizar los flats
function renderFlats(flats, sortBy) {
    activeButton(sortBy);
    // Limpiamos el contenedor de flats
    flatsContainer.innerHTML = '';
    // Iteramos sobre cada flat
    flats.forEach(flat => {
        let flatElement = document.createElement('div');
        flatElement.className = 'flat ';
        flatElement.innerHTML = `
            <div class='container-div'>
            <p class="flat__date">Available from: ${flat.date_available}</p>
            <span class="heart ${flat.is_favourite ? 'selected' : ''}" data-id="${flat.id}">&#9829;</span>
            </div>    
            <img src="${flat.image_url}" alt="Image of ${flat.name}">
            <div class='container-div'>
            <h2 class="flat__text">${flat.city}</h2>
            <p class="flat__text">Rent: $${flat.rent_price}</p>
            </div>
            <div class='container-div'>
            <p class="flat__text">${flat.street_name} ${flat.street_number}</p>
            <p class="flat__text">Area: ${flat.area_size} sqm</p>
            </div>
            <div class='container-div'>
            <p class="flat__text">Air Conditioning: ${flat.has_AC ? 'Yes' : 'No'}</p>
            <p class="flat__text">Built in: ${flat.year_built}</p>
            </div> 
        `;

        // Agregamos un controlador de eventos al corazón
        flatElement.querySelector('.heart').addEventListener('click', function (event) {
            let heart = event.target;
            let id = heart.dataset.id;
            let flat = flats.find(flat => flat.id === id);
            flat.is_favourite = !flat.is_favourite;
            heart.classList.toggle('selected');
            localStorage.setItem('flats', JSON.stringify(flats));
        });

        flatsContainer.appendChild(flatElement);
    });
}
const sortingFlats = (sortBy) => {
    activeButton(sortBy);
    switch (sortBy) {
        case 'All':
            renderFlats(flatsFromLocalStorage, "All");
            break;
        case 'Favourites':
            const flatsFavourites = flatsFromLocalStorage.filter(flat => flat.is_favourite === true);
            renderFlats(flatsFavourites, "Favourites")
            break;
        case 'City':
            const flatsByCityAsc = flatsFromLocalStorage.sort((a, b) => a.city.toLowerCase().localeCompare(b.city.toLowerCase()));
            renderFlats(flatsByCityAsc, "City")
            break;
        case 'Price':
            const FlatsByPrice = flatsFromLocalStorage.sort((a, b) => a.rent_price - b.rent_price);
            renderFlats(FlatsByPrice, "Price")
            break;
        case 'Area Size':
            const FlatsByAreaSize = flatsFromLocalStorage.sort((a, b) => a.area_size - b.area_size);
            renderFlats(FlatsByAreaSize, "Area Size")
            break;
        default:
            console.log("option does not valid");

    }
}
const filteringFlats = ()=>{
    var inputElement = document.getElementById("textSearch");
    var searchValue = inputElement.value;
    const filteredFlats = flatsFromLocalStorage.filter(flat=> flat.city== searchValue);
    renderFlats(filteredFlats, "All");
}

// Llamamos a la función para renderizar los flats
renderFlats(flatsFromLocalStorage, "All");

// Escuchamos el evento 'storage' para saber cuando se ha agregado o eliminado un flat
window.addEventListener('storage', function (e) {
    if (e.key === 'flats') {
        // Actualizamos la lista de flats y volvemos a renderizar
        flats = JSON.parse(e.newValue);
        renderFlats();
    }
});


