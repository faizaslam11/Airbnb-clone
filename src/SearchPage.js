import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"

function SearchPage() {
    return (
        <div className="searchpage">
            <div className="searchPage__info">

              <p>62 stays . 26 august to 30 august . 2 guest</p>
              <h1>stays nearby</h1>  

              <Button variant="outlined">Cancellation Flexibilty</Button>
              <Button variant="outlined">Type of place</Button>
              <Button variant="outlined">Price</Button>
              <Button variant="outlined">Rooms and Beds</Button>
              <Button variant="outlined">More filters</Button>
 </div>
 <SearchResult />
            
        </div>
    )
}

export default SearchPage
