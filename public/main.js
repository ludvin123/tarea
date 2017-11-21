$(document).ready(function(){

  $('input[type="submit"]').on("click", function(event) {
    event.preventDefault();
    var first_name = $('#first_name').val(); // ${duvuelve el array de coincidencias}
    var full_name = $('#full_name').val();// {full_name}
    var old = $('input[name="old"]:checked').val();//{}
    var gender = $('input[name="gender"]:checked').val();
    var music = $('input[name="music"]:checked');//{}
    var textarea = $('#textarea').val();
    var musics = new Array();

    for (var i = 0; i < music.length; i++) {
       var temp_music = music[i];
       musics.push(temp_music.value);
    }

    var payload = {
      'first_name': first_name,
      'full_name': full_name,
      'gender' : gender,
      'old': old,
      'music': musics,
      'textarea':textarea,
    };

    $.post('/find', payload);
    $.get('/find', payload);
  });
});
