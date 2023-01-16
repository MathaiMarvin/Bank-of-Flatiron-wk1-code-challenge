import React from "react"
function SearchTransaction ({searchHandling}) {

    return(
        <div>
            <input type="text" placeholder="Search Transaction" onChange={searchHandling}/>
            
        </div>
    )
}
export default SearchTransaction