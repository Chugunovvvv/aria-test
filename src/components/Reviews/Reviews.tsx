import {FC} from 'react'
import './Reviews.scss'
import { reviews } from '../../utils/reviews'
import ReviewsItem from './ReviewsItem/ReviewsItem'

const Reviews: FC = () => {
  return (
    <section className="reviews">
        <ul className="reviews__list">
            {reviews.map((review) => <ReviewsItem key={review.id} img={review.img} alt={review.alt} name={review.name} tag={review.tag} review={review.review}/>)}
        </ul>
    </section>
  )
}

export default Reviews