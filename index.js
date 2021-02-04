//var i = 2;
// while (j <= 10) {
//     document.write(i + "*" + j + "=" + (i * j));
//     document.write("<br>")
//     j++;
// }

// do {
//     document.write(i + "*" + j + "=" + (i * j));
//     document.write("<br>")
//     j++;
// }
// while (j <= 10);

// for (var j = 1; j <= 10; j++) {
//     document.write(i + "*" + j + "=" + (i * j));
//     document.write("<br>")
// }
// var t = "try"
// var intArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
// var strArr = ["ajay", "abhi", "sonu", "monu", "tinki", "pdru"];
// strArr.reverse();
// var check = Array.isArray(intArr);
// document.write(intArr.indexOf(4));
// for (var i = 0; i <= strarr.length - 1; i++) {
//     document.writeln(strarr[i]);
//     document.write("<br>")
// }
// function clickMe() {
//     var name = confirm("What is your name?");
//     if (name == true) {
//         window.open("https://www.facebook.com");
//         return true;
//     } else {
//         document.write("does not");
//         return false;
//     }
// }
// var str = "ajay kumar";
// document.write(typeof(str));
// document.writeln("<br>");
// var str1 = new String("ajay kumar");
// document.write(typeof(str1));
// document.writeln("<br>");
// document.write(str === str1);
//string method in javascript --string gives primitives values
// var str = "ajay kumar ajay";
// var str1 = new String("ajay kumar ajay");
// document.writeln(str1.concat(str));
//create new element
// var para = document.createElement("p");
// var textNode = document.createTextNode("new para");
// para.append(textNode);
// console.log(para);
// document.body.appendChild(para);
// var firstEle = document.querySelector("ul");
// console.log(firstEle.firstChild);

// document.getElementById('para').style.color = "red";
// document.getElementById('para').setAttribute(
//         "style",
//         "color: red;
//         background - color: yellow;
//         ");
// document.write(window.location.href);

// function myFun() {
//     window.location = "https://www.facebook.com";
//     window.location.assign("https://www.youtube.com")
// }
// function fullFuns() {
//     window.print()
// }

// function myFuns(params) {
//     var backup = document.body.innerHTML;
//     var text = document.getElementById(params).innerHTML;
//     document.body.innerHTML = text;
//     window.print();
//     document.body.innerHTML = backup;
// }
//events
//js date
// var d = new Date(2034, 10, 34);
// document.write(d);
//Eval function- evaluate an argument
// var x = 20;
// var y = 30;
// var a = eval("x * y") + "<br>";
// var b = eval("3 * 4") + "<br>";
// var c = eval("x * 45") + "<br>";
// console.log(a + b + c);
// console.log(eval('2+2') == eval('4'));
//Math object
// var x = 12;
// document.write(Math.floor(Math.random() * 20));

// function reverseString() {
//     var str = document.getElementById("input1").value;
//     var newStr = "";
//     for (var i = str.length - 1; i >= 0; i--) {
//         newStr += str[i];
//     }

//     document.getElementById("input2").value = newStr;
// }
function calculateLove() {
    if (!document.getElementById("input1").value) {
        alert("Please enter your name");
    } else if (!document.getElementById("lovername").value) {
        alert("Please enter your lover name");
    } else if (document.getElementById("lovername").value.length <= 2 || document.getElementById("input1").value.length <= 2) {
        alert("Minimum length is 3");
    } else if (isNaN(document.getElementById("lovername").value.length <= 2) || isNaN(document.getElementById("input1").value.length <= 2)) {
        alert("Numbers are not allowed");
    } else if (!document.getElementById("input1").value && !document.getElementById("lovername").value) {
        alert("Please enter your and your lover name");
    } else {
        var getRandomNumber = Math.floor(Math.random() * 100);
        document.getElementById("lovevalue").value = getRandomNumber + "%";

    }

}