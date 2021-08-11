const myButton = document.getElementById('myUpdateButton')
let myDescription = document.getElementById('description')
let myTitle = document.getElementById('blog-name')
const blog_id = document.getElementsByClassName("myID")[0].id


myButton.onclick = async () => {
    const description = myDescription.value.trim()
    const name = myTitle.value.trim()

    const response = await fetch(`/api/update/${blog_id}`, {
        method: 'PUT',
        body: JSON.stringify({ description, name }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    console.log("RES", response)

    if (response.ok) {
        document.location.replace(`/blog/${blog_id}`);
    } else {
        alert('Failed to create update');
    }
}