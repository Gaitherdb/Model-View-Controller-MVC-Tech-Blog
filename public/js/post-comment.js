const commentHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const content = document.querySelector('#post-comment').value;
    const post_id = window.location.pathname.substr(7);
    console.log("THIS")
  console.log(post_id);

    if (content) {
      console.log(content)
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ content, post_id }), 
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("hellooo")
        // If successful, refresh the page
        // document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('.comment-form')
    .addEventListener('submit', commentHandler);
  