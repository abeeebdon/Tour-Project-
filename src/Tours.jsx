import Tour from './Tour'

const Tours = ({ tours, handleDelete }) => {
  return (
    <div className="tours">
      {tours.map((tour) => {
        return (
          <div
            className="single-tour"
            style={{ minHeight: '550px' }}
            key={tour.id}
          >
            <Tour tour={tour} handleDelete={handleDelete} />
          </div>
        )
      })}
    </div>
  )
}
export default Tours
