const SingleSoundSystem = ({booking}) => {
    // console.log(booking);
  return (
    <div>
      <div className="card mt-5 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{booking.sound_system}</h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSoundSystem;
