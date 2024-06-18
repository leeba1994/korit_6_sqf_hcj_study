let todoList = [];
loadTodoList();

// let emptyTodo = {
//     id: 0,
//     content: "",
//     date: "",

// }

// let todo = {
//     ...emptyTodo
// }

function handleTodoInputKeyDown(e) {
    if(e.keyCode === 13) {
        handleTodoOkClick();
    }
}

function handleTodoOkClick(e) {
    const todoInput = document.querySelector(".todo-input");
    if(isBlank(todoInput)) {
        alert("내용을 입력하세요");
        clearTodoInput();
        return;
    }
    addTodo();
    clearTodoInput();
}

function addTodo() {
    const todo = {
        id: createNewId(),
        content: document.querySelector(".todo-input").value,
        date: trasformDate(new Date())
    }

    todoList = [ ...todoList, todo ];
    saveLocalStorage();
    loadTodoList();
}

function createNewId() {
    const todoIdList = todoList.map(todo => todo.id);
    const maxId = !todoIdList.length ? 0 : Math.max.apply(null, todoIdList);
    return maxId + 1;
}

function saveLocalStorage() {
   localStorage.setItem("todoList", JSON.stringify(todoList));
}

function loadTodoList() {
    const lsTodoList =  localStorage.getItem("todoList");
    todoList = !lsTodoList ? [] : JSON.parse(lsTodoList);
    renderTodoList();
}

function renderTodoList() {
    const todoLisrConteiner = document.querySelector(".todo-list-conatiner");
    todoLisrConteiner.innerHTML = todoList.map(todo => {
        return `
             <li class="todo-card">
                    <h3 class="todo-date">${todo.date}</h3>
                    <p class="todo-content">${todo.content}</p>
                    <div class="todo-buttons">
                        <button class="button edit-button" value="${todo.id}">수정</button>
                        <button class="button delete-button" onclick="handleDeleteClick(event)" value="${todo.id}">삭제</button>
                    </div>
            </li>
        `
    }).join("");
}

function clearTodoInput() {
    const todoInput = document.querySelector(".todo-input");
    todoInput.value = "";
    todoInput.focus();
}

function isBlank(input) {
    // "010-9988-1916".replace("-","");
    
    return !input.value.replaceAll(" ","");
}

function trasformDate(date) {
    const dayList = [ "일", "월", "화", "수", "목", "금", "토" ];
    // const now = new Date();
    // now.getSeconds
    return `${date.getFullYear()}.${date.getMonth() +1}.${date.getDate()}.(${dayList[date.getDay()]}) ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    // 2024 05 18(화)
    // const year = date.getFullYear();
    // const month = date.getMonth() + 1;       // 0 ~ 11월
    // const date = date.getDate();
    // const day = date.getDay();

    // console.log(`${year}년 ${month}월 ${date}일 ${day}요일`);
}

function handleDeleteClick(e) {
    if(confirm("정말로 삭제하시겠습니다까?")) {
        todoList = todoList.filter(todo => todo.id !== parseInt(e.target.value));
        saveLocalStorage();
        loadTodoList();
    }
}

function handleModifyClick(e) {
    if(confirm("정말로 삭제하시겠습니다까?")) {
        todoList = todoList.filter(todo => todo.id !== parseInt(e.target.value));
        saveLocalStorage();
        loadTodoList();
    }
}
