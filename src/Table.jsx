let Table=(props)=>{
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
                    props.movieData.map((el)=>{
                        return(
                            <tr>
                            <th scope="row">{el.title}</th>
                            <td>{el.genre.name}</td>
                            <td>{el.numberInStock}</td>
                            <td>{el.dailyRentalRate}</td>
                            <td><span class="material-icons"> favorite_border </span></td>
                            <td><button>Delete</button></td>
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