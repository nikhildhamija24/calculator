/**
 * Created by Nikhil-PC on 10/11/2016.
 */
exports.multiply = function (req, res) {
    var obj = new Object();
    var num1 = req.body.num1;
    console.log(num1);
    var num2 = req.body.num2;
    console.log(num2);
    var num3;
    if(num1 != null && num2 != null){
        num3 = parseFloat(num1) * parseFloat(num2);
        obj.output = num3;
        res.send(obj);
    }else {
        obj.output = "invalid input";
        res.send(obj);
    }
};