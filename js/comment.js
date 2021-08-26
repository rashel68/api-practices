function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(res => res.json())
        .then(data => creatComment(data))
}
loadComment();

function creatComment(dataIn) {
    const container = document.getElementById('comment-container');
    for (const comment of dataIn) {
        const div = document.createElement('div');
        div.classList.add('comment-box');
        div.innerHTML = `<h3>Comment No: ${comment.id}</h3> <h4>Name: ${comment.name}</h4> <h5>Email: ${comment.email}</h5> <p>${comment.body}</p>`;

        container.appendChild(div);
    }
}