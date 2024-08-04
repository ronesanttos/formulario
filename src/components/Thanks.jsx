import {
  BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill, BsFillEmojiFrownFill,

} from 'react-icons/bs'

import "./Thanks.css"
const emojiData = {
  unsatisfied: <BsFillEmojiFrownFill />,
  neutral: <BsFillEmojiNeutralFill />,
  satisfied: <BsFillEmojiSmileFill />,
  very_satisfied: <BsFillEmojiHeartEyesFill />
}

const Thanks = ({ data }) => {
  return (
    <div className='thanks-container'>
      <h2>Falta pouco...</h2>
      <p>A sua opinião é muito importante, em breve você receberá um cupom de 10% de desconto para sua proxima compra.</p>
      <p>Para concluir cua avaliação clique no botão Enviar abaixo.</p>
      <h3>Resumo da sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: {emojiData[data.review]}</span>
        <p className="review-data">
          <span>Comentário:</span>{data.comment}
        </p>
      </p>
    </div>
  )
}

export default Thanks
