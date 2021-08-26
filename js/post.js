// Post 

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => creatPost(data))
}
loadPosts();

function creatPost(dataIn) {
    const postContainer = document.getElementById('post-container');
    for (const post of dataIn) {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${post.title}</h3> <p>${post.body}</p>`;
        div.classList.add('postContainer');
        postContainer.appendChild(div);
    }

}
