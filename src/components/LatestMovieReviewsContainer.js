import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

    constructor() {
        super() 
        this.state = {
            reviews: []
        }
    }

     componentDidMount() {
         fetch(URL)
         .then(res => res.json())
         .then(reviews => this.setState({reviews: reviews.results}))
     }

    render() { 
        return ( 
            <div className="latest-movie-reviews">
                <h2>The Latest Reviews:</h2>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
         );
    }
}
 
export default LatestMovieReviewsContainer;