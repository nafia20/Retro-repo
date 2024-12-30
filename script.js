// const ListContainer = document.querySelector('.list-container');
// const Form = document.querySelector('.form');








// const fetchList = async () => {
//     ListContainer.innerHTML = '';
//     const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;

//     const response = await fetch(url);
//     // const data = await response.json();
//     const data = await response.json();
//     console.log(data);

//     data?.posts?.forEach(posts=> {
//         const postElement = document.createElement('div');
//         postElement.classList.add('post');

//         postElement.innerHTML = `
//             <h2>${posts?.id}</h2>
//             <h2>${posts?.category}</h2>
//             <h2>${posts?.isActive}</h2>
//             <h2>${posts?.title}</h2>
//             <h2>author:${posts?.author.name}</h2>
//             <p>${posts?.description}</p>
//         `;

//         ListContainer.appendChild(postElement);
        
//     });
// }

// fetchList();

// Form.addEventListener('submit', async (e) => {
//     e.preventDefault();
// })

// End.....


const ListContainer = document.getElementById('list-container');


const fetchList = async () => {
       
         const url = `https://openapi.programming-hero.com/api/retro-forum/posts`;
    
         const response = await fetch(url);
             const data = await response.json();
             
            console.log(data);
            const CardDiv = document.createElement('div');

            data?.posts?.forEach(post => {
                CardDiv.innerHTML = `
                <div> 
                <h2>${post.title}</h2>
                <img src="${post.image}" alt="image">

                </div>`
                ListContainer.appendChild(CardDiv); 
            });

}

fetchList();