//Defing the Necessary Variables
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity_desc&api_key=24603bf8355365e4733e9efdb5aa5847&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=24603bf8355365e4733e9efdb5aa5847&query="';
const main =document.getElementById('main')
const form = document.getElementById('form')
const search = document.getElementById('search')

//Get initial movies function fro the API url
getMovies(API_URL)
async function getMovies(url){
    const res = await fetch(url)
    const data = await res.json()
    showMovies(data.results);
}
//End of getMovies function

// Show Movie function which uses the data.results to create the movie list elements
function showMovies(movies){
    main.innerHTML = '';
    movies.forEach((movie)=>{
        const {title, poster_path, vote_average, overview} = movie

        const movieEl = document.createElement('div')
        movieEl.classList.add('movie')
        movieEl.innerHTML = `<div class="movie">
        <img src="${IMG_PATH+poster_path}" 
        alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class='${getClassByRate(vote_average)}'>${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
            ${overview}
        </div>
    </div>`
    console.log(movieEl)
    main.appendChild(movieEl)
    })
}
//End of ShowMovie Function 

//Utility function to get the class name depending on the condition
function getClassByRate(vote){
    if(vote >= 8)
    {
        return 'green'
    }
    else if(vote >=5){
        return 'orange'
    }
    else{
        return 'red'
    }
}
//End of Utility function 

//Search Movie function 
form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const searchTerm = search.value;

    if(searchTerm && searchTerm!=''){
        getMovies(SEARCH_API+searchTerm);

        search.value=''
    } else{
        window.location.reload()
    }
})
//End of Search Movie Function 