  var btn= $('#btn');
    btn1.on('click',function(){
      console.log('hhhhhh');
      $.ajax({

        url:'/upload',
        type: 'POST',
        contentType: 'multipart/form-data',
        success:function(result){
          console.log("hogya submit what you wanna accomplish")
          console.log('result');
          
        }
      });

    });
