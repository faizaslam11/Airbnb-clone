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
                location="Private room, Center of London"
                title="stay at the spacious Edwadian House"
                description="1 room . 1 bathroom . 2 Balconies . Free Parking"
                star={4.73}
                price= "₹300 / night"
                total="₹1170 total"
                />
                <SearchResult 
                    img="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    location="Private road, Center of London"
                    title="stay at the spacious"
                    description="2 room . 1 bathroom . 3 Balconies . Free Parking"
                    star={4.73}
                    price= "₹500 / night"
                    total="₹1200 total"
                />
                 <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Private room in center of London"
                title="London Studio Apartments"
                description="4 guest · 4 bedroom · 4 bed · 2 bathrooms · Free parking · Washing Machine"
                star={3.8}
                price="₹650 / night"
                total="₹2107 total"
                 />
                <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Private room in center of London"
                title="30 mins to Oxford Street, Excel London"
                description="1 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={4.1}
                price="₹550 / night"
                total="₹3200 total"
                 />
                 <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Private room in center of London"
                title="Spacious Peaceful Modern Bedroom"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Free parking · Dry Cleaning"
                star={5.0}
                price="₹600 / night"
                total="₹4500 total"
                />
                <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Private room in center of London"
                title="The Blue Room In London"
                description="2 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Washing Machine"
                star={4.23}
                price="₹650 / night"
                total="₹4800 total"
                />
                <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Private room in center of London"
                title="5 Star Luxury Apartment"
                description="3 guest · 1 bedroom · 1 bed · 1.5 shared bthrooms · Wifi · Kitchen · Free parking · Washing Machine"
                star={3.85}
                price="₹900 / night"
                total="₹6500 total"
            />
            
        </div>
    )
}

export default SearchPage
