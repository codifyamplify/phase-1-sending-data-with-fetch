// Add your code here
function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
    })
    .then(function (response) {
        // console.log(response)
        return response.json()
    })
    .then(function (object) {
        // object.querySelector("object.id").appendChild()
        // console.log(object.id)
        document.body.innerHTML = object.id
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}

// submitData('john', 'john@gmail.com')