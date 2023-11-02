const updateFormHandler = async (event) => {
    event.preventDefault();
    // TODO update IDs below from views to get req.body
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        console.log(event.target);
        const title = document.querySelector('#need-id-from-view').value.trim();
        const content = document.querySelector('#need-id-from-view').value.trim();

        if (title && content) {
            const response = await fetch(`/api/posts/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ title, content }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (response.ok) {
                document.location.replace('/user');
            } else {
                alert('Failed to update post');
            }
        }
    }
};
// TODO update classes below for listeners
document
    .querySelector('.need-class-from-view')
    .addEventListener('submit', updateFormHandler);