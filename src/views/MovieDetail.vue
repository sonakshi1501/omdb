<template>
  <div v-if="isLoading" class="mt-10">
    <h1>Loading...</h1>
  </div>
  <div class="container" v-else-if="!isLoading && Object.keys(movie).length > 0">
    <div class="row mt-5 d-flex justify-content-center">
      <div class="col-md-9 d-flex justify-content-end">
        <a :href="`https://www.imdb.com/title/${movie.imdbID}`" target="_blank"
          ><button
            class="btn text-light btn-sm mt-3 bg-primary"
            style="margin-right: 10px"
          >
            IMDB
          </button></a
        >
      </div>
    </div>
    <div class="row d-flex justify-content-center">
      <div class="col-md-9 bg-white shadow-sm mt-3 mb-5 p-4">
        <div class="d-flex">
          <img
            :src="
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            "
            class="rounded"
            style="width: 350px"
          />
          <div style="margin-left: 30px; width: 100%">
            <ul style="width: 100%" class="list-group mt-1 rounded-0">
              <li class="list-group-item text-light bg-primary">
                Informations
              </li>
              <li class="list-group-item">
                <strong>Title: </strong>{{ movie.Title }}
              </li>
              <li class="list-group-item">
                <strong>Type: </strong> {{ movie.Type }}
              </li>
              <li class="list-group-item">
                <strong>Year: </strong>{{ movie.Year }}
              </li>
              <li class="list-group-item">
                <strong>Rated: </strong>{{ movie.Rated }}
              </li>
              <li class="list-group-item">
                <strong>Released: </strong>{{ movie.Released }}
              </li>
              <li class="list-group-item">
                <strong>Runtime: </strong>{{ movie.Runtime }}
              </li>
              <li class="list-group-item">
                <strong>Genre: </strong>{{ movie.Genre }}
              </li>
              <li class="list-group-item">
                <strong>Director: </strong>{{ movie.Director }}
              </li>
              <li class="list-group-item">
                <strong>Metascore: </strong>{{ movie.Metascore }}
              </li>
              <li class="list-group-item">
                <strong>IMDB Rating: </strong>{{ movie.imdbRating }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-5">
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Plot
            </li>
            <li class="list-group-item">{{ movie.Plot }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Writers
            </li>
            <li class="list-group-item">{{ movie.Writer }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Actors
            </li>
            <li class="list-group-item">{{ movie.Actors }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Language
            </li>
            <li class="list-group-item">{{ movie.Language }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Country
            </li>
            <li class="list-group-item">{{ movie.Country }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Awards
            </li>
            <li class="list-group-item">{{ movie.Awards }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Ratings
            </li>
            <li
              v-for="(rating, key) in movie.Ratings"
              :key="key"
              class="list-group-item"
            >
              {{ rating.Source }}
              <span class="badge text-light bg-primary">{{
                rating.Value
              }}</span>
            </li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              DVD Date
            </li>
            <li class="list-group-item">{{ movie.DVD }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Box Office Collection
            </li>
            <li class="list-group-item">{{ movie.BoxOffice }}</li>
          </ul>
          <ul style="width: 100%" class="list-group mt-3 rounded-0">
            <li class="list-group-item text-light bg-primary">
              Production
            </li>
            <li class="list-group-item">{{ movie.Production }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import movieService from "../service/movieService";
export default {
  name: "MovieDetails",
  data: () => ({
    movie: {},
    isLoading: true,
  }),
  methods: {
    async getMovieDetails() {
      this.isLoading = true;
      try {
        const result = await movieService.getMovieDetails(
          this.$route.params.id
        );
        console.log(result);
        if (result.movie) {
          // this.movies = new Array(...result.movies);
          this.movie = result.movie;
        } else {
          throw { message: "No Such movie found" };
        }
      } catch (e) {
        alert(e.message);
      } finally {
        this.isLoading = false;
      }
    },
  },
  created() {
    this.getMovieDetails();
  },
};
</script>