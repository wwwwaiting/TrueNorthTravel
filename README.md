# TrueNorthTravel

Collaborate with Cami Guo and Zeping Qu  

Deployed website: https://thetruenorth.herokuapp.com  

#### Main Goal
Provide help when people have trouble planning a trip in Canada.
#### Technology Used
Using ejs, MongoDB, mongoose, body-paser, cookie-parser, node.js, express, HTML, CSS, jQuery, AJAX, JavaScript and Google Place API for the RESTful website development. 
 
#### General Introduction

When users first enter the web, they will find an one-minute intro-video, showing the most beautiful views of Canada. After 7 seconds, the text "click to enter" fade in.   
The navigation bar is consisting of 6 parts: ***True North Travel***, ***Home***, ***About***, ***Search***, ***Suggestion*** and ***Login***. ***True North Travel*** will bring the whole page up to top. ***Home*** has similar function as the ***True North Travel*** button, in case when users don't know the ***True North Travel*** button is clickable. When the users click on the rest of the parts, the website will scroll to corresponding sections. 

The ***Login*** button is where user can create and manage their own account, is the first feature for front-end/back-end interaction. Each users would have to have a unique username and email address. and thus users would be notified if they entered an used email or username during registration. Users would also be notified if they have entered wrong email or password during login. After user logs in, they will redirected to the user page with their user names displayed at the top-right corner, right next to the ***Log Out*** button.
The ***Search*** section is equiped as a 2-input search form. Users can type in any activity they want to do in Canada. If possible, they can also type in a province or territory as the desired destination. The default province is Ontario. So if user does not have a place in mind, we will display all the choices for their input activity in Ontario.

In the ***Suggestion*** section, there are 6 default activities. Each one will lead the page to display a new view containing 9 choices. If there are only few choices (less than 9) we get from Google Place api, we will display as much as we have. We apply a filter that will rank the results based on the rating, in non-increasing order. Also, if there is any place that does not fit the type of activity, we will delete it. When user click on one of 9 choices on the page, we will show a ***modal***  with detailed informations. For instance, rating, address, bigger view of picture, a link to google map and comments.  

Now, users are enabled to save their own ***favourite list*** when they are checking modal with detailed informations. After clicking on ***Add to favourite***, back-end server will receive a POST request to add the place in user's favourite list. A certain place can only be add once into ones account, clicking on ***add to favourite list*** multiple times, and the website would inform the user that the selected place is already in his/her favourite list. If user click on ***Home*** in navigation bar, it will direct it back to the main view.
