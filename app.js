var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var methodOverride = require('method-override');
var http = require('http');
var swal = require('sweetalert');


require('./connect.js');
require('./models/user.js');
require('./models/comment.js');

const Comment = mongoose.model('Comment');
const User = mongoose.model('User');  //model name
mongoose.Promise = global.Promise;
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/assets'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static('public'));
app.use(express.static('files'));
app.use('/static', express.static('public'));


const fal = 'false';
const tru = 'true';

//vids & main

app.get('/', function(req, res) {
  res.render('index');
})

app.get('/main', function(req, res) {
  res.render('main');
})

//login page

app.get('/login', function(req, res) {
  res.render('login');
})

app.post('/login',function (req, res) {
    var email = req.body.email;
    var pwd = req.body.pwd;
    var name;
    User.find({'email': email}, function(err, result){
      if (err) {
        console.log(err);
        res.send(fal);
      } else if (result.length === 0) {
        console.log('user does not exist!');
        res.send(fal);
      } else {
        var user = result[0];
        name = user.name;
        if (pwd === user.pwd) {
          res.cookie('name',name);
          res.send(tru);
        } else {
          res.send(fal);
        }
      }
    })

})

app.post('/register',function (req, res) {
    var name = req.body.name;
    var pwd = req.body.pwd;
    var email = req.body.email;
    var fav_list = new Array();
    User.find({'email':email}, function(err, result){
      if (err) {
        console.log(err);
      } else if (result.length === 0) {
        User.find({'name':name}, function(err, result){
          if (err) {
            console.log(err);
          } else if (result.length === 0) {
              var user = new User(
                  {
                    name: name,
                    pwd: pwd,
                    email: email,
                    favs: fav_list
                  });
              User.create(user, function(err, newlyCreated){
                  if(err){
                      console.log(err);
                  } else {
                    res.cookie('name', name);
                    res.send(tru);
                  }
              });
            } else {
              res.send(fal);
            }
        });
        } else {
          res.send(fal);
        }
    });
 })

//after login

app.get('/main2', function(req, res) {
   res.render('main2',{username:req.cookies.name});
 })

app.get('/favourite/list', function(req, res) {
  var username = req.cookies.name;
  User.find({'name': username}, function(err, result){
    if (err) {
      console.log(err);
    } else {
      var user = result[0];
      var data = user.favs;
      res.send({data:data});
    }
  });
})

app.post('/check', function(req, res){
  var name = req.body.name;
  var comments = new Array();
  console.log('check body ' + name);
  Comment.find({'name':name}, function(err, result){
    if (err) {
      console.log(err);
    } else if (result.length === 0) {
      res.send('null')
    } else {
      result.forEach(function(element){
        comments.push(element.comment);
      });
      console.log('comments' + comments);
      res.send(comments);
    }
  });
})

app.post('/comment', function(req, res) {
  var postName = req.body.name;
  var postAddress = req.body.address;
  var postComment = req.body.n;
  var newComment = new Comment(
  {
    name: postName,
    address: postAddress,
    comment: postComment
  })
  Comment.create(newComment, function(err, newlyCreated){
      if(err){
          console.log(err);
          res.send(fal);
      } else {
        res.send(tru);
        // add sth flag
      }
  });
})

app.post('/main2/addtofav', function(req, res) {
  var username = req.cookies.name;
  console.log(req.body);
  var favName = req.body.name;
  var favAddress = req.body.address;
  var favRate = req.body.rate;
  var favImg = req.body.img;
  User.find({'name': username}, function(err, result){
    if (err) {
      console.log(err);
    } else {
      var user = result[0];
      var flag = true;
      console.log(user.favs.length);
      for (var i=0; i<user.favs.length; i++) {
        if (user.favs[i].address === favAddress) {
          res.send(fal);
          flag = false;
        }
      }
     console.log('shit');
     console.log(flag);
     if (flag) {
        User.findOneAndUpdate({
          name : req.cookies.name
        }, {
          $push: {
            favs: {
              name:favName, address:favAddress, rate:favRate, img:favImg
            }
          }
        }, function(err, result) {
          if (err) {
            console.log(err);
            res.send(fal);
          } else {
            res.send(tru);
          }
        });
      }
     }
  });
  console.log('crap');
})

//favlist

app.get('/favourite', function(req, res){
  var username = req.cookies.name;
  var user;

  // User.find({'name': username}, function(err, result){
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     user = result[0];
  //   }
  res.render('favourite', {username:req.cookies.name});
})

// app.post('/favourite', function(req, res){
//   var postName = req.body.name;
//   var postAddress = req.body.address;
//   var postComment = req.body.comment;
//   var newComment = new Comment(
//   {
//     name: postName,
//     address: postAddress,
//     comment: postComment
//   })
//   Comment.create(newComment, function(err, newlyCreated){
//       if(err){
//           console.log(err);
//           res.send(fal);
//       } else {
//         res.send(tru);
//         // add sth flag
//       }
//   });
// })

app.put('/favourite', function(req, res){
  var pwd = req.body.pwd;
  User.findOneAndUpdate({name : req.cookies.name}, {pwd: pwd},function(err, result) {
    if (err) {
      console.log(err);
      res.send(fal);
    } else {
      res.send(tru);
    }
  });
})

app.delete('/favourite', function(req, res){
  var favAddress = req.body.address;
  User.findOneAndUpdate({
    name : req.cookies.name
  }, {$pull: {
        favs: {address:favAddress}
    }
  }, function(err, result) {
    if (err) {
      console.log(err);
      res.send(fal);
    } else {
      res.send(tru);
    }
  });
})



app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
