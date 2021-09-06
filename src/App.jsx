import Navbar from "./Navbar";
import Filter from "./Filter";
import Search from "./Search";
import Table from "./Table";
import Pagination from "./Pagination";
import React from "react";

class App extends React.Component{

  state={
    movies:[],
    genres:[],
    selectedFilter:"All Genre",
  }

  componentDidMount() {
    let f = async () => {
      let responseGenre = await fetch("/genre");
      let responseMovies = await fetch("/movies");
      let moviesJson = await responseMovies.json();
      let genreJson = await responseGenre.json();

      this.setState({
        movies: moviesJson,
        genres: genreJson,
      });
    };

    f();

  }

  setFilter=(filter)=>{
    this.setState({selectedFilter:filter})
  }

  render(){
  return(
    <>
      <Navbar></Navbar>
      <div className="row">
        <Filter 
          genreData={this.state.genres}
          selectedFilter={this.state.selectedFilter}
          handleFilter={this.setFilter}

        ></Filter>

        <div className="col-9 m-4">
          <Search></Search>
          <Table 
            movieData={this.state.movies}
            selectedFilter={this.state.selectedFilter}
            ></Table>
          <Pagination></Pagination>
        </div>
      </div>
    </>
  )
  }
}

export default App;
