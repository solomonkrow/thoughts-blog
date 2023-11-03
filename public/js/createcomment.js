const newCommentHandler = async (event) => {
    event.preventDefault();

    console.log('form submitted');

    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('input[name="post-id"]').value;

    console.log(post_id);
    console.log(content);

    if (content) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ content, post_id}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
            // return;
        } else {
            alert('Failed to create comment');
        }
    }
};

// TODO verify route below
/* const delCommentHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

//         const response = await fetch(`/api/posts/${id}`, {
//             method: 'DELETE',
//         });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert('Failed to delete comment');
        }
    }
}; */

/* document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newCommentHandler); */

document
    .querySelector('#submit-comment-btn')
    .addEventListener('click', newCommentHandler);

/* document
    .querySelector('.comment-list')
    .addEventListener('click', delCommentHandler); */