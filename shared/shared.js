const generateUniqueId=(type)=> `${type}_${Date.now()}_${Math.floor(Math.random() * 1000)}`;

const createFlat=({
    id,
    name,
    city,
    street_name,
    street_number,
    area_size,
    has_AC,
    year_built,
    rent_price,
    date_available,
    is_favourite,
    image_url
}) =>{
    return {
        id,
        name,
        city,
        street_name,
        street_number,
        area_size,
        has_AC,
        year_built,
        rent_price,
        date_available,
        is_favourite,
        image_url
    };
}

const addListToLocalStorage = (name, list) => localStorage.setItem(`${name}`, list);
const addItemToLocalStorage = (name, value) => localStorage.setItem(`${name}`, value);
const getItemFromLocalStorage = (name) => localStorage.getItem(`${name}`);
const getListFromLocalStorage = (name) => localStorage.getItem(`${name}`);
const findItemByProperty = (items, property, value) =>  items.find(item => item[property] === value);

 // Validaciones
 const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
 const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;