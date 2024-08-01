import './Review.css'
import {
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill, BsFillEmojiFrownFill,
  
} from 'react-icons/bs'
const ReviewForm = () => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input type="radio" name="review" value="unsatisfied" required />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="neutral" value="unsatisfied" required />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="satisfied" value="unsatisfied" required />
          <BsFillEmojiSmileFill />
          <p>Satisfeito</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="very_satisfied" value="unsatisfied" required />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id='comment' placeholder='como foi sua experiência com o produto?...' required></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
