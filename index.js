var express=require('express');
var app=express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var moment = require('moment');
moment().format();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(methodOverride());

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
});



app.get('/checkdate/:id',function(req,res){
  var myDate;
  //if(/^\d{8,}$/.test(req.params.id)) {
    myDate = moment(req.params.id);
  //} else {
//    myDate = moment(req.params.datestring, "MMMM D, YYYY");
 // }

  if(myDate.isValid()) {
    res.json({
      unix: myDate.format("X"),
      natural: myDate.format("MMMM D, YYYY")
    });
  } else {
    res.json({
      unix: null,
      natural: null
    });
  }
});

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("i am running");
    
});
