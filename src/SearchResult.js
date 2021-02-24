import React from 'react'
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}
) {
    return (
        <div className="searchResult">
            <img src={img} alt="" />
            <FavoriteBorderIcon className="searchresult__heart"/>
            <div className="searchResult__info">
                <div className="searchResult__infoTop">
                <p>{location}</p>
                <h3>{title}</h3>
                <p>______</p>
                <p>{description}</p>

                </div>


                <div classsName="searchResult__infoBottom">
                     <div className="searchResultz__stars">
                     <StarIcon className="searchResult__star"/>
                     <p>
                     <strong>{star}</strong> {price}
                     </p>
                </div>
        
                </div>
            </div>
        </div>
    )
}

export default SearchResult
