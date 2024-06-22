window.onload = function () {
  const param = new URLSearchParams(window.location.search);
  const flat_id = param.get('flat_id');
  addYearBuiltOptions();
  if (flat_id) {
    document.getElementById('cancel-button').style.display = 'block';
    document.getElementById('submit-button-span').textContent = 'Update';
    const flats = JSON.parse(getListFromLocalStorage('flats'));
    const flat = findItemByProperty(flats, 'id', flat_id);

    if (flat) {
      document.getElementById('flatId').value = flat.id;
      document.getElementById('flatName').value = flat.name;
      document.getElementById('city').value = flat.city;
      document.getElementById('streetName').value = flat.street_name;
      document.getElementById('streetNumber').value = flat.street_number;
      document.getElementById('areaSize').value = flat.area_size;
      document.getElementById('yearBuilt').value = flat.year_built;

      document.getElementById('rentPrice').value = flat.rent_price;
      document.getElementById('dateAvailable').value = flat.date_available;
      document.querySelector(`input[name="radioHasAc"][value="${flat.has_AC ? 'yes' : 'no'}"]`).checked = true;
      document.querySelector(`input[name="radioIsFav"][value="${flat.is_favourite ? 'yes' : 'no'}"]`).checked = true;

      if (flat.image_url) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = flat.image_url;
        imagePreview.style.display = 'block';
      }
    }
  }
  document.getElementById('imageUrl').addEventListener('change', handleImageUpload);
}
const addYearBuiltOptions = () => {
  const yearSelect = document.getElementById('yearBuilt');
  const currentYear = new Date().getFullYear();
  const startYear = 2000;
  yearSelect.value = currentYear;

  for (let year = currentYear; year >= startYear; year--) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }

}


const handleImageUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const imagePreview = document.getElementById('imagePreview');
      imagePreview.src = e.target.result;
      imagePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
}

$(function () {
  $('input[name="daterange"]').daterangepicker({
    opens: 'left'
  });
});

document.getElementById('addFlat').addEventListener('submit', function (event) {
  event.preventDefault();

  let id = document.getElementById('flatId').value || generateUniqueId('flat');
  let name = document.getElementById('flatName').value;
  let city = document.getElementById('city').value;
  let street_name = document.getElementById('streetName').value;
  let street_number = document.getElementById('streetNumber').value;
  let area_size = document.getElementById('areaSize').value;
  let year_built = document.getElementById('yearBuilt').value;
  let has_AC = document.querySelector('input[name="radioHasAc"]:checked').value === 'yes';
  let is_favourite = document.querySelector('input[name="radioIsFav"]:checked').value === 'yes';
  let rent_price = document.getElementById('rentPrice').value;
  let date_available = document.getElementById('dateAvailable').value;

  const file = document.getElementById("imageUrl").files[0];
  let image_url = '';

  const processForm = (existingImage) => {
    const newFlat = createFlat({
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
      image_url: existingImage || ''
    });

    const flats = JSON.parse(getListFromLocalStorage('flats'));

    const flatIndex = flats.findIndex((flat) => flat.id === newFlat.id)

    if (flatIndex !== -1) {
      image_url = flats[flatIndex].image_url || '';
      const otherFlats = flats.filter(flat => flat.id !== newFlat.id);
      const flatFound = findItemByProperty(otherFlats, 'name', newFlat.name);
      if (flatFound) {
        showAlert('top-center', 'error', `Flat: "${newFlat.name}" already exists`, '', false, 2000);
      }
      else {
        flats[flatIndex] = newFlat;
        showAlert('top-center', 'success', `Flat "${newFlat.name}" updated properly`, '', false, 2000);
        addListToLocalStorage('flats', JSON.stringify(flats));
        setTimeout(() => {
          goToAllFlatsPage();
        }, "1500");
      }

    }
    else {
      if (findItemByProperty(flats, 'name', newFlat.name)) {
        showAlert('top-center', 'error', `Flat: "${newFlat.name}" already exists`, '', false, 2000);
      }

      else {
        flats.push(newFlat);
        showAlert('top-center', 'success', `Flat ${newFlat.name} created succesfully`, '', false, 2000);
        clearAddFlatForm();
        addListToLocalStorage('flats', JSON.stringify(flats));
        setTimeout(() => {
          goToAllFlatsPage();
        }, "1500");
      }
    }
  };
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      image_url = event.target.result;
      processForm(image_url);
    };
    reader.readAsDataURL(file);
  } else {
    const flats = JSON.parse(getListFromLocalStorage('flats'));
    const flat = findItemByProperty(flats, 'id', id);
    const existingImage = flat ? flat.image_url : '';
    if (existingImage !== '') {
      processForm(existingImage);
    }
    else {
      showAlert('top-center', 'error', `No image selected`, 'Please select an image', false, 2000);
    }

  }
});

const clearAddFlatForm = () => {
  document.getElementById('flatName').value = '';
  document.getElementById('city').value = '';
  document.getElementById('streetName').value = '';
  document.getElementById('streetNumber').value = '';
  document.getElementById('areaSize').value = '';
  document.getElementById('yearBuilt').value = '2024';
  document.querySelector('input[name="radioHasAc"]:checked').value = 'Yes';
  document.querySelector('input[name="radioIsFav"]:checked').value = 'Yes';
  document.getElementById('rentPrice').value = '';
  document.getElementById('dateAvailable').value = '';
  document.getElementById('imageUrl').value = '';
}

const goToAllFlatsPage = () => {
  window.location.href = './../flats/flats.html'
}
const showAlert = (position, icon, title, text, showConfirmButton, timer) => {
  Swal.fire({
    position,
    icon,
    title,
    text,
    showConfirmButton,
    timer
  });
}