
const newPostBtn = document.querySelector('#new-post');
const newPostForm = document.querySelector('#newPostForm');
const submitNewPost = document.querySelector('#postBtn');



newPostBtn.addEventListener("click", function (event) {
   if (newPostForm.style.display === "none") {
       newPostForm.style.display = "block";
       newPostBtn.style.display = "none";
   }
})
const postHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newPostTitle').value;
    const content = document.querySelector('#newPostContent').value;
    
    // Collect values from the login form
    console.log(content)
   
  
    if (content) {
      
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, content }), 
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
       
        // If successful, refresh the page
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#newPostForm')
    .addEventListener('submit', postHandler);