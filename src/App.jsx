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

  toggleLike=(id)=>{
    let idx=this.state.movies.findIndex((el)=>{
      return el._id==id;
    });

    let newMovies = this.state.movies.map((el)=>el);

    if(this.state.movies[idx].liked==true){
      newMovies[idx].liked = false;
    }
    
    else{
      newMovies[idx].liked = true;
    }
    
    this.setState({
      movies:newMovies
    })
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
            toggleLike={this.toggleLike}
            ></Table>
          <Pagination></Pagination>
        </div>
      </div>
    </>
  )
  }
}

export default App;
