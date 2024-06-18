// const names = ["김준일", "김준이", "김준삼"];
// console.log(names.join(""));


// const lsUserList = localStorage.getItem("list");

// inputMode = 1 > 추가
// inputMode = 2 > 수정
let inputMode = 1;



let userList = []; //userList 배열 생성
loadUserList();

let emptyUser = {   //emptyUser 객체생성
    id: 0,
    user: "",
    username: "",
    password: ""
};

let user = {
    ...emptyUser
}

function renderTable() {
    const userTableBody = document.querySelector(".user-table-body");
    userTableBody.innerHTML = userList.map(({id, name, username, password}, index) => {
        return `
        <tr>
            <th><input type="checkbox" onchange="handleUserCheck(event)" value="${id}"></th>
            <td>${index +1}</td>
            <td>${id}</td>
            <td>${name}</td>
            <td>${username}</td>
            <td>${password}</td>
            <th><button onclick="deleteUser(event)" value="${id}">삭제</button></th>
        </tr>
        `;
    }).join("");
}

function handleUserInputKeyDown(e) {        //handleUserInputKeyDown 함수
    user = {
        ...user,
        [e.target.name]: e.target.value
    }

    // user[e.target.name] = e.target.value;

    
   

    if(e.keyCode === 13) {
        const body = document.querySelector("body");
        const nameInput = body.querySelector(".name-input");
        const usernameInput = document.querySelector(".username-input");
        const passwordInput = document.querySelector(".password-input");

        if(e.target.name === "name") {
            usernameInput.focus();
        }
        if(e.target.name === "username") {
            passwordInput.focus();
        }
        if(e.target.name === "password") {

            if(inputMode === 1 ){
                // const newUser = {
                //     ...user,
                //     id: getNewId()
                // };
            // userList = [ ...userList, newUser ];
            // }
            userList = [ ...userList, { ...user, id: getNewId() } ];
            }

            if(inputMode === 2 ){
                let findIndex = -1;
                for(let i = 0; i < userList.length; i++) {
                    if(userList[i].id === user.id) {
                        findIndex = i;
                        break;
                    }
                }
                if(findIndex === -1) {
                    alert("사용자 정보 수정 중 오류 발생. 관리자에게 문의하세요.");
                    return;
                }
                userList[ findIndex ] = user;
            }
            // userList = [ ...userList, user ];

            saveUserList()
            renderTable();
            // localStorage.setItem("list", JSON.stringify(userList));
            clearInputValue();



            nameInput.focus();
        }
    }
    // console.log(e.target.name);
}

function saveUserList() {
    localStorage.setItem("userList", JSON.stringify(userList));
}

function loadUserList() {
    const lsUserList = localStorage.getItem("userList");
    userList = !lsUserList ? [] : JSON.parse(lsUserList);
    renderTable();
}

function deleteUser(e) {
    userList = userList.filter(({id}) => id !== parseInt(e.target.value));
    saveUserList();
    renderTable();
}

function getNewId() {
   const userIds = userList.map(user => user.id);
   const maxUserId = userIds.length === 0 ? 20240000 : Math.max.apply(null, userIds);
   return maxUserId + 1;

}

function handleUserCheck(e) {
    //e.target.checked = true;
    const checkBoxList = document.querySelectorAll('input[type="checkbox"]');
    // console.log(checkBoxList);
    for(let checkBox of checkBoxList) {
        if(checkBox === e.target) {
            continue;
        }
        checkBox.checked = false;
    }

    if(e.target.checked) {
        inputMode = 2;
        const [ findUser ] = userList.filter(user => user.id === parseInt(e.target.value));
        setInputValue(findUser);
        user = {
            ...findUser
        }
        return;
    }

    inputMode = 1;
    clearInputValue();
    
}

function setInputValue(user) {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");

    // const [ findUser ] = userList.filter(user => user.id === id);
    nameInput.value = user.name;
    usernameInput.value = user.username;
    passwordInput.value = user.password;
}

function clearInputValue() {
    const nameInput = document.querySelector(".name-input");
    const usernameInput = document.querySelector(".username-input");
    const passwordInput = document.querySelector(".password-input");
    nameInput.value = emptyUser.user;
    usernameInput.value = emptyUser.username;
    passwordInput.value = emptyUser.password;

    inputMode = 1;
    user = {
        ...emptyUser
    }

  

}