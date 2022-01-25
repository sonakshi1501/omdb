<template>
  <div v-if="isLoading" class="mt-10"><h1>Loading.....</h1></div>
  <div class="row mt-4" v-else>
    <div v-for="movie in movies" :key="movie.imdbID" class="col-sm-12 col-md-6">
      <div class="mt-4 d-flex align-items-center flex-column">
        <div
          class="bg-white mb-3 shadow-sm rounded movie d-flex"
          style="width: 500px; height: 250px"
        >
          <img
            style="
              height: 100%;
              width: 168px;
              border-radius: 0.25rem 0px 0px 0.25rem;
            "
            :src="
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg'
            "
          />
          <div style="padding: 20px">
            <h2>{{ movie.Title }}</h2>
            <div>
              <small><strong>Type:</strong> {{ movie.Type }}</small>
            </div>
            <div>
              <small><strong>Year:</strong> {{ movie.Year }}</small>
            </div>

            <router-link
              :to="{ name: 'movie', params: { id: movie.imdbID } }"
              tag="button"
              class="btn text-light btn-sm mt-3 bg-primary"
              >Show Details</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import movieService from "../service/movieService";
export default {
  name: "MovieResults",
  data: () => ({
    movies: [],
    isLoading: true,
  }),
  methods: {
    async searchMovie() {
      this.isLoading = true;
      try {
        const result = await movieService.getMovie(this.$route.params.movie);
        console.log(result);
        if (result.total > 0) {
          // this.movies = new Array(...result.movies);
          this.movies = [...result.movies];
          console.log(this.movies);
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
    this.searchMovie();
  },
};
</script>