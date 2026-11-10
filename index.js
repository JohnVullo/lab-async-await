// Write your code here!

//FOR SOME REASON THIS CODE GETS GENERATED AFTER NPM INSTALL AND CODE WILL NOT WORK TILL REMOVED
//const { list } = require("mocha/lib/reporters/base")

//This variable stores the URL
const url = "https://jsonplaceholder.typicode.com/posts"

//Function to display the user posts
function displayPosts(userPosts){
    //creates variable that stores id element "post-list"
    const postList = document.querySelector("#post-list")

    //creates variable that stores the created element "li"
    const list = document.createElement("li")

    //for loop to display data to HTML
    for(let i = 0; i < userPosts.length; i++){
        
        //creates variable that stores created element "h1"
        const title = document.createElement("h1")

        //creates variable thaht stores created element "p"
        const body = document.createElement("p")

        //stores content of the title of userposts to "h1" element
        title.textContent = userPosts[i].title

        //stores content of the body of userposts to "p" element
        body.textContent = userPosts[i].body

        //appends "h1" element to "li"
        list.appendChild(title)

        //appends "p" element to "li"
        list.appendChild(body)
    }

    //appends "li" element to "post-list"
    postList.appendChild(list)
}   

//function to fetch data from API
async function getFetch(){
    try{
        //creates reponse variable that stores fetched object
        const reponse = await fetch(url)

        //creates data variable that stores the parsed data array
        const data = await reponse.json()

        //sends data arra to displayPosts function
        displayPosts(data)
    } catch (error) {
        //creates body variable that stores "body" element
        const body = document.querySelector("body")

        //creates errorMessage variable that stores created element "error message"
        const errorMessage = document.createElement("error-message")

        //stores text and error message to "error-message" element
        errorMessage.textContent = `Failed to fetch data: ${error}`

        //appnds "error-message" element to "body"
        body.appendChild(errorMessage)
    }
}

//calls getFetch function
getFetch()


//original fetch/promise code without asyncawait
/*fetch(url)
.then(response => response.json())
.then(userPosts => {
    displayPosts(userPosts)
})
.catch(error => {
    console.error(error)
})*/