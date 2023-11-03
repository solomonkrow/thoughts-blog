const newPostHandler = async (event) => {
    event.preventDefault();
    console.log('form submiited');
    const title = document.querySelector('#post-title').value.trim();
    console.log(title);
    const content = document.querySelector('#post-content').value.trim();
    console.log(content);
    // TODO verify route below
    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to create post');
        }
    }
};

// TODO verify route below
const delPostHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPostHandler);

document
    .querySelector('#submit-post-btn')
    .addEventListener('click', newPostHandler);
    

/* document
    .querySelector('.post-list')
    .addEventListener('click', delPostHandler); */