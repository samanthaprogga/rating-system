return (
  <div className="App">
    {[...Array(5)].map((_, index) => {
      const currentRating = index + 1;
      return (
        <label key={index}>
          <input
            type="radio"
            name="rating"
            value={currentRating}
            onClick={() => setRating(currentRating)}
          />
          <FaStar
            className='star'
            size={50}
            color={currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            onMouseEnter={() => setHover(currentRating)}
            onMouseLeave={() => setHover(null)}
          />
        </label>
      );
    })}
    <p>Your Rating is {rating}</p>
  </div>
);
