import { useState } from 'react'

const Tour = ({ tour, handleDelete }) => {
  const { image, name, price, info, id } = tour
  const [readMore, setReadMore] = useState(false)
  return (
    <article className="single-tour">
      <img src={image} alt="Tour image" className="img" />
      <p className="tour-price">{price}</p>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button className="info-btn" onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button
          className="delete-btn btn-block btn"
          onClick={() => handleDelete(id)}
        >
          not interested
        </button>
      </div>
    </article>
  )
}
export default Tour
