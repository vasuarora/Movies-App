let Search=()=>{

    return(
        <>
            <p className="mt-4">Showing 9 movies from the database</p>
            <button type="button" class="btn btn-primary">New</button>

            <div className="row">
                <div className="col-8">
                    <div class="input-group flex-nowrap">
                        <input type="text" class="form-control mt-4" placeholder="Search..." aria-label="Username" aria-describedby="addon-wrapping"></input>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;