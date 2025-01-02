const ListContainer = document.getElementById('list-container');
const searchButton = document.getElementById("search");
const searchValue = document.getElementById("search-value");
const detailsButton = document.getElementById("details-button-id");



const fetchListData = async (search) => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/posts";
    const response = await fetch(url);
    const data = await response.json();
    let searchPosts = []

    if (search?.length) {
        searchPosts = data.posts.filter(post => post.category == search)
        console.log(searchPosts)
    } else {
        searchPosts = data.posts
    }

    ListContainer.innerHTML = "";
    searchPosts.forEach(post => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card', 'card-row');
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
        <button class="details-button" id="details-button-id">Show Details</button>

        
        `;
        ListContainer.appendChild(cardDiv);

        
    });

}


fetchListData()


searchButton.addEventListener("click", function () {
    fetchListData(searchValue.value)
})

const LatestPost= document.getElementById("Latest-Post");

const fetchLatestData = async () => {
    const url = "https://openapi.programming-hero.com/api/retro-forum/latest-posts";
    const response = await fetch(url);
    const data = await response.json();
}

LatestPost.innerHTML = "";
data?.posts?.forEach(post => {
    const latestDiv = document.createElement("div");
    latestDiv.classList.add('Box', 'data-box');
    latestDiv.innerHTML = `
     <img src="${post.cover_image}"class="box-image"/>
     <h6 class="box-date">${post.isActive}</h6>
     <h2 class="box-title">${post.title}</h2>
     <p class="box-description">${post.description}</p>
     <img src="${post.author.image}"class="box-author-image"/>
     
     `;
    
    LatestPost.appendChild(latestDiv);
});

fetchLatestData()


