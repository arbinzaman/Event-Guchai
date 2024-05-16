import { useContext } from "react";
import { AuthContext } from "../../../../Api/Context/AuthProvider";

// eslint-disable-next-line react/prop-types
const SinglePricingCard = ({ event }) => {
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;

  const {
    // eslint-disable-next-line react/prop-types
    eventTitle,
    // eslint-disable-next-line react/prop-types
    price,
    // eslint-disable-next-line react/prop-types
    shortDescription,
    // eslint-disable-next-line react/prop-types
    food,
    // eslint-disable-next-line react/prop-types
    people,
    // eslint-disable-next-line react/prop-types
    sound_system,
    // eslint-disable-next-line react/prop-types
    decoration,
    // eslint-disable-next-line react/prop-types
    media,
  } = event;
  console.log(event);

  const handleBookEvent = () => {
    const bookEvent = {
      eventTitle,
      customerEmail,
      price,
      food,
      people,
      sound_system,
      decoration,
      media,
    };
    console.log(bookEvent);
    fetch("http://localhost:3001/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookEvent),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.insertId) {
          // toast.success("user added success");
          console.log(data);
        } else {
          // toast.error("user added failed");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="space-y-2">
            <h2 className="card-title text-3xl">{eventTitle}</h2>
            <p className="text-5xl mb-5 ">{price}</p>
            <p className="mt-5  leading-relaxed text-black-400">
              {shortDescription}
            </p>
            <ul className="flex-1 mb-6 text-black-400">
              <li className="flex mb-2 mt-5 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-cyan-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{food}</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-cyan-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{people}</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-cyan-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{sound_system}</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-cyan-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{decoration}</span>
              </li>
              <li className="flex mb-2 space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-shrink-0 w-6 h-6 text-cyan-300"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>{media}</span>
              </li>
              {/* <li className="flex mb-2 space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-cyan-300">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Venue [Personal Property]</span>
              </li> */}
            </ul>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() => handleBookEvent()}
              >
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePricingCard;
