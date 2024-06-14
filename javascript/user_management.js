const names = ["김준일", "김준이", "김준삼"];
console.log(names.join(""));



let userList = []; //userList 배열 생성
let emptyUser = {   //emptyUser 객체생성
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({username, password}, index) => {
        return `
        <tr>
            <td>${index +1}</td>
            <td>${username}</td>
            <td>${password}</td>
        </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {        //handleUserInputKeyDown 함수
    // user = {
    //     ...user,
    //     [e.target.name]: e.target.value
    // }

    // user.username = e.target.value;

    




   

    if(e.keyCode === 13) {
        const passwordInput = document.querySelector(".password-input");
        const usernameInput = document.querySelector(".username-input");

        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {
            userList = [ ...userList, { ...user } ];
            // userList = [ ...userList, user ];

            renderTable();

            console.log(userList);
            usernameInput.value = emptyUser.username;
            passwordInput.value = emptyUser.password;


            usernameInput.focus();
        }
    }
    console.log(e.target.name);
}