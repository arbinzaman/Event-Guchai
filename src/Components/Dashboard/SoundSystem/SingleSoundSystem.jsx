import { useContext, useState } from "react";
import { MdOutlinePendingActions } from "react-icons/md";
import { AuthContext } from "../../../Api/Context/AuthProvider";

const SingleSoundSystem = ({ booking }) => {
  const { user } = useContext(AuthContext);
  const customerEmail = user?.email;
  const { sound_system } = booking;
  const quantity = sound_system;

  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const status = "not done";

  const handleBookSoundSystem = () => {
    const bookSoundSystem = {
      customerEmail,
      quantity,
      status,
    };
    console.log(bookSoundSystem);

    fetch("http://localhost:3001/sound-system", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookSoundSystem),
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
          setIsButtonDisabled(true);
          // document.getElementById("bookSoundSystem").disabled = true;
          console.log(data);
        } else {
          // toast.error("user added failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="card mt-5 w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{sound_system}</h2>
          <div className="card-actions justify-end">
            <button
              className="btn text-3xl "
              onClick={() => handleBookSoundSystem()}
              disabled={isButtonDisabled}
            >
             <MdOutlinePendingActions />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleSoundSystem;
