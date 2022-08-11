import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {activeIndex: 0}

  onClickLeftBtn = () => {
    const {activeIndex} = this.state
    if (activeIndex > 0) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex - 1,
      }))
    }
  }

  onClickRightBtn = () => {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    if (activeIndex < reviewsList.length - 1) {
      this.setState(prevState => ({
        activeIndex: prevState.activeIndex + 1,
      }))
    }
  }

  reviewDetails = review => {
    const {imgUrl, username, companyName, description} = review
    return (
      <div className="review-details">
        <img src={imgUrl} alt={username} />
        <p className="name">{username}</p>
        <p className="content">{companyName}</p>
        <p className="content">{description}</p>
      </div>
    )
  }

  render() {
    const {activeIndex} = this.state
    const {reviewsList} = this.props
    const eachDetails = reviewsList[activeIndex]

    return (
      <div className="bg">
        <h1 className="heading">Reviews</h1>
        <div className="reviews-container">
          <button
            type="button"
            testId="leftArrow"
            className="arrow-btn"
            onClick={this.onClickLeftBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          {this.reviewDetails(eachDetails)}
          <button
            type="button"
            testId="rightArrow"
            className="arrow-btn"
            onClick={this.onClickRightBtn}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
