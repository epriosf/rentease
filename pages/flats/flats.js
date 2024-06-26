document.addEventListener('DOMContentLoaded', () => {
  const flats = JSON.parse(getListFromLocalStorage('flats'));
  displayFlats(flats);
});

const displayFlats = flats => {
  const flatsContainer = document.getElementById('flats-container');
  flatsContainer.innerHTML = '';
  flats.forEach((flat, index) => {
    flatsContainer.appendChild(createFlatRow(flat, index + 1));
  })
}
const createFlatRow = (flat, index) => {
  const flatItem = document.createElement('tr');
  flatItem.className = 'flat';
  flatItem.innerHTML = `
      <td>${index}</td>
      <td>${flat.name}</td>
      <td>${flat.city}</td>
      <td>${flat.street_name}</td>
      <td>${flat.street_number}</td>
      <td>${flat.area_size}</td>
      <td>
      ${createRadioButtonGroup(`hasAc-${flat.id}`, flat.has_AC)}
      </td>
      <td>${flat.year_built}</td>
      <td>${flat.rent_price}</td>
      <td>${flat.date_available}</td>
      <td>
       ${createRadioButtonGroup(`favourite-${flat.id}`, flat.is_favourite)}
      </td>
      <td>
      <img src="${flat.image_url}" alt="${flat.id}">
      </td>
      <td>
      <div class="button-container">
      <button class="button-edit" onClick="handleEdit('${flat.id}')">Edit</button>
      <button class="button-delete" onClick="handleDelete('${flat.id}', '${flat.name}')">Delete</button>
      </div>
      </td>
      `;
  return flatItem;
}
const createRadioButtonGroup = (name, isChecked) => {
  return `
    <input type="radio" id="${name}-yes" name="${name}" value="yes" ${isChecked ? 'checked' : ''} disabled/>
    <label for="favourite-${name}-yes">Yes</label>
    <input type="radio" id="${name}-no" name="${name}" value="no" ${!isChecked ? 'checked' : ''} disabled/>
    <label for="notFavourite-${name}">No</label>
    `;
}
const handleDelete = (flat_id, flat_name) => {
  const flats = JSON.parse(getListFromLocalStorage('flats'));
  Swal.fire({
    title: `Are you sure to delete the flat: ${flat_name}`,
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#7AA3DF",
    cancelButtonColor: "#FF5F5D",
    confirmButtonText: "Yes"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Deleted!",
        text: "The flat has been deleted.",
        icon: "success"
      });
      const flat_index = flats.findIndex(flat => flat.id === flat_id);
      flats.splice(flat_index, 1);
      addListToLocalStorage('flats', JSON.stringify(flats));
      displayFlats(flats);
    }
  });
}

const handleAdd = () => {
  goToAddFlatPage('');
}
const handleEdit = async (flat_id) => {
  console.log("flat_id", flat_id);
  const flats = JSON.parse(getListFromLocalStorage('flats'));
  
  const flat_found = flats.find(flat => flat.id === flat_id);
 // const flat_found = findItemByProperty(flats, 'id', flat_id);
  if (flat_found) {
    goToAddFlatPage(flat_found.id)
  }
  else {
    console.log("flat_not_found")
  }

}
const goToAddFlatPage = (flat_id) => {
  window.location.href = `./../addFlat/addFlat.html?flat_id=${flat_id}`;
}