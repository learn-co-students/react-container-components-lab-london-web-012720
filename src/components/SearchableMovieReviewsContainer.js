import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
    state = { 
        reviews: [],
        searchTerm: ""

     }

    handleSubmit = (event) => {
        event.preventDefault()
        fetch(URL)
        .then(res => res.json())
        .then(reviews => this.setState({reviews: reviews.results}))
    }
    
    handleSearch = (event) => {
        this.setState({
            searchTerm: event.target.value
        })
    }
    render() { 
        return ( 

            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}> 
                    <input onChange={this.handleSearch}>
                    </input>
                    <button type="submit">Submit</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
         );
    }
}
 
export default SearchableMovieReviewsContainer;