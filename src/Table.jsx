import "./Table.css";

let Table=(props)=>{

    let allMovies=props.movieData;
    let currFilter=props.selectedFilter;

    let filteredArr=allMovies.filter((el)=>{
        if(currFilter=="All Genre"){
            return el;
        }
        else if(currFilter==el.genre.name){
            return el;
        }
    })

    return(
        <div className="row col-9">
        <div className="mt-4">
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Title</th>
                <th scope="col">Genre</th>
                <th scope="col">Stock</th>
                <th scope="col">Rate</th>
                <th scope="col">Like</th>
                <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredArr.map((el)=>{
                        return(
                            <tr key={el._id}>
                            <th scope="row">{el.title}</th>
                            <td>{el.genre.name}</td>
                            <td>{el.numberInStock}</td>
                            <td>{el.dailyRentalRate}</td>
                            <td onClick={()=>{
                                props.toggleLike(el._id)
                            }}>
                                {el.liked ? (<span class="material-icons"> favorite </span>) : (<span class="material-icons"> favorite_border </span>)}
                            </td>
                            <td><button onClick={()=>{
                                props.deleteMovie(el._id)
                            }} className="delete-btn">Delete</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
        </div>
        </div>
    )
}

export default Table;