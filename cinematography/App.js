import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {

  state = { movies: [{ "Title": "Mike" }, { "Title": "Anna" }] };

  componentDidMount() {
    this.getData(window.location.search);
  }
  getData = async (what) => {
    let res = await axios.get('http://www.omdbapi.com' + what + '&apikey=_______')
    this.setState(() => {
      return ({
        movies: res.data.Search,
        errors: res.data.errors,
      });
    })
  }
  render() {
    return this.state.movies.map((movie) => (
      <Movie key={movie.Title} movie={movie} />
    ))
  }
}
class Movie extends React.Component {
  render() {
    return (
      <div>
        <div className="filmBox">
          <h1>{this.props.movie.Title}</h1>
          <img src={this.props.movie.Poster} />
          <div className="lead">Year:
             <div className="value">{this.props.movie.Year}</div>
          </div>
          <div className="lead">Type:
             <div className="value">{this.props.movie.Type}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
