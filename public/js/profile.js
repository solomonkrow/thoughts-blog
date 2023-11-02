const newFormHandler = async (event) => {
    event.preventDefault();
    // TODO update IDs below from views to get req.body
    const title = document.querySelector('#need-id-from-view').value.trim();
    const content = document.querySelector('#need-id-from-view').value.trim();

    if (title && content) {
        const response = await fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/user');
        } else {
            alert('Failed to delete post');
        }
    }
};
// TODO update classes below for listeners
document
    .querySelector('.need-class-from-view')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.need-class-from-view')
    .addEventListener('click', delButtonHandler);