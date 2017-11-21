$(document).ready(function(){
  alert('Hola')
  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val(); // ${duvuelve el array de coincidencias}
    var full_name = $('#full_name').val();// {full_name}
    var gender = $('input[name="gender"]:checked').val();//{}
    var old = $('input[name="old"]:checked');//{}
    var music = $('input[name="interest"]:checked');//{}
    var musics = new Array();

    for (var i = 0; i < interest.length; i++) {
       var temp_musics = musics[i];
       musics.push(temp_musics.value);
    }

    var payload = {
      'first_name': first_name,
      'full_name': full_name,
      'gender' : gender,
      'old': old,
      'music': musics,
    };

    $.post('/find', payload);
    $.get('/find', payload);
  });
});
