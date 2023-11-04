const newReplyHandler = async (event) => {
    event.preventDefault();
    // TODO verify id's for title and content below
    const content = document.querySelector('#reply-content').value.trim();
    const comment_id = document.querySelector('input[name="comment-id"]').value;

    // TODO verify route below
    if (content) {
        const response = await fetch('/api/replies', {
            method: 'POST',
            body: JSON.stringify({ content, comment_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to create reply');
        }
    }
};

// TODO verify route below
/* const delReplyHandler = async (event) => {
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
}; */

document
    .querySelector('#submit-reply-btn')
    .addEventListener('click', newReplyHandler);

/* document
    .querySelector('.reply-list')
    .addEventListener('click', delReplyHandler); */

document.addEventListener('click', (event)=> {
    event.preventDefault();
    if (event.target.hasAttribute('data-reply')) {
        const commentId = event.target.getAttribute('data-reply');
        document.querySelector('#hidden-comment').value = commentId;
    }
});