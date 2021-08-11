/*
const myButton = document.getElementsByClassName('btn')

console.log(myButton)

myButton.onclick = () => {
  console.log('test')
}

const createComment = async () => {
    const myComment = document.getElementsByClassName("commentName").value
    alert('test')
    const response = await fetch(`/`, {
        method: 'POST',
        body: JSON.stringify({myComment}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create comment');
      }

    }
  */  

    const myButton = document.getElementById('myButton')
    let myComment = document.getElementById('commentInfo')
    const blog_id = document.getElementsByClassName("target")[0].id
    let user = document.getElementById('username')
    
    
    myButton.onclick = async () => {
    
      const comment = myComment.value.trim()
      const user_name = user.value.trim()
      
      const response = await fetch(`/api/comment`, {
              method: 'POST',
              body: JSON.stringify({comment, blog_id, user_name}),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              document.location.replace(`/blog/${blog_id}`);
            } else {
              alert('Failed to create comment');
            }
          }
