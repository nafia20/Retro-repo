

const ListContainer = document.getElementById('list-container');
const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-btn');

const fetchListData = async () => {
    const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
    ListContainer.innerHTML = "";
    data?.posts?.forEach(post => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add('card' , 'card-row');
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
        
        
        `;
        
        ListContainer.appendChild(cardDiv);
        
        searchButton.addEventListener('click', (e) => {
            e.preventDefault();J
            const query = searchInput.value.trim();
            fetchListData(query); // Fetch data with the search query
        });
    });
    
   
  
   
}
fetchListData()