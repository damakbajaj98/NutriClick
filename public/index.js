// $(document).ready(function(){


  var btn1= $('#btn1');
  var option1= $('#option1');
  var option2= $('#option2');
  var option3= $('#option3');
  var option4= $('#option4');
  var height=$('#height');
  var weight=$('#weight');
  var gender=$('#gender');
  var age=$('#age');
  var h,g,a,w;
  height.change(function(){
    h=height.val();
  });
  weight.change(function(){
    w=weight.val();
  })
  gender.change(function(){
    g=gender.val();
  })
  age.change(function(){
    a=age.val();
  })


  var temp=0;




  option1.on('click',function(){
    temp=1;
  });
  option2.on('click',function(){
    temp=2;
  });
  option3.on('click',function(){
    temp=3;
  });
  option4.on('click',function(){
    temp=4;
  });



  btn1.on('click',function(){
    console.log(temp);


    if(temp==0)
    {
      window.alert("Please select an option!")

    }
    else{
      console.log(temp,h,w,g,a);
      $.ajax({

        url:'/shuruKro',
        type: 'POST',
        data:{'opti':temp,'hei':h,'wei':w,'gen':g,'ag':a},
        success:function(result){
          console.log("hogya submit what you wanna accomplish")
          $.get({url:`/shuruKro`,success:function(res){
              window.location=`/shuruKro`;
          }});
        }
      });
    }
  });

// })
