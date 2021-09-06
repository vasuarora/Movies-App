let Filter=(props)=>{
    //console.log(props.genreData);
    return(
        <div className="col-2">
            <ul class="list-group m-4">
                <li class="list-group-item">All Genres</li>
                
                {
                    props.genreData.map((el)=>{
                        return <li key={el._id} class="list-group-item">{el.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default Filter;