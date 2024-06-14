function modifyUser(user, target, value) {
    const newUser = {
        ...user,        //user 안에있는 키랑벨류만 복사
        [target]: value     
    };
    return newUser;
}


function main() {
    let user = {
        username: "admin",
        password: "1234"
    }

    // delete user.password;

    
    


    console.log(user);

    const newUser = modifyUser(user, "username", "test-user");

    console.log(newUser);

    const newUser2 = modifyUser(newUser, "password", "1111");
    console.log(newUser2);

    const userList = [ user, newUser ];     //100번 주소
    const newUserList = [ ...userList, newUser2 ];    //200번 주소

    // 스프레드 -> 깊은 복사 - 값들을 복사해서 새주소에 담음

    const userList2 = userList; // 얕은 복사 - 주소만 복사

    const [ a, b, c ] = newUserList;

    const { username, password } = newUserList[0];

}

main();