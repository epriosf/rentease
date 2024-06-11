window.onload = function(){
    const param = new URLSearchParams(window.location.search);
    console.log(param);
    const flat_id = param.get('flat_id');
    if(flat_id){
      document.getElementById('cancel-button').style.display = 'block';
      document.getElementById('cancel-button').hidden = false;
      const flats = JSON.parse(getListFromLocalStorage('flats'));
      const flat = findItemByProperty(flats, 'id', flat_id);
      if(flat){
        document.getElementById('flatId').value = flat.id;
        document.getElementById('flatName').value = flat.name;
        document.getElementById('city').value = flat.city;
        document.getElementById('streetName').value = flat.street_name;
        document.getElementById('streetNumber').value = flat.street_number;
        document.getElementById('areaSize').value = flat.area_size;
        document.getElementById('yearBuilt').value = flat.year_built;
        document.getElementById('rentPrice').value = flat.rent_price;
        document.getElementById('dateAvailable').value = flat.date_available;
        document.querySelector(`input[name="radioHasAc"][value="${flat.has_AC}"]`).checked = true;
        document.querySelector(`input[name="radioIsFav"][value="${flat.is_favourite}"]`).checked = true;
  
        if (flat.image_url) {
          const imagePreview = document.getElementById('imagePreview');
          imagePreview.src = flat.image_url;
          imagePreview.style.display = 'block';
        }
      }
    }
    document.getElementById('imageUrl').addEventListener('change', handleImageUpload);
  }
  
  function handleImageUpload(event) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        const imagePreview = document.getElementById('imagePreview');
        imagePreview.src = e.target.result;
        imagePreview.style.display = 'block';
      };
      reader.readAsDataURL(file);
    }
  }
  
  $(function() {
      $('input[name="daterange"]').daterangepicker({
        opens: 'left'
      }, function(start, end, label) {
        console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      });
    });
  
  document.getElementById('addFlat').addEventListener('submit', function(event) {
      event.preventDefault();
  
      let id =  document.getElementById('flatId').value || valuegenerateUniqueId('flat');
      let name = document.getElementById('flatName').value;
      let city = document.getElementById('city').value;
      let street_name = document.getElementById('streetName').value;
      let street_number = document.getElementById('streetNumber').value;
      let area_size = document.getElementById('areaSize').value;
      let year_built = document.getElementById('yearBuilt').value;
      let has_AC = document.querySelector('input[name="radioHasAc"]:checked').value;
      let is_favourite = document.querySelector('input[name="radioIsFav"]:checked').value;
      let rent_price = document.getElementById('rentPrice').value;
      let date_available = document.getElementById('dateAvailable').value;
     let reader = new FileReader();
     let image_url = '';
  
     reader.addEventListener('load', function(){
      if (this.result){
         image_url = this.result;
         console.log(image_url);
  
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
          image_url
      });
  
      const flats = JSON.parse(getListFromLocalStorage('flats'));
  
      const flatIndex = flats.findIndex((flat)=>flat.id === newFlat.id)
  
      if(flatIndex !==-1){
        flats[flatIndex] = newFlat;
      }
      else {
        if (findItemByProperty(flats,'name', newFlat.name)){
          Swal.fire({
              position: "top-center",
              icon: "error",
              title: `El flat con el nombre: "${newFlat.name}" ya existe`,
              showConfirmButton: false,
              timer: 2000
            });
            return;
      }
      
      else {
          flats.push(newFlat);
          Swal.fire({
              position: "top-center",
              icon: "success",
              title: `Flat ${newFlat.name} created succesfully`,
              showConfirmButton: false,
              timer: 1500
            });
          clearAddFlatForm();
           setTimeout(() => {
                goToAllFlatsPage();
              }, "1500");
      }
  
      }
      addListToLocalStorage('flats', JSON.stringify(flats))
      }
     });
     
     const file = document.getElementById("imageUrl").files[0];
      if (file) {
          reader.readAsDataURL(file);
      } else {
          Swal.fire({
              position: "top-center",
              icon: "error",
              title: "No image selected",
              text: "Please select an image!",
              showConfirmButton: false,
              timer: 1500
            });
      }
     
  });
  
  const clearAddFlatForm = ()=>{
      document.getElementById('flatName').value = '';
      document.getElementById('city').value = '';
      document.getElementById('streetName').value = '';
      document.getElementById('streetNumber').value= '';
      document.getElementById('areaSize').value = '';
      document.getElementById('yearBuilt').value = '2024';
      document.querySelector('input[name="radioHasAc"]:checked').value = 'Yes';
      document.querySelector('input[name="radioIsFav"]:checked').value = 'Yes';
      document.getElementById('rentPrice').value = '';
      document.getElementById('dateAvailable').value = '';
      document.getElementById('imageUrl').value = '';
  }
  const goToAllFlatsPage = ()=>{
      window.location.href='file:///C:/Users/paulr/Escritorio/Proyecto%20Kruger/rentease/pages/flats/flats.html'
  }