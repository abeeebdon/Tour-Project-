const Tour = ({ tour, handleDelete }) => {
  const { image, name, price, info, id } = tour
  return (
    <>
      <img src={image} alt="Tour image" className="img" />
      <p className="tour-price">{price}</p>
      <div className="tour-info">
        <h5>{name}</h5>
        {info.length <= 180 ? (
          <p>{info}</p>
        ) : (
          <p>
            {info.slice(0, 180)}
            <button className="info-btn" onClick={handleClick}>
              Load More
            </button>
          </p>
        )}
      </div>
      <button className="delete-btn" onClick={() => handleDelete(id)}>
        Not Interested
      </button>
    </>
  )
}
export default Tour
