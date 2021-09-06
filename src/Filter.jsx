
let Filter=(props)=>{

        return(
            <div className="col-2">
                <ul class="list-group m-4">
                    <li onClick={(e)=>{
                        props.handleFilter("All Genre")
                    }} class={`list-group-item ${props.selectedFilter=="All Genre"?"active":""}`}>All Genres</li>
                    
                    {
                        props.genreData.map((el)=>{
                            return <li onClick={(e)=>{
                                props.handleFilter(el.name)
                            }} key={el._id} class={`list-group-item ${props.selectedFilter==el.name?"active":""}`}>{el.name}</li>
                        })
                    }
                </ul>
            </div>
        )
}

export default Filter;