import React from 'react'
import '/Home.css';
import Banner from './Banner';
import Card from "./Card";

// ES7 snippets to do ' rfce'

function Home() {
    return (
        <div className='home'>
        
        <Banner/>
            <div className="home__section">
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire homes"
                    description="Comfortable private places, with room for friends or family."
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire Flats"
                    description="Comfortable private places, with room for friends or family."
               
                />
                <Card 
                    src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                    title="Entire Suites"
                    description="Comfortable public places, with room for friends or family."
               
                />

            </div>
            <div className="home__section">
                <Card 
                    src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title = "1 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$70/night"
                />
                <Card
                     src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title = "3 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$150/night"
                />
                <Card
                     src="https://media.nomadicmatt.com/2018/apartment.jpg"
                    title = "2 Bedroom apartment"
                    description="Superhost with great amenities and a fabolous shopping complex nearby"
                    price="$90/night"
                />

            </div>
        </div>
    )
}

export default Home
