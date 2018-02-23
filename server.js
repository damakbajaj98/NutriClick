const express=require('express');
const bodyParser= require ('body-parser');
const hbs=require('hbs');
const app=express();
const multer=require('multer');
const predict = require('./predict_photo.js')
const fs=require('fs');

const database=require('./database.js')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/',express.static('public'));

app.use(function(err, req, res, next){
  //set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err:{};

  //render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.set('view engine','hbs' );
app.set('views','views');

const multerConf = {
  storage: multer.diskStorage({
    destination : function(req, file, next){
      next(null, './public/uploads');
    },
    filename: function(req, file, next){
      const ext = file.mimetype.split('/')[1];
      const fileName=file.fieldname + '-' +Date.now()+ '.' +ext;

      next(null,fileName);
      //console.log(file);

    }
  })
};

app.get('/shuruKro', function(req,res,next){
  console.log('in get');
  database.getUser(function(us){
    console.log(us);
    res.render('page2',{data:us,percentage:(us.calNow/us.totalCal)*100});
  });

})

app.get('/meals', function(req,res,next){
  res.render('page3');
})


app.post('/shuruKro',function(req,res){
  console.log('in post');
  // console.log(req);
  // console.log(req.body)
  var formData=req.body;
  // console.log(formData);
  var totalCal=0;
  if(formData.gen=="male"){
    totalCal=66.5+ (13.8*formData.wei)+(5*formData.hei)-(6.75*formData.ag);
  }
  else{
  totalCal=665.1+ (9.6*formData.wei)+(1.9*formData.hei)-(4.7*formData.ag);
  }
if(formData.opti==1){
  totalCal=totalCal-500;
}
else if(formData.opti==2){
  totalCal=totalCal+500;
}

  // console.log(Cal);
  database.addTotalCalToUser(totalCal,function(err){
    if(err) throw err;
    res.sendStatus(200);
  });

});

app.get('/add',function(req,res){
    res.render('page4');           ///iss route pe uplaod waala html hogaaa
})

app.post('/upload', multer(multerConf).single('myImage'), function(req,res){

     console.log(req.file);
     // read binary data
   var bitmap = fs.readFileSync(req.file.path);
   // convert binary data to base64 encoded string
     var imgurl=new Buffer(bitmap).toString('base64');
     predict.predict(imgurl,function(){
       res.redirect('/shuruKro');
     });


  }
);




app.listen(7171,function(){
  console.log('server running on port 7171');
   database.connect();
})
