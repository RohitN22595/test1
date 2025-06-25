const i = localStorage.getItem('index');
console.log('Index from localStorage:', i);
const movieList = JSON.parse(localStorage.getItem('movieList'));
console.log(movieList);
const item = movieList[i];

function getcast(item){
    let html = '';
    item.casts.forEach((castDetails)=>{
    const realName = castDetails.original_name;
    const character = castDetails.character;
    const castImage = castDetails.profile_path;
    html = html + `<div class="single">
                        <div class="PhotoContainer"><div class="castPhoto"><img src="${castImage}"></div></div>
                        <div class="castDetails">
                            <p class="RealName">${realName}</p>
                            <p class="castName">${character}</p>
                        </div>
                   </div>`
    });
    document.querySelector('.castItem').innerHTML = html;
};

function getMovieData(item){
        const moviePoster = item.poster_path;
        const movieTitle = item.original_title;
        const releaseDate = item.release_date;
        const releaseYear = releaseDate.split('/')[2];
        const language = item.original_language;
        const rating = item.vote_average;
        const votes = item.vote_count;
        const popularity = item.popularity;

        let html = '';
        html = html + `<div class="moviePoster"><img src="${moviePoster}"></div>
            <div class="movieCall">
                <h2 class="movieTitle">${movieTitle}</h2>
                <p class="releaseYear">${releaseYear}</p>
                <p class="language">${language}</p>
                <p class="rating">${rating}</p>
                <p class="votes">${votes}</p>
                <p class="popularity">${popularity}</p>
            </div>`  
    
    document.querySelector('.container1').innerHTML = html;
};

getMovieData(item);
getcast(item);