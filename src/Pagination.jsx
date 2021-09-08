let Pagination=(props)=>{
    
    let arr=[];
    console.log(props.pages);

    for(let i=1;i<=props.pages;i++){
        arr.push(i);
    }

    console.log(arr);

    return(
        <div className="mt-3">
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                {
                    arr.map((el)=>{
                        return <li class="page-item"><a class="page-link" href="#">{el}</a></li>
                    })
                }
            </ul>
        </nav>
        </div>
    )
}

export default Pagination;
