var mongoose = require("mongoose");
var options = {
  useMongoClient: true,
  socketTimeoutMS: 0,
  keepAlive: true,
  reconnectTries: 30
};


//var url = "mongodb://localhost/csc309db";
var url = "mongodb://tnt:tnt@ds135876.mlab.com:35876/csc309db";
var db = mongoose.connect(url,options);
