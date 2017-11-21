$(document).ready(function(){
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val(); // ${duvuelve el array de coincidencias}
    var full_name = $('#full_name').val();// {full_name}
    var gender = $('input[name="gender"]:checked').val();//{}
    var interest = $('input[name="interest"]:checked');//{}
    var interests = new Array();

    for (var i = 0; i < interest.length; i++) {
       var temp_interest = interest[i];
       interests.push(temp_interest.value);
    }

    var payload = {
      'first_name': first_name,
      'full_name': full_name,
      'gender' : gender,
      'interests' : interests
    };

    $.post('/find', payload);
    $.get('/find', payload);
  });
});
