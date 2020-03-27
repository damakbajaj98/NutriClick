# NutriClick

In an effort to make tracking daily calorie
intake easier, the webapp displays the food items and their calories consumed so far. User can add a consumed food item either by typing it
manually or by clicking a photo. It uses Clarifai API which detects the fooditem from the image, using a model pre-trained by us.
<br>
<br>
Front End: HTML, Bootstrap, Handlebars, JavaScript
<br>
Backend: NodeJS(ExpressJS)
<br>
NPM Packages: Multer, Mongoose, MongoDB, Hbs, Express, Clarifai
<br>
#### Step 1: Enter your details

Add your goal:

![Step 1a](/images/step1a.png)

Add your personal details:

![Step 1b](/images/step1-b.png)

This generates the optimal calorie count for the user. We add the image of the meal to detect calorie count of the meal.

![](/images/step1b.png)

#### Step 2: Upload image

![Step 2](/images/step2.png)

The clarifai API will automatically predict the food item in your picture.

#### Step 3: Specify quantity of food eaten

![Step 3](/images/step3.png)

#### Step 4: Calorie intake gets updated

![Step 4](/images/step4.png)
