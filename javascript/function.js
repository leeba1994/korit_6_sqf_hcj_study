        //숫자는 실행순서
function add(x, y) {        // 1
    return x + y;
}
const result = add(10, 20);     // 4  3
console.log(result);        //5


// 오버로딩 불가, 정의가 먼저되어서 마지막 정의가 덮어짐
function add(x, y, z) {     // 2
    console.log(x);
    console.log(y);
    console.log(z);
}
console.log(x);

add(10, 20, 30)     // 6

