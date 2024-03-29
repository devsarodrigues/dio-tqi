// seleção do DOM
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// eventos de escuta 
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

// funções 
function addTodo(event) {
    event.preventDefault()

//div todo
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

//li
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value
    todoLi.classList.add('todo-item');
    todoDiv.appendChild(todoLi)

//botões de marcação - tarefa concluída
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton)

    //add local storage
    saveLocalTodos(todoInput.value)

//botões de marcação - tarefa deletada
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton)

//adicionando em tela
    todoList.appendChild(todoDiv)

//limpar input
    todoInput.value = ''
}

// deleteandcheck
function deleteCheck (e) {
    console.log(e.target)

    const item = e.target
    const todo = item.parentElement

    //delete a tarefa
    if (item.classList[0] === 'trash-btn') {
        todo.classList.add('fall')
        //removelocaltodos(todo)
        removeLocalStorage(todo)
        todo.addEventListener('transitionend', () => {
            todo.remove()
        })
    }

// tarefa completa
    if (item.classList[0] === 'complete-btn') {
        todo.classList.toggle('completed')
    }
}

function filterTodo(e) {
    const todos = todoList.childNodes;

    todos.forEach((todo) => {

        switch (e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            
                case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            
                case 'uncompleted':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    })
}

function saveLocalTodos(Todo){

    let todos;
    
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){

    let todos;
    
    if(localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo) {

        //div todo
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //li
        const todoLi = document.createElement('li');
        todoLi.classList.add('todo-item');
        todoLi.innerText = todo
        todoDiv.appendChild(todoLi)

        //botões de marcação - tarefa concluída
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fa-solid fa-check"></i>'
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton)

        //botões de marcação - tarefa deletada
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fa-solid fa-trash"></i>'
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton)

        //adicionando em tela
        todoList.appendChild(todoDiv)
    })
}

function removeLocalStorage(todo) {
    
    let todos;
    
    if(localStorage.getItem('todos') === null){
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}