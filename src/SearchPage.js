import React from 'react'
import "./SearchPage.css"
import { Button } from "@material-ui/core"
import SearchResult from "./SearchResult";

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
 <SearchResult 
     img="https://www.imgacademy.com/sites/default/files/legacy-hotel-rendering-guest-room.jpg"
     location="Private road, Center of London"
     title="stay at the spacious"
     description="@ room . 1 bathroom . 2 Balconies . Free Parking"
     star={4.73}
     price= "$30 / night"
     total="$117 total"
 />
 <SearchResult 
     img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
     location="Private road, Center of London"
     title="stay at the spacious"
     description="@ room . 1 bathroom . 2 Balconies . Free Parking"
     star={4.73}
     price= "$30 / night"
     total="$117 total"
 />
            
        </div>
    )
}

export default SearchPage
