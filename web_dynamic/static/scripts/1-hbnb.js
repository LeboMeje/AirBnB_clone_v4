$(document).ready(
  () => {
    const selectedAmenities = {};
    $('input[type="checkbox"]').change(() => {
      const amenityId = $(this).data('id');
      const amenityName = $(this).data('name');

      if ($(this).is(':checked')) {
        selectedAmenities[amenityId] = amenityName;
      } else {
        delete selectedAmenities[amenityId];
      }

      const amenitiesList = Object.values(selectedAmenities).join(', ');
      $('#amenities').text(amenitiesList);
    });
  });
