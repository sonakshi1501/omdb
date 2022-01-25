<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12 d-flex justify-content-center">
        <form>
          <div
            class="
              bg-white
              mt-5
              rounded
              shadow-sm
              d-flex
              bar
              p-3
              align-items-center
            "
            style="width: 100%; height: 60px"
          >
            <input
              type="text"
              v-model="movie"
              class="form-control"
              style="width: 100%"
              placeholder="Enter Movie Title"
            />
            <button
              @click.prevent="search"
              class="btn text-light bg-primary"
              style="margin-left: 15px"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div class="col-md-12 d-flex justify-content-center">
        <div
          class="
            bg-white
            mt-5
            rounded
            shadow-sm
            d-flex
            p-3
            justify-content-center
          "
          style="width: 500px"
        >
          <div class="row mt-4 justify-content-center">
            <div class="col-sm-12">
              <h3>Recent 10 Searches</h3>
            </div>
            <div class="col-sm-12">
              <div class="list-group">
                <button
                  v-for="(mo, key) in recentSearches"
                  :key="key"
                  type="button"
                  @click="gotoMovie(mo)"
                  class="list-group-item list-group-item-action"
                >
                  {{ mo }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movie: this.$route.params.movie ? this.$route.params.movie : "",
      recentSearches: localStorage.getItem("recentSearch")
        ? JSON.parse(localStorage.getItem("recentSearch"))
        : [],
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "SearchResponse",
        params: { movie: this.movie },
      });
      this.recentSearches = this.recentSearches.filter(
        (data) => data != this.movie
      );
      this.recentSearches.push(this.movie);
      if (this.recentSearches.length > 10) this.recentSearches.shift();
      localStorage.setItem("recentSearch", JSON.stringify(this.recentSearches));
    },
    gotoMovie(movie) {
      this.movie = movie;
      this.search();
    },
  },
  computed: {},
};
</script>