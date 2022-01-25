/* eslint-disable no-unused-vars */
/* eslint-disable no-async-promise-executor */
const baseOmdbUrl = "https://www.omdbapi.com/";
const apiKey = "b5c1225e";

const movieService = {
    getMovie: (movie) => {
        return new Promise(async (resolve, reject) => {
            try{
                const response = await fetch(`${baseOmdbUrl}?s=${movie}&apikey=${apiKey}`);
                if( response.status != 200) throw "API Does not return anything";
                const result = await response.json();
                resolve({success: true, movies: result.Search, total: result.totalResults});
            }catch(e){
                reject({success:false, message: e});
            }
        });
    },
    getMovieDetails: (imdbId) => {
        return new Promise(async (resolve, reject) => {
            try{
                const response = await fetch(`${baseOmdbUrl}?i=${imdbId}&apikey=${apiKey}`);
                if( response.status != 200) throw "API Does not return anything";
                const result = await response.json();
                resolve({success: true, movie: result});
            }catch(e){
                reject({success:false, message: e});
            }
        });
    }
};

export default movieService;