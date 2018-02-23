

$('#addFood').on('click',function(){
  $.get({url:'/meals',success:function(){
    window.location='/meals';
  }
})
});
