import './Review.css'
import {
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill, BsFillEmojiFrownFill,

} from 'react-icons/bs'

const ReviewForm = ({ data, upadetedFiel }) => {
  return (
    <div className='review-form'>
      <div className="form-control score-container">
        <label className='radio-container'>
          <input type="radio" name="review" value="unsatisfied" required checked={data.review === "unsatisfied"} onChange={(e) => upadetedFiel("review", e.target.value)} />
          <BsFillEmojiFrownFill />
          <p>Insatisfeito</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="review" value="neutral" required checked={data.review === "neutral"} onChange={(e) => upadetedFiel("review", e.target.value)} />
          <BsFillEmojiNeutralFill />
          <p>Neutro</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="review" value="satisfied" required />
          <BsFillEmojiSmileFill checked={data.review === "satisfied"} onChange={(e) => upadetedFiel("review", e.target.value)} />
          <p>Satisfeito</p>
        </label>

        <label className='radio-container'>
          <input type="radio" name="review" value="very_satisfied" required checked={data.review === "very_satisfied"} onChange={(e) => upadetedFiel("review", e.target.value)} />
          <BsFillEmojiHeartEyesFill />
          <p>Muito satisfeito</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id='comment' placeholder='como foi sua experiência com o produto?...' required value={data.comment || ""} onChange={(e) => upadetedFiel("comment", e.target.value)}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm
