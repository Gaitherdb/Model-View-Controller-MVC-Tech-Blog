window.addEventListener('DOMContentLoaded', function(){
const newPostBtn = document.querySelector('#new-post');
const newPostForm = document.querySelector('.postFormDiv');
const submitNewPost = document.querySelector('#postBtn');
const editForm = document.querySelectorAll('.editPostForm');
const personalPosts = document.querySelectorAll('.personalPosts');
const postsBtn = document.querySelectorAll('.posts');
const allPosts = document.querySelector('.allPosts');


console.log(editPost)

newPostBtn.addEventListener("click", function (event) {
   if (newPostForm.style.display === "none") {
       newPostForm.style.display = "block";
       newPostBtn.style.display = "none";
   }
})

 

allPosts.addEventListener("click", function (event) {
 
  var element = event.target;
  if (element.matches('button')) {
  var post_id = element.parentElement.id;
  console.log(post_id)


  // const personalPosts = document.getElementById(`id${post_id}`);
  
  console.log(personalPosts)
 
  console.log(postsBtn)
  console.log('editform')
  console.log(editForm)
    console.log(typeof editForm[1].dataset.id)
    for (let i=0; i < editForm.length; i++) {
      console.log('test 1')
      if (Number(editForm[i].dataset.id) == `${post_id}`){
        console.log('test 2')
      // var optionIndex = Number(element.getAttribute("dataset"));
      if (editForm[i].style.display === "none") {
        
        console.log('test 3')
        editForm[i].style.display = "block";
        // editPost.style.display = "none";
        for (let i=0; i < personalPosts.length; i++) {
        console.log('test 4')
        console.log(personalPosts[i].dataset.id)
        if (personalPosts[i].dataset.id == `${post_id}`){
          personalPosts[i].style.display = "none";
          console.log('test 5')
        }
        }
    }}
    }}
})



const postHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#newPostTitle').value;
    const content = document.querySelector('#newPostContent').value;
    
    // Collect values from the login form

   
  
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
})