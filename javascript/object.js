const user = {      //객체 생성
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        firsName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호: ${user.password}`);   //`비밀번호: ${password}`  
    },
};       

const user2 = {      //객체 생성
    username: "admin",
    password: "1234",
    name: {
        lastName: "김",
        firsName: "준일"
    },
    print: () => {
        console.log("사용자이름: " + user.username);
        console.log(`비밀번호: ${user.password}`);   //`비밀번호: ${password}`  
    },
};     





console.log(user === user2);
console.log(user);
console.log(user.username);
console.log(user.password);
console.log(user.name.firsName);
user.print();

