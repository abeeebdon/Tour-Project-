import Tour from './Tour'

const Tours = ({ tours, handleDelete, handleClick }) => {
  if (tours < 1) {
    return (
      <button
        className="btn btn-block"
        style={{ marginTop: '2rem' }}
        onClick={handleClick}
      >
        Reload
      </button>
    )
  }
  return (
    <div className="tours">
      {tours.map((tour) => {
        return <Tour key={tour.id} tour={tour} handleDelete={handleDelete} />
      })}
    </div>
  )
}

export default Tours
