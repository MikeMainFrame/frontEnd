new Vue({
  el: '#zTitle',
  data: {
    movies: [
        { "Title": "Space Odyssey 2001" },
        { "Title": "Space Odyssey 2010" }
      ]
    
  },
  mounted() {
    axios
      .get('http://www.omdbapi.com' + window.location.search + '&apikey=______')
      .then(response => (this.movies = response.data.Search))
  }
})
