function getAlbum() {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => loadAlbum(data))
}

getAlbum();

function loadAlbum(dataIn) {
    const container = document.getElementById('album-container');
    for (const album of dataIn) {
        const div = document.createElement('div');
        div.classList.add('sigleAlbum');
        div.innerHTML = `<h3>${album.title}</h3> <img src='${album.thumbnailUrl}'>`;
        container.appendChild(div);

    }
}