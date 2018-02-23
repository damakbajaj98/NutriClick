const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/
const app = new Clarifai.App({
 apiKey: 'b03ed84e3ff9469d8746ac2260d6e5fc'
});





// add inputs with concepts
function predict(){
  app.inputs.create([{
    "url": "http://www.vegrecipesofindia.com/wp-content/uploads/2017/05/sada-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  }, {
    "url": "http://www.vegrecipesofindia.com/wp-content/uploads/2017/05/sada-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  }, {
    "url": "https://www.ndtv.com/cooks/images/kuttu.dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://www.foodfitnessbeautyandmore.com/wp-content/uploads/2017/03/brown-rice-dosa-chatni-sambar-aloo.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://www.mustgaze.com/wp-content/uploads/2017/07/INDIAN-MASALA-DOSA-New-in-York-Street-Food.png",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://indianhealthyrecipes.com/wp-content/uploads/2016/03/dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://hebbarskitchen.hebbars.netdna-cdn.com/wp-content/uploads/2016/11/masala-dosa-recipe-masala-dosa-batter-recipe-in-mixie-22.jpeg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://hebbarskitchen.hebbars.netdna-cdn.com/wp-content/uploads/mainPhotos/spring-dosa-recipe-schezwan-dosa-recipe-chinese-dosa-recipe-2.jpeg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Smitha-Kalluraya/Manglorean_Soya_Dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://www.thasneen.com/cooking/wp-content/uploads/2014/06/thattil-kutti-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://www.vegrecipesofindia.com/wp-content/uploads/2013/05/mysore-masala-dosa-2.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://d3j4nopn8wm92b.cloudfront.net/sites/default/files/styles/recipe_main/public/Dosa%20and%20chutney.jpg?itok=Kqslnt1_",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://yummyindiankitchen.com/wp-content/uploads/2016/02/plain-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://myhometastes.files.wordpress.com/2011/04/dsc01050.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://www.yummytummyaarthi.com/wp-content/uploads/2011/12/1-1.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://www.yummytummyaarthi.com/wp-content/uploads/2012/01/1-1.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://usercontent2.hubstatic.com/13298333_f520.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://www.dosacrepecafe.com/images/dosa-2.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://i.ytimg.com/vi/CGjOJ2VZmb8/maxresdefault.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://www.framedrecipes.com/wp-content/uploads/2014/03/DSC_3854_Dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "http://www.newtasteofindia.com/wp-content/uploads/2015/04/rsz_masala-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://pull-revisfoodography.netdna-ssl.com/wp-content/uploads/2015/09/paneer-masala-dosa-main.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://talkofthetown.restaurant/wp-content/uploads/2015/09/mysore-sada-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://lh6.googleusercontent.com/proxy/ypLCjyMgI5Pnwky3csXlOwSmtiZ-nxJZp6c6cJla8KwFT-3pOBhlj8WBwnmchOvju2TIcNXL36bijyTfYTrlbv6IG0nyDJ22CO7gLDvq3wz8dJrG=w1200-h630-p-k-no-nu",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://talkofthetown.restaurant/wp-content/uploads/2015/09/paneer-masala-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  },{
    "url": "https://indianhealthyrecipes.com/wp-content/uploads/2012/07/andhra-sambar-recipe-south-indian-sambar.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://i.ytimg.com/vi/1xiO1AG94Hs/maxresdefault.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "https://indianhealthyrecipes.com/wp-content/uploads/2012/07/drumstick-sambar-recipe.jpg",
    "concepts": [
      { "id": "dosa", "value": false},
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  },{
    "url": "http://mallikascookery.com/wp-content/uploads/2014/09/sambar.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  }, {
    "url": "http://farm9.staticflickr.com/8522/8609429154_799e558c9a_z.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  }, {
    "url": "http://4.bp.blogspot.com/--8817mMi0Zk/VJXQCoiUHwI/AAAAAAAAOs4/qVAQDZqfpzU/s640/butternut_squash_sambar1.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":false}
    ]
  }, {
    "url": "https://mypinchofyum.files.wordpress.com/2015/10/coconut-chutney-2.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  }, {
    "url": "http://www.madhurasrecipe.com/media/coconut-chutney-13.jpg",
    "concepts": [
      { "id": "dosa", "value": false },
      {"id": "sambhar", "value": false},
      {"id": "chutney","value":true}
    ]
  }, {
    "url": "http://www.sailusfood.com/wp-content/uploads/2011/11/chutney-sambar-dosa.jpg",
    "concepts": [
      { "id": "dosa", "value": true },
      {"id": "sambhar", "value": true},
      {"id": "chutney","value":true}
    ]
  }]).then(
    createModel,
    function(er){
      console.log(er);
    }
  );

  // once inputs are created, create model by giving name and list of concepts
  function createModel(inputs) {
    app.models.create('dsc', ["dosa", "sambhar","chutney"]).then(
      trainModel,
      function(err){
        console.log('error2');
      }
    );
  }

  // after model is created, you can now train the model
  function trainModel(model) {
    model.train().then(
      predictModel,
      function(err){
        console.log('error 3')
      }
    );
  }

  // after training the model, you can now use it to predict on other inputs
  function predictModel(model) {
    model.predict('dsc',['http://www.sailusfood.com/wp-content/uploads/2011/11/green-chili-chutney-dosa.jpg']).then(
      function(response) {
                  console.log(response.outputs[0].data.concepts);

      }, errorHandler
    );
  }

  function errorHandler(err) {
     console.log('error hun main');
    // console.error(err);
    throw err;
  }

}

// module.exports={
predict();
// }
