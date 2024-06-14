
function printUser(user) {      
    console.log(`사용자이름: ${user.username}`);
    console.log(`비밀번호: ${user.password}`);
    console.log(`이름: ${user.name}`);
    console.log(`이메일: ${user.email}`);


}

function printUser2({ username, password, name, email }) {       //매개변수로 비구조할당으로 받음
    console.log(`사용자이름: ${username}`);
    console.log(`비밀번호: ${password}`);
    console.log(`이름: ${name}`);
    console.log(`이메일: ${email}`);


}

function main() {
    const user = {
        username: "admin",
        password: "1234",
        name: "김준일",
        email: "aaa@gmail.com"
        }

        printUser(user);
        printUser2(user);

        const { username, password, ...newUser} = user
        console.log(username);
        console.log(newUser);

}

main();