const Clarifai = require('clarifai');
const database = require('./database.js');

// initialize with your api key. This will also work in your browser via http://browserify.org/


const app = new Clarifai.App({
 apiKey: 'b03ed84e3ff9469d8746ac2260d6e5fc'
});

function predict(photo,callback){
app.models.predict('dsc',{base64:photo}).then(
  function(response) {
    console.log('hey');
    var result=response.outputs[0].data.concepts;
    console.log(result);
    var arr =[];
    for(var i=0;i<result.length;i++){
      console.log(result[i].value)
      if(result[i].value>0.7){
        arr.push(result[i].name);
        // detect(result[i].name);         //detect function defined in db.js => iss file ko include krna hai
      }
    }
    console.log(arr);
    database.detect(arr,callback);
  },
  function(err) {
    console.log('hi');
    console.error(err);
  }
);
}

// predict("https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/03/brown-rice-dosa-chatni-sambar-aloo.jpg")
module.exports={predict};   //jab bhi predict call hoga, callback function me likhna hai
