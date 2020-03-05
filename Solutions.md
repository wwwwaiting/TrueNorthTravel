- Student 1: Fanxuan Guo (1003110288)
- Student 2: Luya Wang (1001445395)
- Student 3: Zeping Qu (1002708377)

Explanation and Instruction:

In assignment 3, we used ejs, MongoDB, mongoose, body-paser, cookie-parser, node.js, express, HTML, CSS, jQuery, AJAX, JavaScript and Google Place API for our website development. The main goal for our website is to provide help when people have trouble planning a trip in Canada.
  
When users first enter the web, they will find an one-minute intro-video, showing the most beautiful views of Canada. After 7 seconds, the text "click to enter" fade in.

For the header of "True North Travel", we include an navigation bar. It is made up by 6 parts, "Title", "Home", "About", "Search", "Suggestion" and "Login". "Title" will bring the whole page up to top. "Home" has similar function as "Title", in case when users don't know the "Title" is clickable. When the users click on the rest of the parts, the website will scroll to corresponding sections. 

Additionally, the "Login", where user can create and manage their own account, is the first feature for front-end/back-end interaction. Each users would have to have a unique username and email address, and thus users would be notified if they entered an used email or username during registration. Users would also be notified if they have entered wrong email or password during login. After user logs in, they will find their user page with "Hi, xxxx" at the top-right corner, right next to "Log Out".

In the "Search" section, we have a 2-input search form. Users can type in any activity they want to do in Canada. If possible, they can also type in a province or territory as the desired destination. The default province is Ontario. So if user does not have a place in mind, we will display all the choices for their input activity in Ontario.

In the "Suggestion" section, there are 6 default activities. Each one will lead the page to display a new view containing 9 choices. If there are only few choices (less than 9) we get from Google Place api, we will display as much as we have. We apply a filter that will rank the results based on the rating, in non-increasing order. Also, if there is any place that does not fit the type of activity, we will delete it. When user click on one of 9 choices on the page, we will show a modal with detailed informations. For instance, rating, address, bigger view of picture, a link to google map and comments.  

Now, users are enabled to save their own favourite list when they are checking modal with detailed informations. After clicking on "Add to favourite", back-end server will receive a POST request to add the place in user's favourite list. A certain place can only be add once into ones account, clicking on "add to favourite list" multiple times, and the website would inform the user that the selected place is already in his/her favourite list. If user click on "Home" in navigation bar, it will direct it back to the main view.
 
The addition front-end/back-end interaction features are posting comments for different places, changing password and modifying favourite list by deleting place. This makes our server RESTful.

Deployed website: https://truenorthtravel.herokuapp.com/
