// alert(num);


var num = 10;
var sNum = "10";
console.log(num === sNum);
var num2;
console.log(!!num2);     
/*
    !(낫 not) 연산자를 활용하여 문자, 숫자 등의 자료를 논리데이터로 변환하는 법
    var num = 10;
    !!num -> true
    num = 0;
    !!num -> falses

    var str = "test"
    !!str -> true
    var str = ""
    !!str -> falses

    var array = [ 1, 2, 3 ];
    !!array -> true
    var array = []
    !!array -> true
    !!array.length -> false
    array.length === 0 -> false
*/

console.log("------------------------------------------------");
var num = 0;
console.log("num = 0 " + !!num);
var str = ""; //공백 도 포함도 false
console.log(!!str);
var array = [];
console.log(!!array);
console.log(!!array.length);
var array2 = [ 1, 2 ];
console.log(!!array2.length);

var a;
console.log(!!a);
var b = null;
console.log(!!b);
var c = 0 / 0; //NaN 계산할수 없다
console.log(c); 
console.log(!!c); 

// if(num === 0) {
//     console.log("num은 0입니다");
// }

if(!num) {
    var num2 = 20;
    console.log("num은 0입니다,");
    if(!!num2) {
            console.log("num2는 값이 있습니다.")
    }
}



if(!str) {
    console.log("빈 문자열입니다.");
}

if(!b) {
    console.log("Null입니다.");
}
