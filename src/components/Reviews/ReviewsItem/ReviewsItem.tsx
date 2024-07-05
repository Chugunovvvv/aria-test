import { FC} from 'react'
import './ReviewsItem.scss'

interface IReviewsItem {
    name: string,
    img: string,
    alt: string,
    review: string
    tag: string
}


const ReviewsItem: FC<IReviewsItem> = ({name, img, alt, review,tag}) => {
  return (
    <li className='reviews__list-item'>
        <div className="reviews__list-person">
            <img src={img} alt={alt} />
            <div className="reviews__list-personInfo">
                <h2>{name}</h2>
                <span>{tag}</span>
            </div>
        </div>
        <div className="reviews__list-text">
            {review}
        </div>
    </li>
  )
}

export default ReviewsItem