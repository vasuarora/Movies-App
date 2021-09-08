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
    page:1,
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

      let totalMovies=this.state.movies.length;
      let pages=Math.ceil(totalMovies/4);
      
      this.setState({
        page:pages
      })
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

  deleteMovie=(id)=>{
    let filteredArr=this.state.movies.filter((el)=>{
      return el._id!=id;
    })

    this.setState({
      movies:filteredArr,
      page:Math.ceil(filteredArr.length/4)
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
          <Search total={this.state.movies.length}></Search>
          <Table 
            movieData={this.state.movies}
            selectedFilter={this.state.selectedFilter}
            toggleLike={this.toggleLike}
            deleteMovie={this.deleteMovie}
            ></Table>
          <Pagination pages={this.state.page}></Pagination>
        </div>
      </div>
    </>
  )
  }
}

export default App;
