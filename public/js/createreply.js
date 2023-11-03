const newFormHandler = async (event) => {
    event.preventDefault();
    // TODO verify id's for title and content below
    const content = document.querySelector('#reply-content').value.trim();
    // TODO verify route below
    if (content) {
        const response = await fetch('/api/blogpost', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create reply');
        }
    }
};

// TODO verify route below
const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/blogpost/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.new-reply-form')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.reply-list')
    .addEventListener('click', delButtonHandler);