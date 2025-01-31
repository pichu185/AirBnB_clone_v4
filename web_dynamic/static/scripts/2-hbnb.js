$('document').ready(function () {
  let amenities = {};
  $('input[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
      delete amenities[$(this).attr('data-id')];
      }
      if (Object.values(amenities).lenght === 0) {
          $('.amenities h4').html("&nbsp;");
      } else {
          $('.amenities h4').text(Object.values(amenities).join(', '));
      }
  });
  $.get('http://0.0.0.0:5001/api/v1/status/', function (response) {
    if (response.status === 'OK') {
        $('DIV#api_status').addClass('available');
      } else {
        $('DIV#api_status').removeClass('available');
      }
  });
});
