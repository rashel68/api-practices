
// load data 
function loadData(inputData) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}


// User 

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(user => getUser(user))
}

function getUser(users) {
    const ul = document.getElementById('listContainer');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `User Name: ${user.name} | Email: ${user.email}`;
        ul.appendChild(li);
    }
}



