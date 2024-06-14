// 비구조 할당, 구조 분해  *중요
function main() {
    const user = {
    username: "admin",
    password: "1234",
    name: "김준일",
    email: "aaa@gmail.com"
    }

    const names = [ "박현주", "이성희", "권오광", "권혁진" ];

    const { username, password, email } = user; //user 객체에서  username, password, email 변수에 담는다
    console.log(username);
    console.log(password);
    console.log(email);

    const [ a, b, d ] = names;
    console.log(a);
    console.log(b);
    console.log(d);

    //rest
    const { name, ...newUser } = user;  // user 객체에서 name 제외한 나머지 키값을 들고와서 newUser객체생성
    console.log(newUser);
    console.log(name);

    console.log(names.slice(1, 3));     //배열 인덱스 범위 지정 1번 부터 3번 전까지

    
}

main()