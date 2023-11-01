const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#').value.trim();
    const  = document.querySelector('#').value.trim();
    const description = document.querySelector('#').value.trim();

    if (name &&  && description) {
        const response = await fetch(`/api/`, {
            method: 'POST',
            body: JSON.stringify({ name, }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to create project');
        }
    }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('.')
    .addEventListener('submit', newFormHandler);

document
    .querySelector('.')
    .addEventListener('click', delButtonHandler);