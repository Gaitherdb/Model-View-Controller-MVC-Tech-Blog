window.addEventListener('DOMContentLoaded', function(){
const newPostBtn = document.querySelector('#new-post');
const newPostForm = document.querySelector('.postFormDiv');
const submitNewPost = document.querySelector('#postBtn');
const editForm = document.querySelectorAll('.editPostForm');
const personalPosts = document.querySelectorAll('.personalPosts');
const postsBtn = document.querySelectorAll('.posts');
const allPosts = document.querySelector('.allPosts');
const deleteBtn = document.querySelectorAll('#delete-post')


newPostBtn.addEventListener("click", function (event) {
   if (newPostForm.style.display === "none") {
       newPostForm.style.display = "block";
       newPostBtn.style.display = "none";
   }
})

 

allPosts.addEventListener("click", function (event) {
 
  var element = event.target;
  if (element.matches('.posts')) {
  var post_id = element.parentElement.id;
 
    console.log(typeof editForm[1].dataset.id)
    for (let i=0; i < editForm.length; i++) {
     
      if (Number(editForm[i].dataset.id) == `${post_id}`){
        
      // var optionIndex = Number(element.getAttribute("dataset"));
      if (editForm[i].style.display === "none") {
        
        
        editForm[i].style.display = "block";
        // editPost.style.display = "none";
        for (let i=0; i < personalPosts.length; i++) {
        
        if (personalPosts[i].dataset.id == `${post_id}`){
          personalPosts[i].style.display = "none";
          
        }
        }
    }}
    }}
})
const deletePost = async (event) => {
  var element = event.target;
  var post_id = element.dataset.id;
  if (element.matches('#delete-post')){
  const response = await fetch(`/api/posts/${post_id}`, {
      method: 'DELETE',
  });

  if (response.ok) {
      document.location.replace('/dashboard');
  } else {
      alert(response.statusText);
  }
}
}

const editPost = async (event) => {
  var element = event.target;
  let post_id = element.dataset.id;
  const title = document.querySelector('#editTitle').value;
  const content = document.querySelector('#editContent').value;
  
  // const date_created = new Date();
  if (element.matches('#editBtn')){
  const response = await fetch(`/api/posts/${post_id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
      document.location.reload();
  } else {
      alert(response.statusText);
  }
}
}

const postHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newPostTitle').value;
    const content = document.querySelector('#newPostContent').value;
  
    if (title && content) {
      
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
    document
    .querySelector('.allPosts')
    .addEventListener('click', deletePost);
    document
    .querySelector('.allPosts')
    .addEventListener('click', editPost);
})