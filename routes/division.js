/**
 * Created by Nikhil-PC on 10/11/2016.
 */
exports.divide = function (req, res) {
    var obj = new Object();
    var num1 = req.body.num1;
    console.log(num1);
    var num2 = req.body.num2;
    console.log(num2);
    var num3;
    if(num1 != null && num2 != null){
        var n1 = parseFloat(num1);
        var n2 = parseFloat(num2);
        if(n2 == 0){
            obj.output = "Division by 0 not allowed";
            res.send(obj);
        }
        num3 = n1 / n2;
        obj.output = num3;
        res.send(obj);
    }else {
        obj.output = "invalid input";
        res.send(obj);
    }
};