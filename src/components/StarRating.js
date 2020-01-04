import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state
  state = {
    rating: 0
  }

  getStarComponents = () => {
    return Array(5).fill().map((_,i) => {
         let rate = i + 1;
         return <Star 
                  key={i} 
                  isRated={rate <= this.state.rating} 
                  setRating={() => this.handleRatingUpdate(rate)} 
                />
    });
  }

  handleRatingUpdate = (rating) => {
    if(this.state.rating === rating) this.setState( {rating: 0} );
    else this.setState( {rating} );
  }

  render() {
    return (
      <ul className="course--stars">
        {this.getStarComponents()}
      </ul>
    );
  }
}

export default StarRating;