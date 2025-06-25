const getTodos = async () => {
    document.getElementById('loader').classList.remove('hidden');
    const responce = await fetch('https://jsonfakery.com/movies/paginated');
    const data = await responce.json();
    console.log(data);
    movieList(data);
    document.getElementById('loader').classList.add('hidden');
}
getTodos();


function movieList(data){
let html = '';
data.data.forEach((item, i)=>{
     const title = item.original_title;
     const releaseDate = item.release_date;
     const releaseYear = releaseDate.split('/')[2];
     const posterImage = item.poster_path;
     const id = item.id;

    html = html + ` <div class="movieDetails">
                        <a class='page2' data-index='${i}' data-movie-id='${id}' href='matter.html'><div class="imageContainer">
                            <img src="${posterImage}" alt="${title}">
                        </div></a>
                        <div class="detailContainer">
                            <p class="movieTitle">${title}</p>
                            <p class="releaseYear">${releaseYear}</p>
                        </div>
                    </div>`
                });
document.querySelector('.container').innerHTML = html;
movieinfo(data);
localStorage.setItem('movieList', JSON.stringify(data.data));               
};

function movieinfo(data){
    document.querySelectorAll('.page2').forEach((element)=>{
    element.addEventListener('click', ()=>{
        const movieId = element.dataset.movieId;
        const i = element.dataset.index;
        localStorage.setItem('index', i); 
    });   
});
}







