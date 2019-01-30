"use strict";
var _this = this;
var dieArray = [];
var Die = /** @class */ (function () {
    function Die(value, div) {
        var _this = this;
        this.value = value;
        this.div = div;
        this.value;
        this.roll();
        this.div = $("<div></div>");
        this.div.text(this.value);
        $("#dieDiv").append(this.div);
        this.div.css({
            "background-color": "grey",
            "height": "100px",
            "width": "100px",
            "float": "left",
            "margin-top": "1em",
            "margin-left": "1em",
            "border-radius": "15px",
            "text-align": "center",
            "line-height": "100px"
        });
        this.div.click(function () {
            _this.roll();
            _this.div.text(_this.value);
        });
        $("#rollBtn").click(function () {
            dieArray.forEach(function () {
                _this.roll();
                _this.div.text(_this.value);
            });
        });
        this.div.dblclick(function () {
            _this.removeDie();
        });
    }
    Die.prototype.roll = function () {
        this.value = Math.floor((Math.random() * 6) + 1);
    };
    Die.prototype.removeDie = function () {
        this.div.remove();
        var index = dieArray.indexOf(this);
        if (index !== -1) {
            dieArray.splice(index, 1);
        }
    };
    return Die;
}());
$("#generateBtn").click(function () {
    var die = new Die(_this.value, _this.div);
    console.log(die);
    dieArray.push(die);
});
$("#sumDice").click(function () {
    var result = sumDice(dieArray);
    alert(result);
});
var sumDice = function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i].value;
    }
    return sum;
};
