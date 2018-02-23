
$('.uploadImage').submit(function(e){
console.log('submt kia1');
  e.preventDefault();
  console.log('submt kia');
  $(this).ajaxSubmit({
    contentType: 'application/json',
    success: function(response){
      console.log('in ajax submit');
      $.get({url:`/quantity`,success:function(result){
        console.log("yayayya");
        window.location='/quantity';
      }})
    }
});
  return false;
});
