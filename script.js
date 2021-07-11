$(document).ready(function(){
  $('button').click(function(){
    const name = $('#name').val();
    $('.changeimg').attr('src',`https://joeschmoe.io/api/v1/${name}`);
  });
});
