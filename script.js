const ListContainer = document.getElementById('list-container');
const searchButton = document.getElementById("search");
const searchValue = document.getElementById("search-value");
const detailsButton = document.getElementById("details-button-id");
const LatestPost = document.getElementById("Latest-Post");
const readPostContainer = document.getElementById("read-post-container");
let readPosts = [];


const fetchListData = async (search) => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
    const response = await fetch(url);
    const data = await response.json();
    let searchPosts = []

    if (search?.length) {
        searchPosts = data.posts.filter(post => post.category == search)
    } else {
        searchPosts = data.posts
    }

    ListContainer.innerHTML = "";
    searchPosts.forEach(post => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card-row');
        cardDiv.innerHTML = `
        <img src="${post.image}"class="card-image"/>
        <div class="card-circle" style="background-color: ${post.isActive ? 'green' : 'red'};">

        </div>
        <div class="card-text">
        <h3 class="card-date">${post.isActive}</h3>
        <div class="card-category">
        <h3>#${post.category}</h3>
        <h3 class="card-author">Author:${post.author.name}</h3>
        </div>
        <h2 class="card-title">${post.title}</h2>
        <p class="card-description">${post.description}</p>
        <div class="card-icons">
        <i class="fa-regular fa-message">${post.comment_count}</i>
       <i class="fa-regular fa-eye">${post.view_count}</i>
       <i class="fa-regular fa-clock">${post.posted_time}</i>
        </div>
        </div>

        <button  class="details-button" id="details-button-id">
        <i class="fa-regular fa-envelope-open"></i>
        </button>

        
        `;
        const button = cardDiv.querySelector(".details-button");
        button.addEventListener("click", () => handelRead(post))

        ListContainer.appendChild(cardDiv);


    });

}
fetchListData()


searchButton.addEventListener("click", function () {
    fetchListData(searchValue.value)
})


const fetchLatestData = async () => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
    const response = await fetch(url);
    const data = await response.json();
    LatestPost.innerHTML = "";

    // adding no published date for the empty date

    data?.forEach(post => {
        const postDateDiv = document.createElement("div");
        const postedDate = post.author.posted_date 
            ? post.author.posted_date 
            : `<i class="fa-regular fa-calendar-xmark"></i> No published date`;
    });

    data?.forEach(post => {
        const latestDiv = document.createElement("div");
        latestDiv.classList.add('Box');
        latestDiv.innerHTML = `
     <img src="${post.cover_image}"class="box-image"/>
     <h6 class="box-date">${post.author.posted_date}</h6>
     <h2 class="box-title">${post.title}</h2>
     <p class="box-description">${post.description}</p>
     <div class="box-icons">
     <img src="${post.profile_image}"class="box-author-image"/>
     <h3>${post.author.name}</h3>
     </div>
     
     `;

        LatestPost.appendChild(latestDiv);
    });

}
fetchLatestData()

let clickCount = 0;
const handelRead = (payload) => {
    clickCount++;
   
    readPostContainer.innerHTML = "";
     // Create a counter avove the div to show the number of times the button is clicked

     const counter = document.createElement("div");
     counter.classList.add('counter');
     counter.innerHTML = `
     <h1>Title</h1>
     <h3>Click Count: ${clickCount}</h3>
     
     `;
     readPostContainer.appendChild(counter);


    readPosts = [...readPosts, payload]
    console.log(readPosts)

    readPosts.forEach(post => {

        const readPost = document.createElement("div");
        readPost.classList.add('read-post');
        readPost.innerHTML = `

        <div class="read-post-titles">
            <h1 class="post-tutle">${post.title}</h1>
             <i class="fa-regular fa-eye">${post.view_count}</i>
             </div>

        `
        readPostContainer.appendChild(readPost);
    })
}
