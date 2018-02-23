$('.breakfast').click(function(){
    $.get({url:'/add?meal=breakfast',success:function(result){
      window.location='/add?meal=breakfast';
    }})
})

$('.lunch').click(function(){
    $.get({url:'/add?meal=lunch',success:function(result){
      window.location='/add?meal=lunch';
    }})
})

$('.snacks').click(function(){
    $.get({url:'/add?meal=snacks',success:function(result){
        window.location='/add?meal=snacks';
    }})
})

$('.dinner').click(function(){
    $.get({url:'/add?meal=dinner',success:function(result){
        window.location='/add?meal=dinner';
    }})
})
