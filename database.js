var mongoose = require('mongoose');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var foodSchema= new Schema({
    id   : ObjectId,
    name     : String,
    calories     : Number
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



function addFoodToUser(khaana,cb){
  user.find({'name': 'admin'},function (err,userr) {
    if (err) throw err;
    var calCnt=userr[0].calNow;
    for(var i=0;i<khaana.length;i++){
        userr[0].kyaKhaya.push(khaana[i]);
        calCnt+=khaana[i].calories;
    }

    var arr=userr[0].kyaKhaya;
    console.log(arr);
    user.update( {'name':'admin'},{$set:{ kyaKhaya: arr , calNow: calCnt}} , function(err,userFin){
      console.log(userFin);
      cb(userFin);
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

function getUser(callback){
  user.find({'name': 'admin'},function (err,userr) {
    if (err) throw err;
    callback(userr[0]);
  })
}



module.exports={
  connect,detect,addTotalCalToUser,getUser
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
