var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var foodSchema= new Schema({
    id   : ObjectId,
    name     : String,
    calories     : Number,
    quantity: Number
});

var userSchema= new Schema({
  id: ObjectId,
  name: String,
  kyaKhaya: Array,
  totalCal: Number,
  calNow: Number
})

var food = mongoose.model('food',foodSchema);
var user= mongoose.model('user',userSchema);
var item1= new food({name:'sambhar', calories:100});
var item2= new food({name:'dosa', calories:200});
var item3= new food({name:'chutney', calories:20});
// var user2=new user({name:'temp1', kyaKhaya:new Array()});


function connect(){
mongoose.connect('mongodb://damak:password@ds239368.mlab.com:39368/projectdb',function(err){
  if(err) throw err;
  console.log("connected");
});
}



function detect(item,callback){
  console.log('in detect');
  var arr2=[];
  if(item.length==0)
    addFoodToUser(arr2,callback);
  for(var i=0;i<item.length;i++){
    food.find({'name': item[i]},function (err,result) {
      if (err) throw err;
      console.log(result);
      arr2.push(result[0]);
      if(arr2.length==item.length)
        addFoodToUser(arr2,callback);

    })

    }

  }



function addFoodToUser(khaana,callback){
  user.find({'name': 'admin'},function (err,userr) {
    if (err) throw err;
    var arr=userr[0].kyaKhaya;
    for(var i=0;i<khaana.length;i++)
      arr.push(khaana[i]);
    console.log(arr);
    user.update( {'name':'admin'},{$set:{ kyaKhaya: arr }} , function(err,userFin){
      console.log(userFin);
      callback(khaana);
    });
  })

}

function addTotalCalToUser(totalCal,callback){
    user.update( {'name':'admin'},{$set:{ 'totalCal': totalCal }} , function(err,userFin){
      if(err) throw err;
      console.log(userFin);
      callback();
    });

}

function updateQuantity(quanArray,cb){
    user.find( {'name':'admin'}, function(err,userr){
      if(err) throw err;
      var calCnt=userr[0].calNow;
      console.log(userr);
      var kyaKhaya=userr[0].kyaKhaya;
      var len1=kyaKhaya.length;
      var len2=quanArray.length;
      for(var i=0;i<len2;i++){
         kyaKhaya[len1-1-i].quantity=quanArray[len2-1-i].quantity;
         calCnt=calCnt+(kyaKhaya[len1-1-i].calories*kyaKhaya[len1-1-i].quantity);
       }
       user.update( {'name':'admin'},{$set:{ 'kyaKhaya': kyaKhaya ,calNow:calCnt}} , function(err,userFin){
         if(err) throw err;
         console.log(userFin);
         cb();
       });
     });

  }


function getUser(callback){
  user.find({'name': 'admin'},function (err,userr) {
    if (err) throw err;
    callback(userr[0]);
  })
}



module.exports={
  connect,detect,addTotalCalToUser,getUser,updateQuantity
}


// var mongoose = require('mongoose');
// const foodl=require('./food.js')
//
// var Schema = mongoose.Schema;
//  var ObjectId = Schema.ObjectId;
//
// var foodSchema = new Schema({
//     id : ObjectId,
//     name : String,
//     calories : Number
// });
//
// var mmodel=mongoose.model('food', foodSchema);
// function connect(){
//   mongoose.connect('mongodb://localhost/6600',function(){
//   console.log(foodl.foodlist);
// });
// }
//
// module.exports={connect};
