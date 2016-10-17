/* GET home page. */
exports.index = function(req, res){
  res.render('calculator', function(err, data) {
    if (err)
      console.error(err);
    else {
      res.send(data);
    }
  });
};
